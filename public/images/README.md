# Real photos go here

The site currently uses royalty-free placeholder photos from Unsplash.
To replace them with real LUMIN-TECH / TOP LIGHTS photos:

1. Save the photo in this folder using the **exact filename** in the table below.
2. Open `src/data/images.ts` and change that entry's `src` to the local path, e.g.

   ```ts
   heroChandelier: {
     src: '/images/hero-chandelier.jpg',
     alt: 'Crystal chandelier installed by LUMIN-TECH in a DHA Islamabad home',
   },
   ```

3. Update the `alt` text to describe the real photo (helps Google rank the page).

**Photo tips:** use JPG or WebP, landscape orientation, about **1600px wide** for the
hero and **1000px wide** for everything else, and compress before uploading
(e.g. <https://squoosh.app>) — aim for under 250 KB each so the site loads fast on mobile.

| Filename                            | Key in `images.ts`         | Where it appears                  | Suggested shot                                                      |
| ----------------------------------- | -------------------------- | --------------------------------- | ------------------------------------------------------------------- |
| `hero-chandelier.jpg`               | `heroChandelier`           | Hero background (top of page)     | Best chandelier, lit, dark background                               |
| `category-chandeliers.jpg`          | `categoryChandeliers`      | Products → Chandeliers card       | Chandelier display in the shop                                      |
| `category-street-lights.jpg`        | `categoryStreetLights`     | Products → Street Pole card       | Street lights you installed, at night                               |
| `category-outdoor.jpg`              | `categoryOutdoor`          | Products → Garden & Outdoor card  | Garden / gate / wall lights at night                                |
| `category-neon.jpg`                 | `categoryNeon`             | Products → Neon & Decorative card | Neon sign or LED strip install                                      |
| `category-electrical.jpg`           | `categoryElectrical`       | Products → Electrical card        | Switches, breakers or DB panel stock                                |
| `product-crystal-chandelier.jpg`    | `productCrystalChandelier` | Featured products                 | Product photo                                                       |
| `product-tiered-chandelier.jpg`     | `productTieredChandelier`  | Featured products                 | Product photo                                                       |
| `product-pendant-lights.jpg`        | `productPendantLights`     | Featured products                 | Product photo                                                       |
| `product-led-street-light.jpg`      | `productLedStreetLight`    | Featured products                 | Product photo                                                       |
| `product-solar-street-light.jpg`    | `productSolarStreetLight`  | Featured products                 | Product photo                                                       |
| `product-post-lantern.jpg`          | `productPostLantern`       | Featured products                 | Product photo                                                       |
| `product-garden-bollard.jpg`        | `productGardenBollard`     | Featured products                 | Product photo                                                       |
| `product-string-lights.jpg`         | `productStringLights`      | Featured products                 | Product photo                                                       |
| `product-neon-sign.jpg`             | `productNeonSign`          | Featured products                 | Product photo                                                       |
| `product-led-strip.jpg`             | `productLedStrip`          | Featured products                 | Product photo                                                       |
| `product-led-bulb.jpg`              | `productLedBulb`           | Featured products                 | Product photo                                                       |
| `product-switches.jpg`              | `productSwitches`          | Featured products                 | Product photo                                                       |
| `services-installation.jpg`         | `servicesInstallation`     | Services section (desktop)        | Your team installing a fixture                                      |
| `contract-street-lighting.jpg`      | `contractStreetLighting`   | "Contract supply" banner          | Street-light project for a society                                  |
| `gallery-01.jpg` … `gallery-08.jpg` | `gallery01` … `gallery08`  | Gallery grid                      | Real installation photos (update captions in `src/data/gallery.ts`) |

Optional: replace the social-share image (`og:image` in `index.html`) with
`/images/og-image.jpg` (1200 × 630 px) using the full site URL once deployed.
