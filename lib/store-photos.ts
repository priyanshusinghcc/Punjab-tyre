// lib/store-photos.ts — real photos from inside the Punjab Tyre store (Rohtak).
// Source images: 1200x1600 JPEG, metadata (incl. GPS) stripped.

export type StorePhoto = { src: string; alt: string; caption: string };

export const STORE_PHOTOS = {
  tyreWall: {
    src: "/images/store/yokohama-tyre-wall.jpg",
    alt: "Wall of Yokohama car tyres inside Punjab Tyre, Rohtak",
    caption: "Yokohama tyre wall",
  },
  rangeDisplay: {
    src: "/images/store/yokohama-range-display.jpg",
    alt: "Yokohama BluEarth, ADVAN, Geolandar and S.drive tyre display at Punjab Tyre, Rohtak",
    caption: "Yokohama range display",
  },
  alloyDisplay: {
    src: "/images/store/alloy-wheel-display.jpg",
    alt: "Alloy wheel display wall with dozens of designs at Punjab Tyre, Rohtak",
    caption: "Alloy wheel display",
  },
  showroom: {
    src: "/images/store/yokohama-showroom.jpg",
    alt: "Punjab Tyre showroom in Rohtak with Yokohama tyre racks",
    caption: "Our showroom",
  },
  tyreRacks: {
    src: "/images/store/yokohama-tyre-racks.jpg",
    alt: "Fresh stock of Yokohama tyres on racks at Punjab Tyre, Rohtak",
    caption: "Fresh tyre stock",
  },
  showroomYcn: {
    src: "/images/store/showroom-yokohama-club-network.jpg",
    alt: "Inside Punjab Tyre, Rohtak: Yokohama tyre racks, Advantec wheel kiosk and the Member of Yokohama Club Network sign",
    caption: "Our showroom — Member of Yokohama Club Network",
  },
  advantecWall: {
    src: "/images/store/advantec-brand-wall.jpg",
    alt: "Advantec Wheels brand wall with colourful alloy wheel designs inside Punjab Tyre, Rohtak",
    caption: "Advantec Wheels brand wall",
  },
  advantecBrandWall: {
    src: "/images/store/advantec-brand-wall-store.jpg",
    alt: "Advantec Wheels welcomes Punjab Tyre, Rohtak to the Advantec Wheels Brand Wall Store family",
    caption: "Advantec Wheels Brand Wall Store — Punjab Tyre, Rohtak",
  },
} satisfies Record<string, StorePhoto>;

export const STORE_GALLERY: StorePhoto[] = [
  STORE_PHOTOS.showroomYcn,
  STORE_PHOTOS.advantecWall,
  STORE_PHOTOS.rangeDisplay,
  STORE_PHOTOS.alloyDisplay,
  STORE_PHOTOS.tyreWall,
];
