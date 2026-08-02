import fs from "fs";
import path from "path";
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const { PDFParse } = require("pdf-parse");

const files = [
  "rodin_details/resume/Mahinga Rodin Resume.pdf",
  "rodin_details/resume/prf-resume-.pdf",
  "rodin_details/research_paper/Rodin's Research Paper.pdf",
];

for (const file of files) {
  const abs = path.resolve(file);
  const parser = new PDFParse({ data: fs.readFileSync(abs) });
  const result = await parser.getText();
  console.log("\n====", file, "====\n");
  console.log((result.text || JSON.stringify(result)).slice(0, 6000));
  await parser.destroy?.();
}
