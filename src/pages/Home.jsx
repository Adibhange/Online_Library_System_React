import { Link } from "react-router-dom";
import bookCategories from "../data/bookCategories";
import BookItem from "../components/BookItem";
import { useSelector } from "react-redux";

const Home = () => {
	const books = useSelector((state) => state.books.bookLists);
	const popularBooks = books.slice(0, 4);

	return (
		<section className='container flex flex-col  justify-center py-6 px-4'>
			<div className='text-center space-y-4'>
				<h1 className='text-4xl text-copy tracking-tight'>
					Welcome to the Online Library
				</h1>
				<p className='text-copy-light tracking-tighter text-2xl'>
					Explore our vast collection of books
				</p>
			</div>

			{/* Book Categories */}
			<p className='text-xl mt-4 text-primary '>Explore Book Categories</p>
			<div className='flex w-full gap-3'>
				{bookCategories.map((category) => {
					return (
						<div
							key={category.id}
							className='rounded-md border-2 border-border bg-foreground px-4 py-2 shadow-md hover:shadow-lg transition-shadow duration-300'>
							<Link
								to={`/books/${category.name}`}
								className='text-xl  '>
								{category.name}
							</Link>
						</div>
					);
				})}
			</div>

			{/* Popular Books */}
			<p className='text-xl mt-4 text-primary '>Popular Books</p>
			<div className='grid grid-cols-4 gap-4'>
				{popularBooks.map((book) => {
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
		</section>
	);
};

export default Home;
