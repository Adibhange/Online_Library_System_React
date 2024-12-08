import { Link } from "react-router-dom";
import bookCategories from "../data/bookCategories";

const Home = () => {
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
			<div className='flex w-full gap-4'>
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

export default Home;
