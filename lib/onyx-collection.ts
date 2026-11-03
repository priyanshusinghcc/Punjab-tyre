// Generated from the Onyx photo folder (photos-to-add/onyx), shared with permission from Onyx Wheels.
// Fitment = [rim inches, width (J) or null, PCD or null]. Images live in /public/images/onyx (full) and /t (thumbnail).

export type OnyxFitment = [rim: number, width: string | null, pcd: string | null];
export type OnyxFinish = { name: string; img: string; fit: OnyxFitment[] };
export type OnyxDesign = { code: string | null; note: string | null; finishes: OnyxFinish[] };

export const ONYX_IMG = (file: string) => `/images/onyx/${file}`;
export const ONYX_THUMB = (file: string) => `/images/onyx/t/${file}`;

export const ONYX_DESIGNS: OnyxDesign[] = [
 {
  "code": "OX-01",
  "note": null,
  "finishes": [
   {
    "name": "Dia-Cut",
    "img": "ox-01-16x7-5-5x100-5x112-dia-cut.webp",
    "fit": [
     [
      16,
      "7.5",
      "5x100"
     ],
     [
      16,
      "7.5",
      "5x112"
     ]
    ]
   },
   {
    "name": "Black Dia-Cut",
    "img": "ox-01-16x7-5-5x100-5x112-dia-cut.webp",
    "fit": [
     [
      16,
      "7.5",
      "5x100"
     ],
     [
      16,
      "7.5",
      "5x112"
     ]
    ]
   },
   {
    "name": "Titanium Dia-Cut",
    "img": "ox-01-16x7-5-5x114-3-titanium-dia-cut.webp",
    "fit": [
     [
      16,
      "7.5",
      "5x114.3"
     ]
    ]
   }
  ]
 },
 {
  "code": "OX-02",
  "note": null,
  "finishes": [
   {
    "name": "Dia-Cut",
    "img": "ox-02-14x6-0-4x100-dia-cut.webp",
    "fit": [
     [
      14,
      "6.0",
      "4x100"
     ],
     [
      15,
      "6.5",
      "4x100"
     ],
     [
      15,
      "6.5",
      "5x100"
     ],
     [
      15,
      "6.5",
      "5x114.3"
     ],
     [
      16,
      "7.0",
      "4x100"
     ],
     [
      16,
      "7.0",
      "4x108"
     ],
     [
      16,
      "7.0",
      "5x114.3"
     ],
     [
      17,
      "7.5",
      "4x100"
     ],
     [
      17,
      "7.5",
      "5x114.3"
     ],
     [
      18,
      "8.0",
      "5x114.3"
     ]
    ]
   },
   {
    "name": "Black Dia-Cut",
    "img": "ox-02-14x6-0-4x100-dia-cut.webp",
    "fit": [
     [
      18,
      "8.0",
      "4x100"
     ]
    ]
   },
   {
    "name": "HS",
    "img": "ox-02-14x6-0-4x100-hs.webp",
    "fit": [
     [
      14,
      "6.0",
      "4x100"
     ],
     [
      14,
      "6.0",
      "4x108"
     ],
     [
      15,
      "6.5",
      "4x100"
     ],
     [
      15,
      "6.5",
      "5x100"
     ],
     [
      15,
      "6.5",
      "5x114.3"
     ],
     [
      16,
      "7.0",
      "4x100"
     ],
     [
      16,
      "7.0",
      "4x108"
     ],
     [
      16,
      "7.0",
      "5x100"
     ],
     [
      16,
      "7.0",
      "5x112"
     ],
     [
      16,
      "7.0",
      "5x114.3"
     ],
     [
      17,
      null,
      "5x112"
     ],
     [
      17,
      "7.5",
      "4x100"
     ],
     [
      17,
      "7.5",
      "4x108"
     ],
     [
      17,
      "7.5",
      "5x100"
     ],
     [
      17,
      "7.5",
      "5x114.3"
     ],
     [
      18,
      "8.0",
      "4x100"
     ],
     [
      18,
      "8.0",
      "5x108"
     ],
     [
      18,
      "8.0",
      "5x112"
     ],
     [
      18,
      "8.0",
      "5x114.3"
     ]
    ]
   },
   {
    "name": "Glossy Black",
    "img": "ox-02-14x6-0-4x108-glossy-black.webp",
    "fit": [
     [
      14,
      "6.0",
      "4x108"
     ],
     [
      15,
      "6.5",
      "4x100"
     ],
     [
      15,
      "6.5",
      "4x108"
     ],
     [
      15,
      "6.5",
      "5x100"
     ],
     [
      15,
      "6.5",
      "5x114.3"
     ],
     [
      16,
      "7.0",
      "4x100"
     ],
     [
      16,
      "7.0",
      "4x108"
     ],
     [
      16,
      "7.0",
      "5x100"
     ],
     [
      16,
      "7.0",
      "5x112"
     ],
     [
      16,
      "7.0",
      "5x114.3"
     ],
     [
      17,
      "7.5",
      "4x100"
     ],
     [
      17,
      "7.5",
      "5x100"
     ],
     [
      17,
      "7.5",
      "5x108"
     ],
     [
      18,
      "8.0",
      "4x100"
     ],
     [
      18,
      "8.0",
      "5x108"
     ],
     [
      18,
      "8.0",
      "5x112"
     ],
     [
      18,
      "8.0",
      "5x114.3"
     ]
    ]
   },
   {
    "name": "Matt Black",
    "img": "ox-02-14x6-0-4x100-matt-black.webp",
    "fit": [
     [
      14,
      "6.0",
      "4x100"
     ],
     [
      15,
      "6.5",
      "4x100"
     ],
     [
      15,
      "6.5",
      "4x108"
     ],
     [
      15,
      "6.5",
      "5x100"
     ],
     [
      15,
      "6.5",
      "5x114.3"
     ],
     [
      16,
      "7.0",
      "4x100"
     ],
     [
      16,
      "7.0",
      "4x108"
     ],
     [
      16,
      "7.0",
      "5x100"
     ],
     [
      16,
      "7.0",
      "5x114.3"
     ],
     [
      17,
      null,
      "5x112"
     ],
     [
      17,
      "7.5",
      "4x100"
     ],
     [
      17,
      "7.5",
      "5x114.3"
     ],
     [
      18,
      "8.0",
      "4x100"
     ]
    ]
   },
   {
    "name": "Titanium",
    "img": "ox-02-14x6-0-4x100-titanium.webp",
    "fit": [
     [
      14,
      "6.0",
      "4x100"
     ],
     [
      15,
      "6.5",
      "4x100"
     ],
     [
      15,
      "6.5",
      "4x108"
     ],
     [
      15,
      "6.5",
      "5x100"
     ],
     [
      15,
      "6.5",
      "5x114.3"
     ],
     [
      16,
      "7.0",
      "4x100"
     ],
     [
      16,
      "7.0",
      "4x108"
     ],
     [
      16,
      "7.0",
      "5x100"
     ],
     [
      16,
      "7.0",
      "5x114.3"
     ],
     [
      17,
      null,
      "5x112"
     ],
     [
      17,
      "7.5",
      "4x100"
     ],
     [
      17,
      "7.5",
      "5x100"
     ],
     [
      17,
      "7.5",
      "5x114.3"
     ]
    ]
   },
   {
    "name": "Copper",
    "img": "ox-02-14x6-0-4x108-copper.webp",
    "fit": [
     [
      14,
      "6.0",
      "4x108"
     ],
     [
      15,
      "6.5",
      "4x100"
     ],
     [
      15,
      "6.5",
      "4x108"
     ],
     [
      15,
      "6.5",
      "5x100"
     ],
     [
      15,
      "6.5",
      "5x114.3"
     ],
     [
      16,
      "7.0",
      "4x100"
     ],
     [
      16,
      "7.0",
      "5x100"
     ],
     [
      16,
      "7.0",
      "5x112"
     ],
     [
      16,
      "7.0",
      "5x114.3"
     ],
     [
      17,
      null,
      "5x112"
     ],
     [
      17,
      "7.5",
      "4x100"
     ],
     [
      17,
      "7.5",
      "5x114.3"
     ],
     [
      18,
      "8.0",
      "4x100"
     ],
     [
      18,
      "8.0",
      "5x112"
     ],
     [
      18,
      "8.0",
      "5x114.3"
     ]
    ]
   },
   {
    "name": "Glossy Titanium",
    "img": "ox-02-15x6-5-5x100-titanium.webp",
    "fit": [
     [
      17,
      "7.5",
      "5x108"
     ]
    ]
   }
  ]
 },
 {
  "code": "OX-03",
  "note": null,
  "finishes": [
   {
    "name": "HS",
    "img": "ox-03-15x6-5-4x100-hs.webp",
    "fit": [
     [
      15,
      "6.5",
      "4x100"
     ],
     [
      15,
      "6.5",
      "5x114.3"
     ]
    ]
   },
   {
    "name": "Glossy Black",
    "img": "ox-03-15x6-5-4x100-glossy-black.webp",
    "fit": [
     [
      15,
      "6.5",
      "4x100"
     ],
     [
      15,
      "6.5",
      "5x114.3"
     ]
    ]
   },
   {
    "name": "Matt Black",
    "img": "ox-03-15x6-5-4x100-glossy-black.webp",
    "fit": [
     [
      15,
      "6.5",
      "4x100"
     ],
     [
      15,
      "6.5",
      "5x114.3"
     ]
    ]
   },
   {
    "name": "Copper",
    "img": "ox-03-15x6-5-4x100-copper.webp",
    "fit": [
     [
      15,
      "6.5",
      "4x100"
     ],
     [
      15,
      "6.5",
      "5x114.3"
     ]
    ]
   }
  ]
 },
 {
  "code": "OX-04",
  "note": null,
  "finishes": [
   {
    "name": "Dia-Cut",
    "img": "ox-04-15x6-5-5x100-5x114-3-dia-cut.webp",
    "fit": [
     [
      15,
      "6.5",
      "5x100"
     ],
     [
      15,
      "6.5",
      "5x114.3"
     ]
    ]
   },
   {
    "name": "Black Dia-Cut",
    "img": "ox-04-14x6-0-4x100-black-dia-cut.webp",
    "fit": [
     [
      14,
      "6.0",
      "4x100"
     ]
    ]
   },
   {
    "name": "HS",
    "img": "ox-04-14x6-0-4x100-hs.webp",
    "fit": [
     [
      14,
      "6.0",
      "4x100"
     ]
    ]
   },
   {
    "name": "Copper",
    "img": "ox-04-14x6-0-4x100-copper.webp",
    "fit": [
     [
      14,
      "6.0",
      "4x100"
     ]
    ]
   }
  ]
 },
 {
  "code": "OX-05",
  "note": null,
  "finishes": [
   {
    "name": "Dia-Cut",
    "img": "ox-05-16x7-0-4x100-dia-cut.webp",
    "fit": [
     [
      16,
      "7.0",
      "4x100"
     ]
    ]
   },
   {
    "name": "Black Dia-Cut",
    "img": "ox-05-16x7-0-5x100-black-dia-cut.webp",
    "fit": [
     [
      16,
      "7.0",
      "5x100"
     ],
     [
      16,
      "7.0",
      "5x114.3"
     ]
    ]
   },
   {
    "name": "HS",
    "img": "ox-05-16x7-0-4x100-hs.webp",
    "fit": [
     [
      16,
      "7.0",
      "4x100"
     ],
     [
      16,
      "7.0",
      "5x100"
     ],
     [
      16,
      "7.0",
      "5x114.3"
     ]
    ]
   },
   {
    "name": "Titanium",
    "img": "ox-05-16x7-0-4x100-titanium.webp",
    "fit": [
     [
      16,
      "7.0",
      "4x100"
     ]
    ]
   },
   {
    "name": "Titanium Dia-Cut",
    "img": "ox-05-16x7-0-5x100-titanium-dia-cut.webp",
    "fit": [
     [
      16,
      "7.0",
      "5x100"
     ],
     [
      16,
      "7.0",
      "5x114.3"
     ]
    ]
   }
  ]
 },
 {
  "code": "OX-06",
  "note": null,
  "finishes": [
   {
    "name": "Dia-Cut",
    "img": "ox-06-13x5-0-4x100-dia-cut.webp",
    "fit": [
     [
      13,
      "5.0",
      "4x100"
     ],
     [
      15,
      "6.5",
      "4x100"
     ],
     [
      15,
      "6.5",
      "5x114.3"
     ],
     [
      16,
      "7.0",
      "4x100"
     ],
     [
      16,
      "7.0",
      "4x108"
     ],
     [
      16,
      "7.0",
      "5x100"
     ],
     [
      16,
      "7.0",
      "5x114.3"
     ],
     [
      17,
      "8.0",
      "4x100"
     ],
     [
      17,
      "8.0",
      "5x100"
     ],
     [
      17,
      "8.0",
      "5x114.3"
     ]
    ]
   },
   {
    "name": "HS",
    "img": "ox-06-15x6-5-4x100-hs.webp",
    "fit": [
     [
      15,
      "6.5",
      "4x100"
     ],
     [
      15,
      "6.5",
      "5x100"
     ],
     [
      15,
      "6.5",
      "5x114.3"
     ],
     [
      16,
      "7.0",
      "4x100"
     ],
     [
      16,
      "7.0",
      "4x108"
     ],
     [
      16,
      "7.0",
      "5x100"
     ],
     [
      16,
      "7.0",
      "5x114.3"
     ],
     [
      17,
      "8.0",
      "4x100"
     ],
     [
      17,
      "8.0",
      "5x100"
     ],
     [
      17,
      "8.0",
      "5x114.3"
     ],
     [
      17,
      "8.0",
      "5x139.7"
     ]
    ]
   },
   {
    "name": "HD",
    "img": "ox-06-13x5-0-4x100-hd.webp",
    "fit": [
     [
      13,
      "5.0",
      "4x100"
     ]
    ]
   },
   {
    "name": "Glossy Black",
    "img": "ox-06-13x5-0-4x100-glossy-black.webp",
    "fit": [
     [
      13,
      "5.0",
      "4x100"
     ],
     [
      15,
      "6.5",
      "4x100"
     ],
     [
      15,
      "6.5",
      "5x114.3"
     ],
     [
      16,
      "7.0",
      "4x100"
     ],
     [
      16,
      "7.0",
      "5x100"
     ],
     [
      16,
      "7.0",
      "5x114.3"
     ],
     [
      17,
      "8.0",
      "4x100"
     ],
     [
      17,
      "8.0",
      "5x100"
     ],
     [
      17,
      "8.0",
      "5x114.3"
     ]
    ]
   },
   {
    "name": "Titanium",
    "img": "ox-06-13x5-0-4x100-hd.webp",
    "fit": [
     [
      15,
      "6.5",
      "4x100"
     ],
     [
      15,
      "6.5",
      "5x100"
     ],
     [
      15,
      "6.5",
      "5x114.3"
     ],
     [
      16,
      "7.0",
      "4x100"
     ],
     [
      16,
      "7.0",
      "5x100"
     ],
     [
      16,
      "7.0",
      "5x114.3"
     ],
     [
      17,
      "8.0",
      "4x100"
     ],
     [
      17,
      "8.0",
      "5x100"
     ],
     [
      17,
      "8.0",
      "5x114.3"
     ]
    ]
   },
   {
    "name": "Copper",
    "img": "ox-06-13x5-0-4x100-copper.webp",
    "fit": [
     [
      13,
      "5.0",
      "4x100"
     ],
     [
      15,
      "6.5",
      "4x100"
     ],
     [
      15,
      "6.5",
      "5x100"
     ],
     [
      15,
      "6.5",
      "5x114.3"
     ],
     [
      16,
      "7.0",
      "4x100"
     ],
     [
      16,
      "7.0",
      "5x100"
     ],
     [
      16,
      "7.0",
      "5x114.3"
     ],
     [
      17,
      "8.0",
      "4x100"
     ],
     [
      17,
      "8.0",
      "5x100"
     ],
     [
      17,
      "8.0",
      "5x114.3"
     ]
    ]
   }
  ]
 },
 {
  "code": "OX-07",
  "note": null,
  "finishes": [
   {
    "name": "Dia-Cut",
    "img": "ox-07-15x6-0-5x114-3-dia-cut.webp",
    "fit": [
     [
      15,
      "6.0",
      "5x114.3"
     ],
     [
      16,
      "7.0",
      "4x100"
     ],
     [
      16,
      "7.0",
      "5x100"
     ],
     [
      17,
      null,
      "5x112"
     ],
     [
      17,
      "7.5",
      "4x100"
     ]
    ]
   },
   {
    "name": "Black Dia-Cut",
    "img": "ox-07-16x7-0-5x100-dia-cut.webp",
    "fit": [
     [
      16,
      "7.0",
      "5x114.3"
     ],
     [
      17,
      "7.5",
      "5x114.3"
     ]
    ]
   },
   {
    "name": "HS",
    "img": "ox-07-15x6-0-5x114-3-hs.webp",
    "fit": [
     [
      15,
      "6.0",
      "5x114.3"
     ],
     [
      16,
      "7.0",
      "4x100"
     ],
     [
      16,
      "7.0",
      "5x100"
     ],
     [
      16,
      "7.0",
      "5x114.3"
     ],
     [
      17,
      null,
      "5x112"
     ],
     [
      17,
      "7.5",
      "4x100"
     ],
     [
      17,
      "7.5",
      "5x114.3"
     ]
    ]
   },
   {
    "name": "HD",
    "img": "ox-07-15x6-0-5x114-3-hd.webp",
    "fit": [
     [
      15,
      "6.0",
      "5x114.3"
     ],
     [
      17,
      null,
      "5x112"
     ]
    ]
   },
   {
    "name": "Glossy Black",
    "img": "ox-07-14x5-5-4x100-glossy-black.webp",
    "fit": [
     [
      14,
      "5.5",
      "4x100"
     ],
     [
      15,
      "6.0",
      "4x100"
     ],
     [
      15,
      "6.0",
      "5x114.3"
     ],
     [
      16,
      "7.0",
      "4x100"
     ],
     [
      16,
      "7.0",
      "5x100"
     ],
     [
      17,
      null,
      "5x112"
     ],
     [
      17,
      "7.5",
      "4x100"
     ],
     [
      17,
      "7.5",
      "5x114.3"
     ]
    ]
   },
   {
    "name": "Titanium",
    "img": "ox-07-16x7-0-4x100-titanium.webp",
    "fit": [
     [
      16,
      "7.0",
      "4x100"
     ],
     [
      16,
      "7.0",
      "5x100"
     ],
     [
      16,
      "7.0",
      "5x114.3"
     ],
     [
      17,
      "7.5",
      "4x100"
     ],
     [
      17,
      "7.5",
      "5x114.3"
     ]
    ]
   },
   {
    "name": "Copper",
    "img": "ox-07-14x5-5-4x100-copper.webp",
    "fit": [
     [
      14,
      "5.5",
      "4x100"
     ],
     [
      15,
      "6.0",
      "4x100"
     ],
     [
      15,
      "6.0",
      "5x114.3"
     ],
     [
      16,
      "7.0",
      "4x100"
     ],
     [
      16,
      "7.0",
      "5x100"
     ],
     [
      16,
      "7.0",
      "5x114.3"
     ],
     [
      17,
      null,
      "5x112"
     ],
     [
      17,
      "7.5",
      "4x100"
     ],
     [
      17,
      "7.5",
      "5x114.3"
     ]
    ]
   }
  ]
 },
 {
  "code": "OX-08",
  "note": null,
  "finishes": [
   {
    "name": "Dia-Cut",
    "img": "ox-08-17x8-5-5x114-3-dia-cut.webp",
    "fit": [
     [
      17,
      "8.5",
      "5x114.3"
     ]
    ]
   },
   {
    "name": "Black Dia-Cut",
    "img": "ox-08-17x8-5-5x114-3-dia-cut.webp",
    "fit": [
     [
      17,
      "8.5",
      "5x139.7"
     ]
    ]
   },
   {
    "name": "Glossy Black",
    "img": "ox-08-17x8-5-5x114-3-matt-black.webp",
    "fit": [
     [
      17,
      "8.5",
      "5x139.7"
     ]
    ]
   },
   {
    "name": "Matt Black",
    "img": "ox-08-17x8-5-5x114-3-matt-black.webp",
    "fit": [
     [
      17,
      "8.5",
      "5x114.3"
     ]
    ]
   },
   {
    "name": "Copper with Lip Black",
    "img": "ox-08-17x8-5-5x139-7-copper-with-lip-black.webp",
    "fit": [
     [
      17,
      "8.5",
      "5x139.7"
     ]
    ]
   },
   {
    "name": "Titanium with Lip Black",
    "img": "ox-08-17x8-5-5x114-3-titanium-with-lip-black.webp",
    "fit": [
     [
      17,
      "8.5",
      "5x114.3"
     ],
     [
      17,
      "8.5",
      "5x139.7"
     ]
    ]
   }
  ]
 },
 {
  "code": "OX-09",
  "note": "Thar & Thar Roxx",
  "finishes": [
   {
    "name": "Matt Black",
    "img": "ox-09-18x8-5-5x114-3-matt-black.webp",
    "fit": [
     [
      18,
      "8.5",
      "5x114.3"
     ],
     [
      18,
      "8.5",
      "5x139.7"
     ],
     [
      18,
      "8.5",
      "6x139.7"
     ]
    ]
   },
   {
    "name": "Copper",
    "img": "ox-09-18x8-5-5x114-3-copper.webp",
    "fit": [
     [
      18,
      "8.5",
      "5x114.3"
     ]
    ]
   },
   {
    "name": "Copper with Lip Black",
    "img": "ox-09-18x8-5-5x139-7-copper-with-lip-black.webp",
    "fit": [
     [
      18,
      "8.5",
      "5x139.7"
     ]
    ]
   },
   {
    "name": "Titanium with Lip Black",
    "img": "ox-09-18x8-5-5x114-3-titanium-with-lip-black.webp",
    "fit": [
     [
      18,
      "8.5",
      "5x114.3"
     ],
     [
      18,
      "8.5",
      "5x139.7"
     ]
    ]
   }
  ]
 },
 {
  "code": "OX-10",
  "note": null,
  "finishes": [
   {
    "name": "Black Dia-Cut",
    "img": "ox-10-20x9-0-5x114-3-black-dia-cut.webp",
    "fit": [
     [
      20,
      "9.0",
      "5x114.3"
     ]
    ]
   },
   {
    "name": "Titanium",
    "img": "ox-10-20x9-0-5x114-3-titanium.webp",
    "fit": [
     [
      20,
      "9.0",
      "5x114.3"
     ]
    ]
   },
   {
    "name": "Copper",
    "img": "ox-10-20x9-0-5x114-3-copper.webp",
    "fit": [
     [
      20,
      "9.0",
      "5x114.3"
     ]
    ]
   }
  ]
 },
 {
  "code": "OX-11",
  "note": "Thar & Thar Roxx",
  "finishes": [
   {
    "name": "Matt Black",
    "img": "ox-11-18x9-0-5x114-3-matt-black.webp",
    "fit": [
     [
      18,
      "9.0",
      "5x114.3"
     ],
     [
      18,
      "9.0",
      "5x139.7"
     ],
     [
      18,
      "9.0",
      "6x139.7"
     ]
    ]
   },
   {
    "name": "Copper with Lip Black",
    "img": "ox-11-18x9-0-6x139-7-copper-with-lip-black.webp",
    "fit": [
     [
      18,
      "9.0",
      "6x139.7"
     ]
    ]
   },
   {
    "name": "HD with Lip Black",
    "img": "ox-11-18x9-0-5x114-3-hd-with-lip-black.webp",
    "fit": [
     [
      18,
      "9.0",
      "5x114.3"
     ]
    ]
   }
  ]
 },
 {
  "code": "OX-12",
  "note": null,
  "finishes": [
   {
    "name": "Dia-Cut",
    "img": "ox-12-16x6-5-4x100-dia-cut.webp",
    "fit": [
     [
      16,
      "6.5",
      "4x100"
     ],
     [
      16,
      "6.5",
      "5x114.3"
     ],
     [
      17,
      null,
      "5x112"
     ]
    ]
   },
   {
    "name": "Black Dia-Cut",
    "img": "ox-12-16x6-5-4x100-dia-cut.webp",
    "fit": [
     [
      17,
      "7.0",
      "4x100"
     ],
     [
      17,
      "7.0",
      "5x114.3"
     ]
    ]
   },
   {
    "name": "HS",
    "img": "ox-12-16x6-0-4x100-hs.webp",
    "fit": [
     [
      16,
      "6.0",
      "4x100"
     ],
     [
      16,
      "6.5",
      "4x108"
     ],
     [
      16,
      "6.5",
      "5x100"
     ],
     [
      16,
      "6.5",
      "5x114.3"
     ],
     [
      17,
      null,
      "5x112"
     ],
     [
      17,
      "7.0",
      "4x100"
     ],
     [
      17,
      "7.0",
      "5x100"
     ],
     [
      17,
      "7.0",
      "5x114.3"
     ]
    ]
   },
   {
    "name": "HD",
    "img": "ox-12-16x6-5-5x114-3-hd.webp",
    "fit": [
     [
      16,
      "6.5",
      "5x114.3"
     ],
     [
      17,
      "7.0",
      "5x100"
     ],
     [
      17,
      "7.0",
      "5x114.3"
     ]
    ]
   },
   {
    "name": "Glossy Black",
    "img": "ox-12-16x6-5-4x100-glossy-black.webp",
    "fit": [
     [
      16,
      "6.5",
      "4x100"
     ],
     [
      16,
      "6.5",
      "4x108"
     ],
     [
      16,
      "6.5",
      "5x114.3"
     ],
     [
      17,
      null,
      "5x112"
     ],
     [
      17,
      "7.0",
      "4x100"
     ],
     [
      17,
      "7.0",
      "5x100"
     ],
     [
      17,
      "7.0",
      "5x114.3"
     ]
    ]
   },
   {
    "name": "Copper",
    "img": "ox-12-16x6-5-4x100-copper.webp",
    "fit": [
     [
      16,
      "6.5",
      "4x100"
     ],
     [
      16,
      "6.5",
      "4x108"
     ],
     [
      16,
      "6.5",
      "5x100"
     ],
     [
      16,
      "6.5",
      "5x114.3"
     ],
     [
      17,
      "7.0",
      "4x100"
     ],
     [
      17,
      "7.0",
      "5x100"
     ],
     [
      17,
      "7.0",
      "5x114.3"
     ]
    ]
   },
   {
    "name": "HD Dia-Cut",
    "img": "ox-12-16x6-5-4x100-hd-dia-cut.webp",
    "fit": [
     [
      16,
      "6.5",
      "4x100"
     ],
     [
      17,
      "7.0",
      "4x100"
     ]
    ]
   }
  ]
 },
 {
  "code": "OX-13",
  "note": null,
  "finishes": [
   {
    "name": "Black Dia-Cut",
    "img": "ox-13-13x5-5-4x100-black-dia-cut.webp",
    "fit": [
     [
      13,
      "5.5",
      "4x100"
     ]
    ]
   },
   {
    "name": "HS Dia-Cut",
    "img": "ox-13-13x5-5-4x100-hs-dia-cut.webp",
    "fit": [
     [
      13,
      "5.5",
      "4x100"
     ]
    ]
   }
  ]
 },
 {
  "code": "3931XD",
  "note": null,
  "finishes": [
   {
    "name": "Matt Black",
    "img": "3931xd-18x9-0-5x139-7-matt-black.webp",
    "fit": [
     [
      18,
      "9.0",
      "5x139.7"
     ]
    ]
   }
  ]
 },
 {
  "code": "7615S",
  "note": null,
  "finishes": [
   {
    "name": "Glossy Black Milling",
    "img": "7615s-18x9-0-5x139-7-glossy-black-milling.webp",
    "fit": [
     [
      18,
      "9.0",
      "5x139.7"
     ]
    ]
   }
  ]
 },
 {
  "code": "L1155",
  "note": null,
  "finishes": [
   {
    "name": "Gloss Black with Machine Lip",
    "img": "l1155-18x9-5-6x139-7-gloss-black-with-machine-lip.webp",
    "fit": [
     [
      18,
      "9.5",
      "6x139.7"
     ]
    ]
   }
  ]
 },
 {
  "code": "L1517",
  "note": null,
  "finishes": [
   {
    "name": "Matt Black",
    "img": "l1517-17x7-5-5x108-matt-black.webp",
    "fit": [
     [
      17,
      "7.5",
      "5x108"
     ]
    ]
   }
  ]
 },
 {
  "code": "L1672",
  "note": null,
  "finishes": [
   {
    "name": "BM",
    "img": "l1672-14x5-5-4x100-bm.webp",
    "fit": [
     [
      14,
      "5.5",
      "4x100"
     ]
    ]
   }
  ]
 },
 {
  "code": "L1701",
  "note": null,
  "finishes": [
   {
    "name": "Black Milling",
    "img": "l1701-18x9-5-6x139-7-black-milling.webp",
    "fit": [
     [
      18,
      "9.5",
      "6x139.7"
     ]
    ]
   }
  ]
 },
 {
  "code": "L2118",
  "note": "Thar & Thar Roxx",
  "finishes": [
   {
    "name": "BM",
    "img": "l2118-18x9-0-5x114-3-bm.webp",
    "fit": [
     [
      18,
      "9.0",
      "5x114.3"
     ]
    ]
   }
  ]
 },
 {
  "code": "L807",
  "note": null,
  "finishes": [
   {
    "name": "Matt Black",
    "img": "ox-03-15x6-5-5x114-3-glossy-black.webp",
    "fit": [
     [
      16,
      "7.0",
      "5x114.3"
     ]
    ]
   }
  ]
 },
 {
  "code": "LQ0002",
  "note": null,
  "finishes": [
   {
    "name": "Dia-Cut",
    "img": "lq0002-16x7-5-5x114-3-dia-cut.webp",
    "fit": [
     [
      16,
      "7.5",
      "5x114.3"
     ]
    ]
   }
  ]
 },
 {
  "code": "LQL0002",
  "note": null,
  "finishes": [
   {
    "name": "Dia-Cut",
    "img": "lql0002-15x7-0-5x100-dia-cut.webp",
    "fit": [
     [
      15,
      "7.0",
      "5x100"
     ]
    ]
   }
  ]
 },
 {
  "code": "MS-07",
  "note": null,
  "finishes": [
   {
    "name": "Dia-Cut",
    "img": "ms-07-17x7-5-4x100-4x108-dia-cut.webp",
    "fit": [
     [
      17,
      "7.5",
      "4x100"
     ],
     [
      17,
      "7.5",
      "4x108"
     ]
    ]
   }
  ]
 },
 {
  "code": "MS-08",
  "note": null,
  "finishes": [
   {
    "name": "Grey Dia-Cut",
    "img": "ms-08-16x7-0-5x114-3-grey-dia-cut.webp",
    "fit": [
     [
      16,
      "7.0",
      "5x114.3"
     ]
    ]
   }
  ]
 },
 {
  "code": "MW11",
  "note": null,
  "finishes": [
   {
    "name": "Dia-Cut",
    "img": "mw11-16x7-5-5x114-3-dia-cut.webp",
    "fit": [
     [
      16,
      "7.5",
      "5x114.3"
     ]
    ]
   },
   {
    "name": "DBK2",
    "img": "mw11-16x7-5-5x114-3-dbk2.webp",
    "fit": [
     [
      16,
      "7.5",
      "5x114.3"
     ]
    ]
   }
  ]
 },
 {
  "code": null,
  "note": "Thar & Thar Roxx",
  "finishes": [
   {
    "name": "As shown",
    "img": "unnamed-18-na-241.webp",
    "fit": [
     [
      18,
      null,
      null
     ]
    ]
   }
  ]
 },
 {
  "code": null,
  "note": "Thar & Thar Roxx",
  "finishes": [
   {
    "name": "As shown",
    "img": "unnamed-18-na-242.webp",
    "fit": [
     [
      18,
      null,
      null
     ]
    ]
   }
  ]
 },
 {
  "code": null,
  "note": null,
  "finishes": [
   {
    "name": "As shown",
    "img": "unnamed-18-5x112-256.webp",
    "fit": [
     [
      18,
      null,
      "5x112"
     ]
    ]
   }
  ]
 },
 {
  "code": null,
  "note": null,
  "finishes": [
   {
    "name": "As shown",
    "img": "unnamed-18-5x112-257.webp",
    "fit": [
     [
      18,
      null,
      "5x112"
     ]
    ]
   }
  ]
 },
 {
  "code": null,
  "note": null,
  "finishes": [
   {
    "name": "As shown",
    "img": "unnamed-18-5x114-3-261.webp",
    "fit": [
     [
      18,
      null,
      "5x114.3"
     ]
    ]
   }
  ]
 },
 {
  "code": null,
  "note": null,
  "finishes": [
   {
    "name": "As shown",
    "img": "unnamed-18-6x139-7-272.webp",
    "fit": [
     [
      18,
      null,
      "6x139.7"
     ]
    ]
   }
  ]
 },
 {
  "code": null,
  "note": null,
  "finishes": [
   {
    "name": "As shown",
    "img": "unnamed-18-6x139-7-273.webp",
    "fit": [
     [
      18,
      null,
      "6x139.7"
     ]
    ]
   }
  ]
 },
 {
  "code": null,
  "note": null,
  "finishes": [
   {
    "name": "As shown",
    "img": "unnamed-18-6x139-7-274.webp",
    "fit": [
     [
      18,
      null,
      "6x139.7"
     ]
    ]
   }
  ]
 },
 {
  "code": null,
  "note": null,
  "finishes": [
   {
    "name": "As shown",
    "img": "unnamed-18-6x139-7-275.webp",
    "fit": [
     [
      18,
      null,
      "6x139.7"
     ]
    ]
   }
  ]
 },
 {
  "code": null,
  "note": null,
  "finishes": [
   {
    "name": "As shown",
    "img": "unnamed-20-5x114-3-284.webp",
    "fit": [
     [
      20,
      null,
      "5x114.3"
     ]
    ]
   }
  ]
 },
 {
  "code": null,
  "note": null,
  "finishes": [
   {
    "name": "As shown",
    "img": "unnamed-20-6x139-7-285.webp",
    "fit": [
     [
      20,
      null,
      "6x139.7"
     ]
    ]
   }
  ]
 },
 {
  "code": null,
  "note": null,
  "finishes": [
   {
    "name": "As shown",
    "img": "unnamed-20-6x139-7-286.webp",
    "fit": [
     [
      20,
      null,
      "6x139.7"
     ]
    ]
   }
  ]
 },
 {
  "code": null,
  "note": null,
  "finishes": [
   {
    "name": "As shown",
    "img": "unnamed-20-6x139-7-287.webp",
    "fit": [
     [
      20,
      null,
      "6x139.7"
     ]
    ]
   }
  ]
 }
];
