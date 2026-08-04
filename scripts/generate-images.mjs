import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import sharp from "sharp";

const PUB = resolve("public");
const images = `${PUB}/images`;

for (const dir of [
  "home",
  "about",
  "services",
  "garden",
  "gallery",
  "video",
  "seo",
  "brand",
]) {
  mkdirSync(`${images}/${dir}`, { recursive: true });
}

// ---------- helpers ----------
function mulberry32(seed) {
  return function () {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const defs = `
  <defs>
    <filter id="shadow" x="-30%" y="-30%" width="160%" height="160%">
      <feDropShadow dx="0" dy="18" stdDeviation="22" flood-color="#122B16" flood-opacity="0.35"/>
    </filter>
    <filter id="soft" x="-40%" y="-40%" width="180%" height="180%">
      <feGaussianBlur stdDeviation="24"/>
    </filter>
    <filter id="blur8" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="10"/>
    </filter>
    <linearGradient id="skyPale" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#F6FBEF"/>
      <stop offset="0.5" stop-color="#E6F2D8"/>
      <stop offset="1" stop-color="#CBE6AC"/>
    </linearGradient>
    <linearGradient id="skySun" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#EAF5DD"/>
      <stop offset="1" stop-color="#C9E3AE"/>
    </linearGradient>
    <linearGradient id="skyGreen" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#1E3B24"/>
      <stop offset="1" stop-color="#0F2414"/>
    </linearGradient>
    <radialGradient id="sun" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0" stop-color="#FFF9DE" stop-opacity="0.95"/>
      <stop offset="0.4" stop-color="#F4E6AE" stop-opacity="0.55"/>
      <stop offset="1" stop-color="#F4E6AE" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="ground" cx="0.5" cy="0.5" r="0.6">
      <stop offset="0" stop-color="#C7E0A4"/>
      <stop offset="1" stop-color="#9CC978"/>
    </radialGradient>
    <radialGradient id="brown" cx="0.34" cy="0.3" r="1.1">
      <stop offset="0" stop-color="#9A6A38"/>
      <stop offset="0.4" stop-color="#7C4E26"/>
      <stop offset="0.75" stop-color="#5C3519"/>
      <stop offset="1" stop-color="#3D2110"/>
    </radialGradient>
    <radialGradient id="green" cx="0.32" cy="0.27" r="1.08">
      <stop offset="0" stop-color="#B0E268"/>
      <stop offset="0.3" stop-color="#5DAE43"/>
      <stop offset="0.7" stop-color="#2F7B34"/>
      <stop offset="1" stop-color="#1D5426"/>
    </radialGradient>
    <radialGradient id="greenSoft" cx="0.34" cy="0.28" r="1.1">
      <stop offset="0" stop-color="#8CCB4F"/>
      <stop offset="0.45" stop-color="#4E9A3B"/>
      <stop offset="1" stop-color="#25612B"/>
    </radialGradient>
  </defs>
`;

function greenCoconut(cx, cy, r, grad = "green") {
  const scale = r / 120;
  return `
  <g>
    <ellipse cx="${cx}" cy="${cy + r * 1.02}" rx="${r * 0.9}" ry="${r * 0.16}" fill="#17351C" opacity="0.4" filter="url(#blur8)"/>
    <circle cx="${cx}" cy="${cy}" r="${r}" fill="url(#${grad})"/>
    <ellipse cx="${cx - r * 0.42}" cy="${cy - r * 0.42}" rx="${r * 0.62}" ry="${r * 0.46}" fill="#FFFFFF" opacity="0.22"/>
    <ellipse cx="${cx - r * 0.34}" cy="${cy - r * 0.4}" rx="${r * 0.3}" ry="${r * 0.2}" fill="#FFFFFF" opacity="0.55"/>
    <path d="M ${cx - r * 0.05} ${cy - r * 0.92} C ${cx - r * 0.25} ${cy - r * 0.55} ${cx - r * 0.3} ${cy - r * 0.2} ${cx - r * 0.12} ${cy + r * 0.05}" stroke="#0E3A17" stroke-width="${2.2 * scale}" stroke-linecap="round" fill="none" opacity="0.5"/>
    <path d="M ${cx + r * 0.05} ${cy - r * 0.9} C ${cx + r * 0.2} ${cy - r * 0.5} ${cx + r * 0.26} ${cy - r * 0.15} ${cx + r * 0.1} ${cy + r * 0.1}" stroke="#0E3A17" stroke-width="${2 * scale}" stroke-linecap="round" fill="none" opacity="0.4"/>
    <path d="M ${cx - r * 0.85} ${cy + r * 0.15} A ${r} ${r} 0 0 0 ${cx + r * 0.85} ${cy + r * 0.15}" stroke="#123F1B" stroke-width="${6 * scale}" fill="none" opacity="0.35" stroke-linecap="round"/>
    <g transform="translate(${cx - r * 0.02} ${cy - r * 0.94})">
      <path d="M 0 0 Q ${-6 * scale} ${-10 * scale} ${-2 * scale} ${-18 * scale}" stroke="#1D5426" stroke-width="${3.4 * scale}" fill="none" stroke-linecap="round"/>
      <path d="M 0 0 Q ${5 * scale} ${-11 * scale} ${1 * scale} ${-17 * scale}" stroke="#1D5426" stroke-width="${3 * scale}" fill="none" stroke-linecap="round"/>
      <circle cx="0" cy="0" r="${4.6 * scale}" fill="#2F7B34"/>
    </g>
  </g>`;
}

function brownCoconut(cx, cy, r) {
  const scale = r / 120;
  const eyes = [
    [-0.18 * r, -0.42 * r],
    [0.22 * r, -0.38 * r],
    [0.02 * r, -0.12 * r],
  ];
  return `
  <g>
    <ellipse cx="${cx}" cy="${cy + r * 1.02}" rx="${r * 0.95}" ry="${r * 0.16}" fill="#172C14" opacity="0.4" filter="url(#blur8)"/>
    <circle cx="${cx}" cy="${cy}" r="${r}" fill="url(#brown)"/>
    <ellipse cx="${cx - r * 0.4}" cy="${cy - r * 0.42}" rx="${r * 0.58}" ry="${r * 0.42}" fill="#FFFFFF" opacity="0.12"/>
    <path d="M ${cx - r * 0.86} ${cy + r * 0.05} Q ${cx - r * 0.4} ${cy - r * 0.5} ${cx + r * 0.3} ${cy - r * 0.62} Q ${cx + r * 0.75} ${cy - r * 0.5} ${cx + r * 0.88} ${cy + r * 0.05}" stroke="#2A1508" stroke-width="${2.6 * scale}" fill="none" opacity="0.5"/>
    <path d="M ${cx - r * 0.6} ${cy + r * 0.72} Q ${cx - r * 0.15} ${cy + r * 0.1} ${cx + r * 0.62} ${cy + r * 0.7}" stroke="#2A1508" stroke-width="${2.2 * scale}" fill="none" opacity="0.45"/>
    <path d="M ${cx - r * 0.35} ${cy + r * 0.85} Q ${cx + r * 0.05} ${cy + r * 0.35} ${cx + r * 0.5} ${cy + r * 0.82}" stroke="#2A1508" stroke-width="${2 * scale}" fill="none" opacity="0.4"/>
    <path d="M ${cx - r * 0.25} ${cy - r * 0.7} Q ${cx + r * 0.05} ${cy - r * 0.2} ${cx + r * 0.3} ${cy - r * 0.66}" stroke="#2A1508" stroke-width="${2 * scale}" fill="none" opacity="0.35"/>
    ${eyes
      .map(
        ([ex, ey]) =>
          `<ellipse cx="${cx + ex}" cy="${cy + ey}" rx="${6 * scale}" ry="${4.2 * scale}" fill="#241106" opacity="0.85"/>`,
      )
      .join("")}
    <path d="M ${cx - r * 0.9} ${cy + r * 0.25} A ${r} ${r} 0 0 0 ${cx + r * 0.9} ${cy + r * 0.25}" stroke="#241106" stroke-width="${7 * scale}" fill="none" opacity="0.3" stroke-linecap="round"/>
  </g>`;
}

function frond(cx, cy, len, angleDeg, color, side = "down") {
  const rad = (angleDeg * Math.PI) / 180;
  const dx = Math.cos(rad);
  const dy = -Math.sin(rad);
  const ex = cx + dx * len;
  const ey = cy + dy * len;
  const mx = cx + dx * len * 0.55;
  const my = cy + dy * len * 0.55;
  const px = -dy; // perpendicular
  const py = dx;
  const spread = len * 0.22;
  const tip = len * 0.08;
  const blade = `
    <path d="M ${cx} ${cy}
      C ${mx + px * spread} ${my + py * spread} ${ex + px * tip} ${ey + py * tip} ${ex} ${ey}
      C ${ex - px * tip} ${ey - py * tip} ${mx - px * spread} ${my - py * spread} ${cx} ${cy} Z"
      fill="${color}"/>
    <path d="M ${cx} ${cy} Q ${mx} ${my} ${ex} ${ey}" stroke="${shadeOf(color, -26)}" stroke-width="2.6" fill="none" opacity="0.6" stroke-linecap="round"/>`;
  const leaflets = [];
  const n = 9;
  for (let i = 1; i < n; i++) {
    const t = i / n;
    const bx = cx + dx * len * t;
    const by = cy + dy * len * t;
    const w = len * (0.05 + 0.07 * (1 - Math.abs(t - 0.5)));
    leaflets.push(
      `<path d="M ${bx} ${by} C ${bx - px * w * 0.9} ${by - py * w * 0.9} ${bx - px * w * 1.1} ${by - py * w * 1.1} ${bx - px * w * 1.4} ${by - py * w * 1.2}" stroke="${shadeOf(color, -18)}" stroke-width="2" fill="none" opacity="0.55" stroke-linecap="round"/>`,
    );
    leaflets.push(
      `<path d="M ${bx} ${by} C ${bx + px * w * 0.9} ${by + py * w * 0.9} ${bx + px * w * 1.1} ${by + py * w * 1.1} ${bx + px * w * 1.4} ${by + py * w * 1.2}" stroke="${shadeOf(color, -18)}" stroke-width="2" fill="none" opacity="0.55" stroke-linecap="round"/>`,
    );
  }
  return `<g transform="${side === "up" ? "" : ""}">${blade}${leaflets.join("")}</g>`;
}

function shadeOf(hex, delta) {
  const c = hex.replace("#", "");
  const num = parseInt(c, 16);
  const r = Math.min(255, Math.max(0, (num >> 16) + delta));
  const g = Math.min(255, Math.max(0, ((num >> 8) & 0xff) + delta));
  const b = Math.min(255, Math.max(0, (num & 0xff) + delta));
  return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, "0")}`;
}

function palm(cx, baseY, scale = 1, trunkColor = "#4C3A20") {
  const topY = baseY - 360 * scale;
  const frondLen = 250 * scale;
  const parts = [];
  parts.push(
    `<path d="M ${cx - 9 * scale} ${baseY} C ${cx + 4 * scale} ${baseY - 120 * scale} ${cx - 7 * scale} ${baseY - 220 * scale} ${cx + 2 * scale} ${topY}" stroke="${trunkColor}" stroke-width="${16 * scale}" fill="none" stroke-linecap="round"/>`,
  );
  const segs = 14;
  for (let i = 0; i <= segs; i++) {
    const t = i / segs;
    const y = baseY - 360 * scale * t;
    parts.push(
      `<path d="M ${cx + Math.sin(t * 4.7) * 4 * scale - 8 * scale} ${y} Q ${cx + Math.sin(t * 4.7) * 4 * scale} ${y - 5} ${cx + Math.sin(t * 4.7) * 4 * scale + 8 * scale} ${y}" stroke="${shadeOf(trunkColor, 14)}" stroke-width="2" fill="none" opacity="0.5"/>`,
    );
  }
  for (const a of [-95, -55, -15, 25, 65]) {
    parts.push(frond(cx, topY + 6 * scale, frondLen, a, "#2E5E24", "up"));
  }
  parts.push(
    `<g filter="url(#shadow)">${brownCoconut(cx, topY + 30 * scale, 26 * scale)}</g>`,
  );
  return parts.join("");
}

function bokeh(rng, count, min, max, opacity) {
  const out = [];
  for (let i = 0; i < count; i++) {
    const x = Math.round(rng() * 1200);
    const y = Math.round(rng() * 700);
    const r = Math.round(min + rng() * (max - min));
    out.push(
      `<circle cx="${x}" cy="${y}" r="${r}" fill="#FFFFFF" opacity="${opacity}" filter="url(#blur8)"/>`,
    );
  }
  return out.join("");
}

function frame(inner, w = 1200, h = 800) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 ${w} ${h}" preserveAspectRatio="xMidYMid slice">
  ${defs}
  ${inner}
</svg>`;
}

