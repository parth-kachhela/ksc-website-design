import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Website ko completely static HTML/CSS/JS mein export karega
  output: "export",

  // Static hosting par next/image server optimization available nahi hota
  images: {
    unoptimized: true,
  },

};

export default nextConfig;
