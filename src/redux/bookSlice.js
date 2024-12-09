import { createSlice } from "@reduxjs/toolkit";
import initialBookLists from "../data/bookData";

if (!localStorage.getItem("books")) {
	localStorage.setItem("books", JSON.stringify(initialBookLists));
}

// Retrieve books from localStorage
const savedBooks = JSON.parse(localStorage.getItem("books"));

const bookSlice = createSlice({
	name: "books",
	initialState: {
		bookLists: savedBooks,
	},
	reducers: {
		addBook: (state, action) => {
			state.bookLists.push(action.payload);
			localStorage.setItem("books", JSON.stringify(state.bookLists));
		},
	},
});

export const { addBook } = bookSlice.actions;
export default bookSlice.reducer;