async function write(name, dir, inner, w = 1200, h = 800) {
  const svg = frame(inner, w, h);
  const svgPath = `${images}/${dir}/${name}.svg`;
  writeFileSync(svgPath, svg);
  try {
    await sharp(Buffer.from(svg)).png().toFile(`${images}/${dir}/${name}.png`);
  } catch (err) {
    console.error("raster failed for", name, err.message);
  }
}

const rng = () => mulberry32(7);

// ================= HOME HERO =================
await write(
  "hero-coconut",
  "home",
  `
  <rect width="1200" height="900" fill="url(#skyPale)"/>
  <circle cx="980" cy="180" r="260" fill="url(#sun)"/>
  ${bokeh(rng, 12, 30, 90, 0.5)}
  <ellipse cx="600" cy="820" rx="620" ry="70" fill="url(#ground)" opacity="0.9"/>
  <g filter="url(#shadow)">
    ${greenCoconut(460, 470, 132)}
    ${greenCoconut(640, 610, 105, "greenSoft")}
    ${greenCoconut(330, 600, 88, "greenSoft")}
    ${brownCoconut(560, 700, 70)}
  </g>
  <g opacity="0.9">
    ${frond(760, 60, 300, 150, "#2E5E24", "up")}
    ${frond(1100, 120, 240, 190, "#37702A", "up")}
    ${frond(60, 780, 260, 12, "#37702A", "up")}
  </g>
  <g filter="url(#shadow)">
    ${greenCoconut(900, 500, 96, "greenSoft")}
  </g>
`,
  1200,
  900,
);

