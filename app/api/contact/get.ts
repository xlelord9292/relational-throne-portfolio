import { NextRequest, NextResponse } from 'next/server';

// Use the same in-memory store as send.ts (in real app, use DB)
const contactStore: Record<string, { name: string; email: string; message: string; timestamp: number }> = {};

export async function GET(req: NextRequest) {
  const email = req.nextUrl.searchParams.get('email');
  if (!email) {
    return NextResponse.json({ error: 'Missing email.' }, { status: 400 });
  }
  const entry = contactStore[email];
  if (!entry) {
    return NextResponse.json({ sent: false });
  }
  return NextResponse.json({ sent: true, ...entry });
}
