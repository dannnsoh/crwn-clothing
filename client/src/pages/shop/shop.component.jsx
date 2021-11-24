import React, { useEffect } from "react";
import useActions from "../../redux/use-actions";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";
import Spinner from "../../components/spinner/spinner.component";

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
					element={isFetching ? <Spinner /> : <CollectionsOverview />}
				/>
				<Route
					path=":categoryName"
					element={isLoaded ? <CollectionPage /> : <Spinner />}
				/>
			</Routes>
		</div>
	);
};

export default ShopPage;
