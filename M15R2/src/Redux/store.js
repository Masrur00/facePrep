import { legacy_createStore } from "redux";

import { AuthReducer } from "./reducer";



export const Store = legacy_createStore(AuthReducer);
