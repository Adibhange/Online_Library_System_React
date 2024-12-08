import { Link } from "react-router-dom";

const BookItem = ({
	bookId,
	bookTitle,
	bookAuthor,
	bookCoverImage,
	bookDescription,
	bookCategory,
	bookRating,
}) => {
	return (
		<article className='rounded-3xl bg-foreground p-1 text-text transition-all duration-500 hover:scale-105 shadow-md hover:shadow-lg '>
			<img
				src={bookCoverImage}
				alt={bookTitle}
				className='h-64 w-full rounded-t-3xl object-cover'
			/>
			<div className='p-2 space-y-2'>
				<h2 className='truncate text-2xl font-bold'>{bookTitle}</h2>
				<p className='text-copy  text-xl'>{bookAuthor}</p>
				<p className='text-copy-light'>{bookDescription}</p>

				<div className='flex justify-between items-center'>
					<p className='text-copy-light'>Category: {bookCategory}</p>
					<p className='text-copy-light'>Rating: ⭐{bookRating}</p>
				</div>
			</div>

			<Link
				to={`/books/${bookId}`}
				className='p-2 text-primary-light'>
				View Details
			</Link>
		</article>
	);
};

export default BookItem;
