import {combineReducers, createStore} from "redux"
import ATMReducer from "./ATM"
import HeaderReducer from "./Header"
const reducer = combineReducers({
    atm: ATMReducer,
    header: HeaderReducer
})
const store = createStore(reducer)
export default store