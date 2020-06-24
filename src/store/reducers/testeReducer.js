const initialState = {
    data: [],
    labels: [0],
    connect: false,
    connecting: false,
    startTime: 0,
};

export default function testeReducer(state = initialState, action) {
    switch (action.type) {
        case 'UPDATE_DATA':
            return { ...state, data: [...state.data, action.data] };
        case 'UPDATE_TIME':
            return { ...state, labels: [...state.labels, `${(action.time - state.startTime)/1000} s`], };
        case 'START_TIME':
            return { ...state, startTime: action.startTime };
        case 'CLEAR':
            return {
                data: [],
                labels: [],
                connect: false,
                connecting: false,
            };
        default:
            return state
    }
}

export const actions = {
    updateData: (data) => (
        { type: 'UPDATE_DATA', data: data }
    ),
    updateLabel: (time) => (
        { type: 'UPDATE_TIME', time: time }
    ),
    setTimeStart: (startTime) => (
        { type: 'START_TIME', startTime: startTime }
    ),
    clearData: () => (
        { type: 'CLEAR' }
    ),
}