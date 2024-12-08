import { Link, useParams } from "react-router-dom";
import books from "../data/bookData";

const BookDetails = () => {
	const { bookId } = useParams();
	const book = books.find((book) => book.id === parseInt(bookId, 10));

	return (
		<section className='container flex flex-col gap-3 justify-center py-6 px-4 mx-auto bg-foreground w-1/2 rounded-lg shadow-md'>
			<Link to='/books'>
				<button className='text-primary underline '>Back to Browse Book</button>
			</Link>
			<img
				src={book.coverImage}
				alt={book.title}
				className='h-64 w-full object-cover rounded-md'
			/>
			<h1 className='text-3xl font-bold text-center'>{book.title}</h1>

			<div className='space-y-2'>
				<p className=' text-copy text-xl'>{book.author}</p>
				<p className=' text-copy-light'>{book.description}</p>
			</div>

			<div className='flex justify-between items-center mt-4'>
				<p className='text-primary-light'>Category: {book.category}</p>
				<p className='text-primary-light'>Rating: ⭐{book.rating}</p>
			</div>
		</section>
	);
};

export default BookDetails;
