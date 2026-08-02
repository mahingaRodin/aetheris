import fs from "fs";
import path from "path";
import sharp from "sharp";

const root = process.cwd();
const svgPath = path.join(root, "public/brand/rodin-mark.svg");

const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg viewBox="0 0 500 380" width="512" height="390" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="rodin-gold" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#F4CA50"/>
      <stop offset="48%" stop-color="#D09220"/>
      <stop offset="100%" stop-color="#7A4C08"/>
    </linearGradient>
  </defs>
  <polygon points="136,93 398,93 398,116 106,116" fill="url(#rodin-gold)"/>
  <polygon points="106,126 216,191 106,256 106,234 192,191 106,148" fill="url(#rodin-gold)"/>
  <polygon points="144,126 254,191 144,256 144,234 230,191 144,148" fill="url(#rodin-gold)"/>
  <path fill-rule="evenodd" fill="url(#rodin-gold)" d="M 266,93 A 132,49 0 0 1 266,191 Z M 282,111 A 100,32 0 0 1 282,175 Z"/>
  <polygon points="263,197 303,197 398,280 358,280" fill="url(#rodin-gold)"/>
</svg>`;

fs.writeFileSync(svgPath, svg);

const transparent = { r: 0, g: 0, b: 0, alpha: 0 };

async function writePng(out, size) {
  await sharp(Buffer.from(svg))
    .resize(size, size, {
      fit: "contain",
      background: transparent,
    })
    .png()
    .toFile(out);
  console.log("wrote", out, size);
}

await writePng(path.join(root, "public/brand/rodin-favicon.png"), 64);
await writePng(path.join(root, "public/brand/rodin-logo.png"), 512);
await writePng(path.join(root, "src/app/icon.png"), 32);
await writePng(path.join(root, "src/app/apple-icon.png"), 180);
await writePng(path.join(root, "public/favicon-32.png"), 32);
await writePng(path.join(root, "public/favicon-16.png"), 16);

// Also SVG favicon for modern browsers (true transparency)
fs.writeFileSync(path.join(root, "public/favicon.svg"), svg);
fs.writeFileSync(path.join(root, "src/app/icon.svg"), svg);

console.log("transparent favicons ready");
