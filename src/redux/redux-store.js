import {combineReducers, createStore} from "redux";
import dialogsReduce from "./dialogs-reduce";
import profileReduce from "./profile-reduce";
import sidebarReduce from "./sidebar-reduce";

let reducers = combineReducers({
    dialogsPage: dialogsReduce,
    profilePage: profileReduce,
    sidebar: sidebarReduce,
})
let store = createStore(reducers)
export default store