import React, { useEffect, useState } from "react";
import { useActions } from "../../redux/use-actions";
import { Routes, Route } from "react-router-dom";
import { db, convertCollectionsSnapshotToMap } from "../../firebase/firebase.utils";
import { collection, onSnapshot } from "firebase/firestore";
import Spinner from "../../components/spinner/spinner.component";

import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";

const ShopPage = () => {
	const [loading, setLoading] = useState(true);
	const { updateCollections } = useActions();

	useEffect(() => {
		const collectionRef = collection(db, "collections");
		const unsubscribe = onSnapshot(collectionRef, async snapshot => {
			const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
			updateCollections(collectionsMap);
			setLoading(false);
		});

		return unsubscribe;
	}, [updateCollections]);

	return (
		<div className="shop-page">
			<Routes>
				<Route
					path="/"
					element={loading ? <Spinner /> : <CollectionsOverview />}
				/>
				<Route
					path=":categoryName"
					element={loading ? <Spinner /> : <CollectionPage />}
				/>
			</Routes>
		</div>
	);
};

export default ShopPage;