// ================= GALLERY 1 (garden) =================
await write(
  "garden-1",
  "gallery",
  `
  <rect width="1200" height="800" fill="url(#skySun)"/>
  <circle cx="300" cy="160" r="200" fill="url(#sun)"/>
  ${bokeh(rng, 10, 20, 70, 0.45)}
  <ellipse cx="600" cy="780" rx="640" ry="60" fill="url(#ground)"/>
  ${palm(180, 830, 0.95)}
  ${palm(1040, 830, 1.05)}
  <g filter="url(#shadow)">
    ${greenCoconut(620, 560, 118)}
    ${greenCoconut(460, 700, 92, "greenSoft")}
    ${brownCoconut(760, 690, 96)}
  </g>
  ${frond(1080, 60, 260, 165, "#2E5E24", "up")}
`,
  1200,
  800,
);

// ================= GALLERY 2 (tender stack) =================
await write(
  "garden-2",
  "gallery",
  `
  <rect width="1200" height="800" fill="url(#skyPale)"/>
  <circle cx="950" cy="150" r="230" fill="url(#sun)"/>
  ${bokeh(rng, 9, 20, 60, 0.5)}
  <ellipse cx="600" cy="780" rx="620" ry="60" fill="url(#ground)"/>
  <g filter="url(#shadow)">
    ${greenCoconut(590, 480, 140)}
    ${greenCoconut(420, 620, 108, "greenSoft")}
    ${greenCoconut(770, 620, 112)}
    ${greenCoconut(600, 730, 92, "greenSoft")}
  </g>
  ${frond(240, 80, 240, 125, "#37702A", "up")}
  ${frond(960, 70, 250, 55, "#2E5E24", "up")}
  <g opacity="0.85">
    <circle cx="330" cy="220" r="10" fill="#FFFFFF" opacity="0.7"/>
    <circle cx="520" cy="150" r="7" fill="#FFFFFF" opacity="0.6"/>
  </g>
`,
  1200,
  800,
);

