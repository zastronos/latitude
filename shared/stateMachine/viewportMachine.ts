import { createMachine } from './createMachine';

export type ViewportState = 'mobile' | 'desktop';

export type ViewportEvent = { type: 'RESIZE'; width: number; height: number };

const MOBILE_BREAKPOINT = 768;

export function resolveViewportState(width: number): ViewportState {
    return width < MOBILE_BREAKPOINT ? 'mobile' : 'desktop';
}

export const viewportMachine = createMachine<ViewportState, ViewportEvent>({
    initial: 'desktop',
    transitions: {
        mobile: {
            RESIZE: (event) => resolveViewportState(event.width),
        },
        desktop: {
            RESIZE: (event) => resolveViewportState(event.width),
        },
    },
});
