import { useParams } from "react-router-dom";
import BookItem from "../components/BookItem";
import { useSelector } from "react-redux";

const CategoryBooks = () => {
	const { category } = useParams();
	const books = useSelector((state) => state.books.bookLists);
	return (
		<section className='container flex flex-col gap-3 justify-center py-6 px-4 mx-auto'>
			<h1 className='text-3xl font-bold text-center'>{category}</h1>
			<div className='grid grid-cols-4 gap-4'>
				{books
					.filter((book) => book.category === category)
					.map((book) => {
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

export default CategoryBooks;