// ================= GALLERY 3 (palm grove) =================
await write(
  "garden-3",
  "gallery",
  `
  <rect width="1200" height="800" fill="url(#skySun)"/>
  <circle cx="600" cy="180" r="240" fill="url(#sun)"/>
  ${bokeh(rng, 8, 20, 60, 0.5)}
  <ellipse cx="600" cy="800" rx="640" ry="60" fill="url(#ground)"/>
  ${palm(260, 840, 0.9)}
  ${palm(620, 850, 1.1)}
  ${palm(970, 840, 0.95)}
  ${frond(620, 60, 230, 90, "#2E5E24", "up")}
  <g filter="url(#shadow)">
    ${greenCoconut(620, 620, 96, "greenSoft")}
  </g>
`,
  1200,
  800,
);

// ================= GALLERY 4 (bulk brown) =================
await write(
  "garden-4",
  "gallery",
  `
  <rect width="1200" height="800" fill="url(#skyPale)"/>
  <circle cx="160" cy="140" r="210" fill="url(#sun)"/>
  ${bokeh(rng, 9, 20, 60, 0.5)}
  <ellipse cx="600" cy="800" rx="620" ry="60" fill="url(#ground)"/>
  <g filter="url(#shadow)">
    ${brownCoconut(520, 640, 116)}
    ${brownCoconut(720, 660, 112)}
    ${brownCoconut(620, 500, 118)}
    ${brownCoconut(430, 510, 92)}
    ${brownCoconut(820, 500, 94)}
  </g>
  ${frond(140, 100, 220, 130, "#37702A", "up")}
  ${frond(1060, 90, 240, 50, "#2E5E24", "up")}
`,
  1200,
  800,
);

