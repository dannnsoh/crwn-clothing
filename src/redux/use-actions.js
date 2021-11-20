import { bindActionCreators } from "redux";
import { useDispatch } from "react-redux";
import { useMemo } from "react";
import * as actions from "./action-creators";

export const useActions = () => {
	const dispatch = useDispatch();

	return useMemo(() => {
		// if (Array.isArray(actions)) {
		// 	return actions.map(a => bindActionCreators(a, dispatch));
		// }
		return bindActionCreators(actions, dispatch);
	}, [dispatch]);
};
