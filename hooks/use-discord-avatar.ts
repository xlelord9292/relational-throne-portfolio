import { useEffect, useState } from "react";

export function useDiscordAvatar(userId: string) {
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);

  useEffect(() => {
    async function fetchAvatar() {
      try {
        const res = await fetch(`https://api.lanyard.rest/v1/users/${userId}`);
        const data = await res.json();
        if (data?.data?.discord_user?.avatar && data?.data?.discord_user?.id) {
          const { id, avatar } = data.data.discord_user;
          setAvatarUrl(
            `https://cdn.discordapp.com/avatars/${id}/${avatar}.png?size=256`
          );
        } else {
          setAvatarUrl(null);
        }
      } catch {
        setAvatarUrl(null);
      }
    }
    fetchAvatar();
  }, [userId]);

  return avatarUrl;
}