// ================= GARDEN HERO =================
await write(
  "garden-hero",
  "garden",
  `
  <rect width="1200" height="700" fill="url(#skySun)"/>
  <circle cx="900" cy="140" r="230" fill="url(#sun)"/>
  ${bokeh(rng, 9, 20, 70, 0.5)}
  <ellipse cx="600" cy="690" rx="640" ry="56" fill="url(#ground)"/>
  ${palm(240, 720, 0.9)}
  ${palm(980, 720, 1.05)}
  <g filter="url(#shadow)">
    ${greenCoconut(590, 470, 128)}
    ${greenCoconut(420, 610, 98, "greenSoft")}
    ${brownCoconut(760, 600, 102)}
  </g>
  ${frond(1060, 70, 250, 165, "#2E5E24", "up")}
`,
  1200,
  700,
);

// ================= TENDER GARDEN =================
await write(
  "tender-garden",
  "garden",
  `
  <rect width="1200" height="700" fill="url(#skyPale)"/>
  <circle cx="250" cy="130" r="220" fill="url(#sun)"/>
  ${bokeh(rng, 8, 20, 60, 0.5)}
  <ellipse cx="600" cy="690" rx="620" ry="56" fill="url(#ground)"/>
  ${palm(600, 730, 1.05)}
  <g filter="url(#shadow)">
    ${greenCoconut(430, 500, 126)}
    ${greenCoconut(770, 500, 118, "greenSoft")}
  </g>
  <g opacity="0.9">
    ${frond(400, 90, 230, 130, "#37702A", "up")}
    ${frond(820, 80, 230, 50, "#2E5E24", "up")}
  </g>
`,
  1200,
  700,
);

// ================= GREEN GARDEN =================
await write(
  "green-garden",
  "garden",
  `
  <rect width="1200" height="700" fill="url(#skyPale)"/>
  <circle cx="950" cy="140" r="230" fill="url(#sun)"/>
  ${bokeh(rng, 9, 20, 65, 0.5)}
  <ellipse cx="600" cy="690" rx="620" ry="56" fill="url(#ground)"/>
  <g filter="url(#shadow)">
    ${greenCoconut(600, 440, 150)}
    ${greenCoconut(400, 610, 112, "greenSoft")}
    ${greenCoconut(810, 610, 118)}
  </g>
  ${frond(200, 90, 240, 125, "#37702A", "up")}
  ${frond(1000, 80, 250, 55, "#2E5E24", "up")}
`,
  1200,
  700,
);

// ================= ABOUT =================
await write(
  "about-garden",
  "about",
  `
  <rect width="1200" height="640" fill="url(#skySun)"/>
  <circle cx="600" cy="140" r="230" fill="url(#sun)"/>
  ${bokeh(rng, 9, 20, 70, 0.5)}
  <ellipse cx="600" cy="630" rx="640" ry="52" fill="url(#ground)"/>
  ${palm(240, 660, 0.9)}
  ${palm(980, 660, 1.0)}
  <g filter="url(#shadow)">
    ${greenCoconut(590, 430, 122)}
    ${greenCoconut(420, 560, 92, "greenSoft")}
    ${brownCoconut(760, 550, 98)}
  </g>
  ${frond(1060, 60, 250, 165, "#2E5E24", "up")}
`,
  1200,
  640,
);

