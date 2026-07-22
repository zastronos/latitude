import { createContext, useContext, useEffect, useReducer, type ReactNode } from 'react';
import { useWindowDimensions } from 'react-native';
import { resolveViewportState, viewportMachine, type ViewportState } from './viewportMachine';

type ViewportContextValue = {
    state: ViewportState;
    width: number;
    height: number;
    isMobile: boolean;
};

const ViewportContext = createContext<ViewportContextValue | null>(null);

export function ViewportProvider({ children }: { children: ReactNode }) {
    const { width, height } = useWindowDimensions();
    const [state, dispatch] = useReducer(
        viewportMachine.transition,
        resolveViewportState(width)
    );

    useEffect(() => {
        dispatch({ type: 'RESIZE', width, height });
    }, [width, height]);

    return (
        <ViewportContext.Provider value={{ state, width, height, isMobile: state === 'mobile' }}>
            {children}
        </ViewportContext.Provider>
    );
}

export function useViewport() {
    const context = useContext(ViewportContext);
    if (!context) {
        throw new Error('useViewport must be used within a ViewportProvider');
    }
    return context;
}
