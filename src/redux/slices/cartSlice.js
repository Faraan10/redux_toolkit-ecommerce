import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addToCart(state, action) {
			state.push(action.payload);
		},
		removeFromCart(state, action) {
			console.log(action.payload);
			return state.filter((item) => item?._id !== action.payload);
		},
	},
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
