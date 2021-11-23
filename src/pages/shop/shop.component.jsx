import React, { useEffect } from "react";
import useActions from "../../redux/use-actions";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";

const ShopPage = () => {
	const { fetchCollectionsStart } = useActions();
	const isFetching = useSelector(state => state.shop.isFetching);
	const isLoaded = useSelector(state => !!state.shop.collections);

	useEffect(() => {
		fetchCollectionsStart();
	}, [fetchCollectionsStart]);

	return (
		<div className="shop-page">
			<Routes>
				<Route
					path="/"
					element={<CollectionsOverview isLoading={isFetching} />}
				/>
				<Route
					path=":categoryName"
					element={<CollectionPage isLoading={!isLoaded} />}
				/>
			</Routes>
		</div>
	);
};

export default ShopPage;