// ================= SERVICES =================
await write(
  "tender-coconut",
  "services",
  `
  <rect width="1200" height="760" fill="url(#skyPale)"/>
  <circle cx="300" cy="140" r="220" fill="url(#sun)"/>
  ${bokeh(rng, 8, 20, 60, 0.5)}
  <ellipse cx="600" cy="750" rx="620" ry="56" fill="url(#ground)"/>
  ${palm(600, 770, 1.0)}
  <g filter="url(#shadow)">
    ${greenCoconut(430, 520, 128)}
    ${greenCoconut(770, 520, 122, "greenSoft")}
  </g>
  <g opacity="0.9">
    ${frond(380, 80, 230, 130, "#37702A", "up")}
    ${frond(820, 80, 230, 50, "#2E5E24", "up")}
  </g>
`,
  1200,
  760,
);

await write(
  "green-coconut",
  "services",
  `
  <rect width="1200" height="760" fill="url(#skyPale)"/>
  <circle cx="900" cy="140" r="230" fill="url(#sun)"/>
  ${bokeh(rng, 9, 20, 65, 0.5)}
  <ellipse cx="600" cy="750" rx="620" ry="56" fill="url(#ground)"/>
  <g filter="url(#shadow)">
    ${greenCoconut(600, 460, 152)}
    ${greenCoconut(400, 640, 112, "greenSoft")}
    ${greenCoconut(815, 640, 118)}
  </g>
  ${frond(200, 90, 240, 125, "#37702A", "up")}
  ${frond(1000, 80, 250, 55, "#2E5E24", "up")}
`,
  1200,
  760,
);

await write(
  "bulk-coconut",
  "services",
  `
  <rect width="1200" height="760" fill="url(#skyPale)"/>
  <circle cx="180" cy="130" r="210" fill="url(#sun)"/>
  ${bokeh(rng, 9, 20, 60, 0.5)}
  <ellipse cx="600" cy="750" rx="620" ry="56" fill="url(#ground)"/>
  <g filter="url(#shadow)">
    ${brownCoconut(520, 620, 122)}
    ${brownCoconut(740, 640, 118)}
    ${brownCoconut(630, 480, 122)}
    ${brownCoconut(430, 490, 94)}
    ${brownCoconut(835, 490, 96)}
  </g>
  ${frond(140, 100, 220, 130, "#37702A", "up")}
  ${frond(1060, 90, 240, 50, "#2E5E24", "up")}
`,
  1200,
  760,
);

// ================= VIDEO POSTER =================
await write(
  "coconut-garden-poster",
  "video",
  `
  <rect width="1200" height="675" fill="url(#skyGreen)"/>
  <circle cx="950" cy="120" r="240" fill="url(#sun)" opacity="0.5"/>
  ${bokeh(rng, 8, 20, 70, 0.16)}
  <ellipse cx="600" cy="680" rx="660" ry="60" fill="#0C1F10" opacity="0.9"/>
  <g opacity="0.5">
    ${palm(920, 730, 1.05)}
  </g>
  ${frond(230, 150, 260, 150, "#24501F", "up")}
  ${frond(1030, 140, 260, 30, "#1C3E1A", "up")}
  <g filter="url(#shadow)" opacity="0.95">
    ${greenCoconut(580, 430, 120)}
    ${greenCoconut(420, 560, 88, "greenSoft")}
    ${brownCoconut(740, 550, 94)}
  </g>
  <g opacity="0.85">
    <rect x="60" y="600" width="1080" height="2" fill="#91CE38"/>
    <text x="600" y="645" font-family="Georgia, 'Times New Roman', serif" font-size="30" fill="#FFFFFF" text-anchor="middle" font-style="italic" letter-spacing="1">The coconut garden story · Gadu, Junagadh, Gujarat</text>
  </g>
`,
  1200,
  675,
);

console.log("Realistic coconut images generated (SVG + PNG).");

