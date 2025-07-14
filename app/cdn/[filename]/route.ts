import { NextRequest } from "next/server";
import path from "path";
import fs from "fs/promises";

export async function GET(req: NextRequest, { params }: { params: { filename: string } }) {
  const filePath = path.join(process.cwd(), "public", "cdn", params.filename);
  try {
    const file = await fs.readFile(filePath);
    const ext = path.extname(params.filename).slice(1).toLowerCase();
    const mimeTypes: Record<string, string> = {
      jpg: "image/jpeg",
      jpeg: "image/jpeg",
      png: "image/png",
      gif: "image/gif",
      webp: "image/webp",
      svg: "image/svg+xml",
      pdf: "application/pdf",
      txt: "text/plain",
      json: "application/json",
      mp4: "video/mp4",
      mp3: "audio/mpeg",
      wav: "audio/wav",
      zip: "application/zip",
      default: "application/octet-stream",
    };
    const mime = mimeTypes[ext] || mimeTypes.default;
    return new Response(file, {
      headers: {
        "Content-Type": mime,
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    });
  } catch {
    return new Response("File not found", { status: 404 });
  }
}
