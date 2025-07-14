import { NextRequest, NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs/promises';

const UPLOAD_DIR = path.join(process.cwd(), 'public', 'cdn');

export async function POST(req: NextRequest) {
  const { filename } = await req.json();
  if (!filename) {
    return NextResponse.json({ error: 'No filename provided' }, { status: 400 });
  }
  const filePath = path.join(UPLOAD_DIR, filename);
  try {
    await fs.unlink(filePath);
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'File not found' }, { status: 404 });
  }
}
