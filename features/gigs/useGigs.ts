import { useEffect, useState } from 'react';

export type Gig = {
    id: string;
    date: string; // ISO date, e.g. '2026-09-12'
    city: string;
    venue: string;
    ticketUrl?: string;
    soldOut?: boolean;
};

// Placeholder data until this is backed by a real endpoint (e.g. GET /api/gigs).
const PLACEHOLDER_GIGS: Gig[] = [
    { id: 'bristol-fleece', date: '2026-09-12', city: 'Bristol, UK', venue: 'The Fleece', ticketUrl: 'https://www.thefleece.co.uk' },
    { id: 'london-scala', date: '2026-10-03', city: 'London, UK', venue: 'Scala', ticketUrl: 'https://www.scala.co.uk' },
    { id: 'manchester-deaf', date: '2026-10-18', city: 'Manchester, UK', venue: 'Deaf Institute', soldOut: true },
    { id: 'glasgow-garage', date: '2026-11-02', city: 'Glasgow, UK', venue: 'King Tut\'s Wah Wah Hut', ticketUrl: 'https://www.kingtuts.co.uk' },
];

// Stands in for `fetch('/api/gigs')`. Kept async so swapping the body for a
// real request later doesn't change anything for callers of useGigs().
async function fetchGigs(): Promise<Gig[]> {
    return PLACEHOLDER_GIGS;
}

export function useGigs() {
    const [gigs, setGigs] = useState<Gig[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let cancelled = false;

        fetchGigs().then((data) => {
            if (!cancelled) {
                setGigs(data);
                setLoading(false);
            }
        });

        return () => {
            cancelled = true;
        };
    }, []);

    return { gigs, loading };
}
