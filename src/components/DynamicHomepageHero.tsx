"use client";

import Image from "next/image";

const HERO_IMAGE_SRC = "/images/hero.PNG";

export function DynamicHomepageHero() {
  return (
    <div className="absolute inset-0 z-0">
      <Image
        src={HERO_IMAGE_SRC}
        alt="Hero background"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/10 pointer-events-none" aria-hidden="true" />
    </div>
  );
}
