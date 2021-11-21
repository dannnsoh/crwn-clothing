import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import logger from "redux-logger";
import reducers from "./root-reducer";

const middlewares = [];

if (process.env.NODE_ENV === "development") {
	middlewares.push(logger);
}

const store = createStore(reducers, applyMiddleware(...middlewares));

export const persistor = persistStore(store);

export default store;
