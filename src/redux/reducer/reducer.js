import {
	ADD_TO_CART,
	REMOVE_FROM_CART,
	UPDATE_QUANTITY,
} from "../actions/actions";

const initialState = {
	cartItems: [{ id: 18, price:9.85, image:"https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg", title:"MBJ Women's Solid Short Sleeve Boat Neck V " }],
};

const cartReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_TO_CART:
			return {
				...state,
				cartItems: [...state.cartItems, action.payload],
			};
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
