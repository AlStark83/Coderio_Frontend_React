/* eslint-disable no-case-declarations */
import {
	ADD_TO_CART,
	REMOVE_FROM_CART,
	UPDATE_QUANTITY,
} from "../actions/actions";

const initialState = {
	cartItems: [],
};

const cartReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_TO_CART:
			const existingItemIndex = state.cartItems.findIndex(item => item.id === action.payload.id);
      if (existingItemIndex !== -1) {
        const updatedCartItems = [...state.cartItems];
        updatedCartItems[existingItemIndex].quantity += 1;
        return {
          ...state,
          cartItems: updatedCartItems
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }]
        };
      }
		case REMOVE_FROM_CART:
			return {
				...state,
				cartItems: state.cartItems.filter((item) => item.id !== action.payload),
			};
		case UPDATE_QUANTITY:
			return {
				...state,
				cartItems: state.cartItems.map((item) =>
					item.id === action.payload.productId
						? { ...item, quantity: action.payload.quantity }
						: item
				),
			};
		default:
			return state;
	}
};

export default cartReducer;
