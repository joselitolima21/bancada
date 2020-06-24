import { createStore , combineReducers} from 'redux'

import testeReducer from './reducers/testeReducer'

const rootReducer = combineReducers({
    testeReducer: testeReducer,
}) 

const store = createStore(rootReducer);

export default store;