// ================= LIGHT LOGO VARIANT =================
function recolorToLight(svg) {
  return svg.replace(/fill="#([0-9a-fA-F]{6})"/g, (m, hex) => {
    const num = parseInt(hex, 16);
    const r = (num >> 16) & 0xff;
    const g = (num >> 8) & 0xff;
    const b = num & 0xff;
    const lum = 0.2126 * r + 0.7152 * g + 0.0722 * b;
    const isGreen = g > r && g >= b;
    if (lum < 90) return 'fill="#FFFFFF"';
    if (isGreen) {
      const t = Math.min(1, lum / 255);
      if (t < 0.45) return 'fill="#C9E8A9"';
      if (t < 0.7) return 'fill="#A9D97F"';
      return 'fill="#FFFFFF"';
    }
    if (r > g && g > b) return 'fill="#F3EBD8"';
    return 'fill="#FFFFFF"';
  });
}

const logoSource = readFileSync(`${images}/brand/kcs-logo.svg`, "utf8");
const lightSvg = recolorToLight(logoSource);
writeFileSync(`${images}/brand/kcs-logo-light.svg`, lightSvg);
await sharp(Buffer.from(lightSvg)).png().toFile(`${images}/brand/kcs-logo-light.png`);
console.log("Light logo variant written.");

// ================= FAVICON / APPLE / OG =================
const faviconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
  <rect width="64" height="64" rx="14" fill="#234B20"/>
  <circle cx="32" cy="38" r="16" fill="#4A9232"/>
  <circle cx="32" cy="38" r="10" fill="#91CE38"/>
  <path d="M32 22 C30 14 22 10 14 10 C14 18 18 26 26 28 C28 29 30 29 32 28 Z" fill="#183C1C"/>
  <path d="M32 22 C34 14 42 10 50 10 C50 18 46 26 38 28 C36 29 34 29 32 28 Z" fill="#4A9232"/>
</svg>`;

await sharp(Buffer.from(faviconSvg)).png().toFile(`${PUB}/favicon-64.png`);
await sharp(Buffer.from(faviconSvg)).resize(180, 180).png().toFile(`${PUB}/apple-touch-icon.png`);
await sharp(Buffer.from(faviconSvg)).resize(192, 192).png().toFile(`${PUB}/icon-192.png`);
await sharp(Buffer.from(faviconSvg)).resize(512, 512).png().toFile(`${PUB}/icon-512.png`);

const ogSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" width="1200" height="630">
  <defs>
    <linearGradient id="og" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#183C1C"/>
      <stop offset="1" stop-color="#234B20"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#og)"/>
  <rect x="0" y="0" width="1200" height="12" fill="#91CE38"/>
  <circle cx="1080" cy="80" r="240" fill="#91CE38" opacity="0.12"/>
  <circle cx="60" cy="600" r="280" fill="#4A9232" opacity="0.16"/>
  <g opacity="0.9">
    <circle cx="980" cy="460" r="95" fill="#4A9232"/>
    <circle cx="980" cy="460" r="58" fill="#91CE38"/>
    <path d="M980 370 C979 346 962 330 940 330 C940 352 950 372 966 378 C972 380 978 380 980 378 Z" fill="#183C1C"/>
    <path d="M980 370 C981 346 998 330 1020 330 C1020 352 1010 372 994 378 C988 380 982 380 980 378 Z" fill="#234B20"/>
  </g>
  <text x="70" y="240" font-family="Georgia, 'Times New Roman', serif" font-size="64" fill="#FFFFFF" font-weight="bold">Kankeshwari Coconut Supplier</text>
  <text x="70" y="305" font-family="Georgia, serif" font-size="34" fill="#DDEFCB" font-style="italic">Tender, Green &amp; Bulk Coconut Supply</text>
  <rect x="72" y="338" width="150" height="5" fill="#91CE38"/>
  <text x="70" y="390" font-family="Arial, sans-serif" font-size="28" fill="#91CE38" letter-spacing="6">GADU  •  CHORVAD  •  JUNAGADH  •  GUJARAT</text>
  <text x="70" y="560" font-family="Arial, sans-serif" font-size="26" fill="#DDEFCB">kankeshwaricoconutsupplier.com</text>
  <text x="70" y="604" font-family="Arial, sans-serif" font-size="22" fill="#9fce8f">+91 63522 95050  •  Gadu, Junagadh, Gujarat - 362255</text>
</svg>`;

await sharp(Buffer.from(ogSvg)).jpeg({ quality: 90 }).toFile(`${images}/seo/kcs-og-image.jpg`);
await sharp(Buffer.from(ogSvg)).png().toFile(`${images}/seo/kcs-og-image.png`);
console.log("Favicons + OG written.");
