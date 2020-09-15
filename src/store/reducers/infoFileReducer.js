const initialState = {
    name: '',
    heliceType: '',
};

const types = {
    upName: 'UP_NAME',
    upHelice: 'UP_HELICE',
    clear: 'CLEAR'
}

export default function infoFileReducer(state = initialState, action) {
    switch (action.type) {
        case types.upName:
            return { ...state, name: action.name };
        case types.upHelice:
            return { ...state, heliceType: action.heliceType };
        case types.clear:
            return {
                name: '',
                heliceType: '',
            };
        default:
            return state
    }
}

export const actions = {
    updateName: (name) => (
        { type: types.upName, name }
    ),
    updateHelice: (heliceType) => (
        { type: types.upHelice, heliceType }
    ),
    clearState: () => (
        { type: types.clear }
    ),
}