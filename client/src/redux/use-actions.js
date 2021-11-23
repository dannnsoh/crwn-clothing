import { bindActionCreators } from "redux";
import { useDispatch } from "react-redux";
import { useMemo } from "react";
import * as actions from "./action-creators";

const useActions = () => {
	const dispatch = useDispatch();

	return useMemo(() => {
		return bindActionCreators(actions, dispatch);
	}, [dispatch]);
};

export default useActions;
