import books from "../data/bookData";
import BookItem from "./BookItem";

const PopularBooks = () => {
	const popularBooks = books.slice(0, 4);

	return (
		<section className='grid grid-cols-4 gap-4'>
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
		</section>
	);
};

export default PopularBooks;
