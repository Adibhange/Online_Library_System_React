import { Link } from "react-router-dom";
import bookCategories from "../data/bookCategories";
import BookItem from "../components/BookItem";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const BrowseBook = () => {
	const bookLists = useSelector((state) => state.books.bookLists);
	const [searchText, setSearchText] = useState("");
	const [books, setBooks] = useState(bookLists);

	useEffect(() => {
		setBooks(bookLists);
	}, [bookLists]);

	const handleSearch = () => {
		const results = bookLists.filter(
			(book) =>
				book.title.toLowerCase().includes(searchText.toLowerCase()) ||
				book.author.toLowerCase().includes(searchText.toLowerCase())
		);
		setBooks(results);
		setSearchText(""); // Clear search bar after filtering
	};

	const handleClearSearch = () => {
		setBooks(bookLists);
	};

	return (
		<section className='container flex flex-col gap-6 justify-center  w-[95%] mx-auto '>
			<div className='bg-foreground py-6 px-4 space-y-2 rounded-md shadow-md'>
				<p className='text-xl text-center text-primary '>
					Filter Books by Category
				</p>
				<div className='flex w-full gap-2'>
					{bookCategories.map((category) => {
						return (
							<div
								key={category.id}
								className='rounded-md border-2 border-border bg-background px-4 py-2 shadow-md hover:shadow-lg transition-shadow duration-300'>
								<Link
									to={`/books/${category.name}`}
									className='text-xl  '>
									{category.name}
								</Link>
							</div>
						);
					})}
				</div>
			</div>

			<div className='flex gap-3 items-center justify-center w-full mx-auto'>
				<input
					type='text'
					placeholder='Search Books by Title or Author'
					className='w-1/2 rounded-md border-2 border-border bg-foreground px-4 py-2 shadow-md hover:shadow-lg transition-shadow duration-300'
					onChange={(e) => setSearchText(e.target.value)}
					value={searchText}
				/>
				<button
					onClick={handleSearch}
					className='px-4  py-2 rounded-md bg-primary'>
					Search
				</button>
				<button
					onClick={handleClearSearch}
					className='px-4  py-2 rounded-md bg-foreground shadow-lg transition-all duration-300 hover:bg-primary-light'>
					Clear Search Results
				</button>
			</div>

			{books.length > 0 ? (
				<div className='grid grid-cols-4 gap-4'>
					{books.map((book) => {
						return (
							<BookItem
								key={book.id}
								bookId={book.id}
								bookTitle={book.title}
								bookAuthor={book.author}
								bookCoverImage={book.coverImage}
								bookDescription={book.description}
								bookCategory={book.category}
								bookRating={book.rating}
							/>
						);
					})}
				</div>
			) : (
				<div className='flex flex-col items-center justify-center gap-2'>
					<h1 className='text-4xl text-copy-lighter tracking-tight'>
						No Books Found
					</h1>
				</div>
			)}
		</section>
	);
};

export default BrowseBook;
