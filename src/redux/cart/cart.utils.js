export const addItemToCart = (cartItems, itemToAdd) => {
	const existingItem = cartItems.find(item => item.id === itemToAdd.id);

	if (existingItem) {
		return cartItems.map(item => {
			if (item.id === itemToAdd.id) {
				return { ...item, quantity: item.quantity + 1 };
			} else {
				return item;
			}
		});
	}

	return [...cartItems, { ...itemToAdd, quantity: 1 }];
};
