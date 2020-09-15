import { createStore , combineReducers} from 'redux'

import testeReducer from './reducers/testeReducer'
import infoFileReducer from './reducers/infoFileReducer'

const rootReducer = combineReducers({
    testeReducer: testeReducer,
    infoFileReducer: infoFileReducer,
}) 

const store = createStore(rootReducer);

export default store;