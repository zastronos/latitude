import { useEffect, useState } from 'react';

export type Song = {
    id: string;
    title: string;
    subtitle: string;
    youtubeVideoId: string;
};

// Placeholder data until this is backed by a real endpoint (e.g. GET /api/songs).
const PLACEHOLDER_SONGS: Song[] = [
    { id: 'fever-dreaming', title: 'FEVER DREAMING', subtitle: 'OUT NOW', youtubeVideoId: 'MR4iZty2Wms' },
    { id: 'sail-away', title: 'SAIL AWAY', subtitle: 'OUT NOW', youtubeVideoId: 'SailAwayVideoId' },
    { id: 'addicted', title: 'ADDICTED', subtitle: 'OUT NOW', youtubeVideoId: 'AddictedVideoId' },
    { id: 'dehydrated', title: 'DEHYDRATED', subtitle: 'OUT NOW', youtubeVideoId: 'DehydratedVideoId' },
    { id: 'feel-it-all', title: 'FEEL IT ALL', subtitle: 'OUT NOW', youtubeVideoId: 'FeelItAllVideoId' },
];

// Stands in for `fetch('/api/songs')`. Kept async so swapping the body for a
// real request later doesn't change anything for callers of useSongs().
async function fetchSongs(): Promise<Song[]> {
    return PLACEHOLDER_SONGS;
}

export function useSongs() {
    const [songs, setSongs] = useState<Song[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let cancelled = false;

        fetchSongs().then((data) => {
            if (!cancelled) {
                setSongs(data);
                setLoading(false);
            }
        });

        return () => {
            cancelled = true;
        };
    }, []);

    return { songs, loading };
}
