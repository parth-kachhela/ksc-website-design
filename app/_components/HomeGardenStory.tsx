"use client";

import Image from "next/image";
import { useState } from "react";
import { Play, X } from "lucide-react";

import { SectionHeading } from "@/components/global/SectionHeading";
import { Reveal } from "@/components/global/Reveal";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  gardenStory,
  galleryImages,
} from "@/app/_components/home.data";

const VIDEO_SRC = "/videos/coconut-garden.mp4";

export function HomeGardenStory() {
  const [open, setOpen] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);

  return (
    <section
      className="overflow-hidden bg-white py-16 sm:py-20"
      aria-labelledby="garden-story-title"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow={gardenStory.eyebrow}
            title={gardenStory.title}
            description={gardenStory.description}
          />
        </Reveal>

        <Reveal className="mt-12">
          <div className="overflow-hidden rounded-[2rem] border border-border bg-brand-deep shadow-xl">
            <div className="relative aspect-video w-full">
              <Image
                src={gardenStory.videoPoster}
                alt="Coconut garden near Gadu, Chorvad, Junagadh, Gujarat"
                fill
                sizes="(max-width: 1280px) 100vw, 1200px"
                className="object-cover opacity-90"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-black/30">
                <Button
                  size="icon-lg"
                  aria-label="Play coconut garden video"
                  onClick={() => setOpen(true)}
                  className="size-20 rounded-full bg-white/95 text-primary shadow-xl transition-transform duration-200 hover:scale-105"
                >
                  <Play className="size-8 fill-current" aria-hidden="true" />
                </Button>
                <p className="px-6 text-center text-base font-medium text-white">
                  {gardenStory.videoTitle}
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mx-auto mt-8 max-w-3xl text-center text-base leading-7 text-muted-foreground">
            {gardenStory.note}
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {galleryImages.map((image, index) => (
            <Reveal key={image.src} delay={index * 0.06}>
              <figure className="group overflow-hidden rounded-2xl border border-border bg-white transition-shadow duration-300 hover:shadow-lg">
                <div className="relative aspect-[4/5]">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 640px) 50vw, 25vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                {image.caption ? (
                  <figcaption className="border-t border-border bg-brand-pale px-3 py-2.5 text-xs leading-4 font-medium text-muted-foreground">
                    {image.caption}
                  </figcaption>
                ) : null}
              </figure>
            </Reveal>
          ))}
        </div>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-4xl gap-0 overflow-hidden p-0">
          <DialogHeader className="flex-row items-center justify-between gap-4 border-b border-border p-4">
            <div>
              <DialogTitle className="font-heading text-lg font-semibold text-foreground">
                {gardenStory.videoTitle}
              </DialogTitle>
              <DialogDescription className="text-sm text-muted-foreground">
                Coconut garden and supply journey
              </DialogDescription>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setOpen(false)}
              aria-label="Close video"
            >
              <X className="size-4" aria-hidden="true" />
            </Button>
          </DialogHeader>
          <div className="aspect-video w-full bg-black">
            {videoFailed ? (
              <div className="flex h-full w-full flex-col items-center justify-center gap-2 px-6 text-center">
                <p className="text-base font-medium text-white">
                  The coconut garden video is being prepared.
                </p>
                <p className="text-sm text-white/70">
                  Meanwhile, explore the gallery or contact the supplier
                  directly for more information.
                </p>
              </div>
            ) : (
              <video
                className="h-full w-full"
                src={VIDEO_SRC}
                poster={gardenStory.videoPoster}
                controls
                preload="none"
                onError={() => setVideoFailed(true)}
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}