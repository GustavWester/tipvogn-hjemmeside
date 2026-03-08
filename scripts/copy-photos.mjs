/**
 * Kopierer billeder fra photos/ til public/photos/ med websikre filnavne.
 * Kør: npm run copy-photos
 */
import { copyFile, mkdir } from "fs/promises";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = dirname(__dirname);
const srcDir = join(root, "photos");
const outDir = join(root, "public", "photos");

const mapping = [
  ["Herculano-HMB-24-RG-DK-(5).jpeg", "herculano-hmb-24.jpeg"],
  ["Rolland-7840-(2).jpg", "rolland-7840.jpg"],
  ["Smyth Fieldmaster FM18 _ FM20.jpg", "smyth-fm18-fm20.jpg"],
  ["Smyth Fieldmaster FM24 _ FM26 .jpg", "smyth-fm24-fm26.jpg"],
  ["Smyth Fieldmaster FM30    4-akslet.jpg", "smyth-fm30.jpg"],
  ["2017-03-17-16.56.01.jpg", "brugt-2017.jpg"],
];

await mkdir(outDir, { recursive: true });

for (const [from, to] of mapping) {
  const src = join(srcDir, from);
  const dest = join(outDir, to);
  try {
    await copyFile(src, dest);
    console.log("Kopieret:", to);
  } catch (e) {
    if (e.code === "ENOENT") console.warn("Spring over (findes ikke):", from);
    else throw e;
  }
}
