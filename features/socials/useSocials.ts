import AppleMusicIcon from '@/assets/icons/appleMusic';
import { IconProps } from '@/assets/icons/iconProps';
import InstagramIcon from '@/assets/icons/instagram';
import SoundcloudIcon from '@/assets/icons/soundcloud';
import SpotifyIcon from '@/assets/icons/spotify';
import TikTokIcon from '@/assets/icons/tiktok';
import XIcon from '@/assets/icons/x';
import { ComponentType, useEffect, useState } from 'react';

export type Social = {
    id: string;
    name: string;
    url: string;
    Icon: ComponentType<IconProps>;
};

// Placeholder data until this is backed by a real endpoint (e.g. GET /api/socials).
const PLACEHOLDER_SOCIALS: Social[] = [
    { id: 'spotify', name: 'Spotify', url: 'https://open.spotify.com/artist/4l57qRht3VVng5HYzXCPvo', Icon: SpotifyIcon },
    { id: 'apple-music', name: 'Apple Music', url: 'https://music.apple.com/gb/artist/the-latitude/1502342387', Icon: AppleMusicIcon },
    { id: 'soundcloud', name: 'Soundcloud', url: 'https://soundcloud.com/thelatitude', Icon: SoundcloudIcon },
    { id: 'instagram', name: 'Instagram', url: 'https://www.instagram.com/the.latitude/reels/?hl=en', Icon: InstagramIcon },
    { id: 'x', name: 'X', url: 'https://x.com/TheLatitudeBand', Icon: XIcon },
    { id: 'tiktok', name: 'TikTok', url: 'https://www.tiktok.com/@thelatitude', Icon: TikTokIcon },
];

// Stands in for `fetch('/api/socials')`. Kept async so swapping the body for
// a real request later doesn't change anything for callers of useSocials().
async function fetchSocials(): Promise<Social[]> {
    return PLACEHOLDER_SOCIALS;
}

export function useSocials() {
    const [socials, setSocials] = useState<Social[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let cancelled = false;

        fetchSocials().then((data) => {
            if (!cancelled) {
                setSocials(data);
                setLoading(false);
            }
        });

        return () => {
            cancelled = true;
        };
    }, []);

    return { socials, loading };
}
