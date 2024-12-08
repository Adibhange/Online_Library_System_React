import { Link } from "react-router-dom";
import bookCategories from "../data/bookCategories";

const BrowseBook = () => {
	return (
		<section className='container flex flex-col gap-3 justify-center py-6 px-4 w-[95%] mx-auto bg-foreground rounded-lg shadow-md'>
			<p className='text-xl text-center text-primary '>
				Filter Books by Category
			</p>
			<div className='flex w-full gap-2'>
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
		</section>
	);
};

export default BrowseBook;
