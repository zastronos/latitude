import { useEffect, useState } from 'react';

export type Song = {
    id: string;
    title: string;
    subtitle: string;
    youtubeVideoId: string;
    appleMusic?: string;
    spotify?: string;
};

// Placeholder data until this is backed by a real endpoint (e.g. GET /api/songs).
const PLACEHOLDER_SONGS: Song[] = [
    { id: 'sail-away', title: 'SAIL AWAY', subtitle: 'OUT NOW', youtubeVideoId: 'MR4iZty2Wms', appleMusic: 'sail-away/6770816529', spotify: '5TpB5mDKtFGbld6Cu3rxSG?si=1ba082b41340465f' }, //https://open.spotify.com/track/5TpB5mDKtFGbld6Cu3rxSG?si=1ba082b41340465f
    { id: 'fever-dreaming', title: 'FEVER DREAMING', subtitle: 'OUT NOW', youtubeVideoId: 'WHqfkmodxjE', appleMusic: 'fever-dreaming/6770816529', spotify: '6ZFHsBBP0RqT3ld652CD36?si=1df2693caca14170'},
    { id: 'addicted', title: 'ADDICTED', subtitle: 'OUT NOW', youtubeVideoId: 'sna_dhUntX4', appleMusic: 'addicted/6770816529', spotify: '3uAHHqqmNoS0viASK54B8h?si=2ab3520e65734316' },
    { id: 'dehydrated', title: 'DEHYDRATED', subtitle: 'OUT NOW', youtubeVideoId: 'uKxw7q-BlhI', appleMusic: 'dehydrated/6770816529', spotify: '1G1B4HYuQ1TsP9a3YSkmhl?si=0338933a6ead4cff' },
    { id: 'feel-it-all', title: 'FEEL IT ALL', subtitle: 'OUT NOW', youtubeVideoId: 'Qoupv5Dt_jw', appleMusic: 'feel-it-all/6770816529', spotify: '0iKFGKLdiDa1PNZxmublSW?si=4b3cd469e56e4a71' },
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
