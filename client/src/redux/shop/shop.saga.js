import { takeLatest, call, put, all } from "redux-saga/effects";
import { db, convertCollectionsSnapshotToMap } from "../../firebase/firebase.utils";
import { collection, getDocs } from "firebase/firestore";

import ShopActionTypes from "./shop.types";
import { fetchCollectionsSuccess, fetchCollectionsFailure } from "./shop.action-creators";

export function* fetchCollections() {
	try {
		const collectionRef = collection(db, "collections");
		const collectionSnap = yield getDocs(collectionRef);
		const collectionsMap = yield call(
			convertCollectionsSnapshotToMap,
			collectionSnap
		);
		yield put(fetchCollectionsSuccess(collectionsMap));
	} catch (err) {
		yield put(fetchCollectionsFailure(err.message));
	}
}

// takeEvery allows concurrent actions to be handled (eg. allows a new task to start even if a previous task is still ongoing/hasn't terminated)
// takeLatest automatically cancels any previous saga task started previously if it's still running
export function* onFetchCollectionsStart() {
	yield takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START, fetchCollections);
}

export default function* shopSagas() {
	yield all([call(onFetchCollectionsStart)]);
}
