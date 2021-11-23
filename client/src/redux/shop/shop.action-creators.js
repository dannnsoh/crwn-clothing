import ShopActionTypes from "./shop.types";

// import { db, convertCollectionsSnapshotToMap } from "../../firebase/firebase.utils";
// import { collection, getDocs } from "firebase/firestore";

export const fetchCollectionsStart = () => ({
	type: ShopActionTypes.FETCH_COLLECTIONS_START
});

export const fetchCollectionsSuccess = collectionsMap => ({
	type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
	payload: collectionsMap
});

export const fetchCollectionsFailure = errorMessage => ({
	type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
	payload: errorMessage
});

// export const fetchCollections = () => async dispatch => {
// 	try {
// 		const collectionRef = collection(db, "collections");
// 		const collectionSnap = await getDocs(collectionRef);
// 		const collectionsMap = await convertCollectionsSnapshotToMap(collectionSnap);
// 		dispatch({
// 			type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
// 			payload: collectionsMap
// 		});
// 	} catch (err) {
// 		dispatch({
// 			type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
// 			payload: err.message
// 		});
// 	}
// };
