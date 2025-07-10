import { type NextRequest, NextResponse } from "next/server"

// Simple rate limiting store (in production, use Redis or similar)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>()

// VPN/Proxy detection (basic implementation)
const suspiciousIPs = new Set<string>()

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

function getClientIP(request: NextRequest): string {
  const forwarded = request.headers.get("x-forwarded-for")
  const realIP = request.headers.get("x-real-ip")

  if (forwarded) {
    return forwarded.split(",")[0].trim()
  }

  if (realIP) {
    return realIP
  }

  return "unknown"
}

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const windowMs = 15 * 60 * 1000 // 15 minutes
  const maxRequests = 3 // Max 3 emails per 15 minutes

  const record = rateLimitStore.get(ip)

  if (!record || now > record.resetTime) {
    rateLimitStore.set(ip, { count: 1, resetTime: now + windowMs })
    return true
  }

  if (record.count >= maxRequests) {
    return false
  }

  record.count++
  return true
}

async function sendToWebhook(data: any) {
  const webhookUrl = process.env.DISCORD_WEBHOOK_URL

  if (!webhookUrl) {
    throw new Error("Webhook URL not configured")
  }

  const embed = {
    title: "📧 New Contact Form Submission",
    color: 0x8b5cf6,
    fields: [
      {
        name: "👤 Name",
        value: data.name,
        inline: true,
      },
      {
        name: "📧 Email",
        value: data.email,
        inline: true,
      },
      {
        name: "🌍 IP Address",
        value: data.ip,
        inline: true,
      },
      {
        name: "💬 Message",
        value: data.message.length > 1000 ? data.message.substring(0, 1000) + "..." : data.message,
        inline: false,
      },
    ],
    timestamp: new Date().toISOString(),
    footer: {
      text: "Portfolio Contact Form",
    },
  }

  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      embeds: [embed],
    }),
  })

  if (!response.ok) {
    throw new Error("Failed to send webhook")
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, message } = body

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json({ success: false, error: "All fields are required" }, { status: 400 })
    }

    if (!isValidEmail(email)) {
      return NextResponse.json({ success: false, error: "Invalid email address" }, { status: 400 })
    }

    if (name.length > 100 || message.length > 2000) {
      return NextResponse.json({ success: false, error: "Input too long" }, { status: 400 })
    }

    // Get client IP
    const clientIP = getClientIP(request)

    // Rate limiting
    if (!checkRateLimit(clientIP)) {
      return NextResponse.json({ success: false, error: "Too many requests. Please try again later." }, { status: 429 })
    }

    // Basic spam detection
    const spamKeywords = ["crypto", "bitcoin", "investment", "loan", "casino", "viagra"]
    const messageText = message.toLowerCase()
    const hasSpam = spamKeywords.some((keyword) => messageText.includes(keyword))

    if (hasSpam) {
      return NextResponse.json({ success: false, error: "Message flagged as spam" }, { status: 400 })
    }

    // Send to webhook
    await sendToWebhook({
      name,
      email,
      message,
      ip: clientIP,
    })

    return NextResponse.json({
      success: true,
      message: "Message sent successfully!",
    })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ success: false, error: "Internal server error" }, { status: 500 })
  }
}
