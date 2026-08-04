"use client";

import { useEffect, useRef, useState } from "react";
import { CheckCircle2, Volume2, VolumeX } from "lucide-react";

import { SectionHeading } from "@/components/global/SectionHeading";
import { Reveal } from "@/components/global/Reveal";
import { gardenStory } from "@/app/_components/home.data";

const VIDEO_SRC = "/videos/coconut-garden.mp4";

export function HomeGardenStory() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const [videoFailed, setVideoFailed] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;

    if (!section || !video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {
            // Muted autoplay can still be blocked by some browsers.
          });
        } else {
          video.pause();
        }
      },
      {
        threshold: 0.35,
      },
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  const toggleMute = () => {
    const video = videoRef.current;

    if (!video) return;

    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  return (
    <section
      ref={sectionRef}
      className="overflow-hidden bg-white py-16 sm:py-20 lg:py-24"
      aria-labelledby="garden-story-title"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* Left Content */}
          <Reveal>
            <div>
              <SectionHeading
                align="left"
                eyebrow={gardenStory.eyebrow}
                title={gardenStory.title}
                description={gardenStory.description}
              />

              <div className="mt-7 space-y-4">
                {gardenStory.highlights.map((highlight) => (
                  <div
                    key={highlight}
                    className="flex items-start gap-3 text-sm leading-6 text-muted-foreground sm:text-base"
                  >
                    <CheckCircle2
                      className="mt-0.5 size-5 shrink-0 text-primary"
                      aria-hidden="true"
                    />

                    <span>{highlight}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-2xl border border-primary/10 bg-brand-pale p-5">
                <p className="text-sm leading-6 text-muted-foreground sm:text-base">
                  {gardenStory.note}
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative overflow-hidden rounded-[2rem] border border-border bg-brand-deep shadow-2xl">
              <div className="relative aspect-video w-full bg-black">
                {videoFailed ? (
                  <div className="flex h-full w-full flex-col items-center justify-center gap-3 px-6 text-center">
                    <p className="font-heading text-xl font-semibold text-white">
                      Video Coming Soon
                    </p>

                    <p className="max-w-md text-sm leading-6 text-white/70">
                      The coconut garden and sourcing journey video is currently
                      being prepared.
                    </p>
                  </div>
                ) : (
                  <video
                    ref={videoRef}
                    className="h-170 w-full object-cover"
                    src={VIDEO_SRC}
                    aria-label={gardenStory.videoTitle}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    onError={() => setVideoFailed(true)}
                  />
                )}

                {!videoFailed && (
                  <button
                    type="button"
                    onClick={toggleMute}
                    aria-label={isMuted ? "Unmute video" : "Mute video"}
                    className="absolute right-4 top-4 z-10 flex size-11 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white backdrop-blur-md transition hover:bg-black/70"
                  >
                    {isMuted ? (
                      <VolumeX className="size-5" aria-hidden="true" />
                    ) : (
                      <Volume2 className="size-5" aria-hidden="true" />
                    )}
                  </button>
                )}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
