// Minimal finite-state-machine primitive. Not tied to viewport/window sizing -
// any future machine (playback, auth, etc.) can be defined the same way:
// a map of { state: { eventType: (event) => nextState } }.

export type MachineEvent = { type: string };

export type MachineTransitions<State extends string, Event extends MachineEvent> = {
    [S in State]?: {
        [E in Event['type']]?: (event: Extract<Event, { type: E }>, state: S) => State;
    };
};

export type MachineConfig<State extends string, Event extends MachineEvent> = {
    initial: State;
    transitions: MachineTransitions<State, Event>;
};

export function createMachine<State extends string, Event extends MachineEvent>(
    config: MachineConfig<State, Event>
) {
    function transition(state: State, event: Event): State {
        const handler = config.transitions[state]?.[event.type as Event['type']];
        return handler ? handler(event as any, state) : state;
    }

    return { initial: config.initial, transition };
}
