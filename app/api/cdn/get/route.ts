import { NextRequest, NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs/promises';


const UPLOAD_DIR = path.join(process.cwd(), 'public', 'cdn');

export async function GET() {
  await fs.mkdir(UPLOAD_DIR, { recursive: true });
  const files = await fs.readdir(UPLOAD_DIR);
  return NextResponse.json({ files });
}
