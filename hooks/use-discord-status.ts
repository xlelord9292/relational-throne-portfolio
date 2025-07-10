"use client"

import { useState, useEffect } from "react"

interface DiscordActivity {
  name: string
  type: number
  state?: string
  details?: string
  timestamps?: {
    start?: number
    end?: number
  }
  assets?: {
    large_image?: string
    large_text?: string
    small_image?: string
    small_text?: string
  }
}

interface SpotifyData {
  track_id: string
  timestamps: {
    start: number
    end: number
  }
  song: string
  artist: string
  album_art_url: string
  album: string
}

interface DiscordUser {
  id: string
  username: string
  discriminator: string
  avatar: string | null
  bot: boolean
  global_name?: string | null
  avatar_decoration_data?: any
  display_name: string
  clan?: any
  primary_guild?: {
    tag: string
    identity_guild_id: string
    badge: string
    identity_enabled: boolean
  }
}

interface LanyardData {
  success: boolean
  data: {
    user: DiscordUser
    discord_status: "online" | "idle" | "dnd" | "offline"
    activities: DiscordActivity[]
    listening_to_spotify: boolean
    spotify?: SpotifyData
    kv: Record<string, string>
  }
}

export function useDiscordStatus() {
  const [data, setData] = useState<LanyardData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchDiscordData = async () => {
      try {
        const response = await fetch("https://api.lanyard.rest/v1/users/545789216869711884")
        const result = await response.json()
        setData(result)
        setError(null)
      } catch (err) {
        setError("Failed to fetch Discord data")
        console.error("Discord API Error:", err)
      } finally {
        setLoading(false)
      }
    }

    fetchDiscordData()

    // Update every 30 seconds
    const interval = setInterval(fetchDiscordData, 30000)

    return () => clearInterval(interval)
  }, [])

  const getAvatarUrl = (user?: DiscordUser) => {
    if (!user) return "/placeholder.svg"
    if (user.avatar) {
      // Handle both old and new Discord avatar formats
      const extension = user.avatar.startsWith("a_") ? "gif" : "png"
      return `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.${extension}?size=512`
    }
    // Fallback to default Discord avatar
    const defaultAvatarNumber =
      user.discriminator === "0"
        ? (Number.parseInt(user.id) >> 22) % 6 // New username system
        : Number.parseInt(user.discriminator) % 5 // Old discriminator system
    return `https://cdn.discordapp.com/embed/avatars/${defaultAvatarNumber}.png`
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "online":
        return "#43b581"
      case "idle":
        return "#faa61a"
      case "dnd":
        return "#f04747"
      case "offline":
        return "#747f8d"
      default:
        return "#747f8d"
    }
  }

  return {
    data,
    loading,
    error,
    getAvatarUrl,
    getStatusColor,
  }
}
