/**
 * Konverterer photos/IMG_7898.HEIC til public/photos/hero.jpg så det kan bruges på forsiden.
 * Kør: npm run convert-photos
 *
 * Hvis HEIC ikke understøttes: Åbn IMG_7898.HEIC i Preview (Mac),
 * vælg Fil → Eksporter → Format JPEG, og gem som public/photos/hero.jpg
 */
import sharp from "sharp";
import { mkdir, writeFile } from "fs/promises";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const src = join(root, "photos", "IMG_7898.HEIC");
const outDir = join(root, "public", "photos");
const outPath = join(outDir, "hero.jpg");

async function main() {
  try {
    await mkdir(outDir, { recursive: true });
    const buffer = await sharp(src)
      .rotate()
      .jpeg({ quality: 88 })
      .toBuffer();
    await writeFile(outPath, buffer);
    console.log("Konverteret:", outPath);
  } catch (err) {
    if (err.code === "ENOENT" && err.path === src) {
      console.warn("Fil ikke fundet:", src);
      console.warn("Tilføj IMG_7898.HEIC i mappen photos/ eller eksporter det som JPEG til public/photos/hero.jpg");
    } else {
      console.error("Konvertering fejlede:", err.message);
      console.warn("Eksporter i stedet billedet manuelt som JPEG til public/photos/hero.jpg");
    }
    process.exit(1);
  }
}

main();
