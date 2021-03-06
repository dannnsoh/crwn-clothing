import CartActionTypes from "./cart.types";

export const toggleCartHidden = () => ({
	type: CartActionTypes.TOGGLE_CART_HIDDEN
});

export const addCartItem = item => ({
	type: CartActionTypes.ADD_CART_ITEM,
	payload: item
});

export const removeCartItem = item => ({
	type: CartActionTypes.REMOVE_CART_ITEM,
	payload: item
});

export const clearCartItem = id => ({
	type: CartActionTypes.CLEAR_CART_ITEM,
	payload: id
});

export const clearCart = () => ({
	type: CartActionTypes.CLEAR_CART
});
