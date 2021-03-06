import { takeLatest, all, call, put } from "redux-saga/effects";

import UserActionTypes from "../user/user.types";
import { clearCart } from "./cart.action-creators";

export function* clearCartOnSignOut() {
	yield put(clearCart());
}

export function* onSignOutSuccess() {
	yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export default function* cartSagas() {
	yield all([call(onSignOutSuccess)]);
}
