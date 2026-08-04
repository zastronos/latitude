// Global theme for the site. Add new fonts/colors here rather than inlining
// them in components, so every screen stays visually consistent.

export const fonts = {
    // Hand-drawn display font used for all headings/nav/body text site-wide.
    display: 'NetworkFreeVersion',
} as const;

export const colors = {
    background: '#000000',
    text: '#FFFFFF',
    textMuted: '#8A8A8A',
    accent: '#E63946',
    border: '#333333',
    highlight: '#FFFFFF',
    highlightText: '#000000',
    backgroundLight: '#d5d5d5',
    surface: '#161616',
} as const;
