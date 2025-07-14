import { NextRequest, NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs/promises';

const UPLOAD_DIR = path.join(process.cwd(), 'public', 'cdn');

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const file = formData.get('file');
  if (!file || typeof file === 'string') {
    return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
  }
  const buffer = Buffer.from(await file.arrayBuffer());
  const filename = file.name;
  await fs.mkdir(UPLOAD_DIR, { recursive: true });
  const filePath = path.join(UPLOAD_DIR, filename);
  try {
    await fs.access(filePath);
    return NextResponse.json({ error: 'File already exists' }, { status: 409 });
  } catch {
    await fs.writeFile(filePath, buffer);
    return NextResponse.json({ url: `/cdn/${filename}` });
  }
}
