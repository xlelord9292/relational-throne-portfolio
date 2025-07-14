import { NextRequest, NextResponse } from 'next/server';

// Simple in-memory store for demo (replace with DB in production)
const contactStore: Record<string, { name: string; email: string; message: string; timestamp: number }> = {};

// Rate limit: max 1 request per 10 minutes per email
const RATE_LIMIT_WINDOW = 10 * 60 * 1000;

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();
  if (!email || !message) {
    return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
  }
  const now = Date.now();
  const last = contactStore[email]?.timestamp || 0;
  if (now - last < RATE_LIMIT_WINDOW) {
    return NextResponse.json({ error: 'Rate limit exceeded. Please wait before sending again.' }, { status: 429 });
  }
  contactStore[email] = { name, email, message, timestamp: now };
  return NextResponse.json({ success: true });
}
