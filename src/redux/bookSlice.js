import { createSlice } from "@reduxjs/toolkit";
import initialBookLists from "../data/bookData";

const bookSlice = createSlice({
	name: "books",
	initialState: {
		bookLists: initialBookLists,
	},
	reducers: {
		addBook: (state, action) => {
			state.bookLists.push(action.payload);
		},
	},
});

export const { addBook } = bookSlice.actions;
export default bookSlice.reducer;
