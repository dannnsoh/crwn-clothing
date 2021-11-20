import { combineReducers } from "redux";

import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";

const reducers = combineReducers({
	user: userReducer,
	cart: cartReducer
});

export default reducers;
