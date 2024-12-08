import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import Home from "./pages/Home";
import BrowseBook from "./pages/BrowseBook";
import AddBook from "./pages/AddBook";
import CategoryBooks from "./pages/CategoryBooks.jsx";
import BookDetails from "./pages/BookDetails";
import { Provider } from "react-redux";
import store from "./redux/store";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		errorElement: <ErrorPage />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: "books",
				element: <BrowseBook />,
			},
			{
				path: "books/add",
				element: <AddBook />,
			},
			{
				path: "books/:category",
				element: <CategoryBooks />,
			},
			{
				path: "book/:bookId",
				element: <BookDetails />,
			},
		],
	},
]);

createRoot(document.getElementById("root")).render(
	<Provider store={store}>
		<StrictMode>
			<RouterProvider router={router} />
		</StrictMode>
	</Provider>
);
