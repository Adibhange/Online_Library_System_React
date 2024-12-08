import { Link } from "react-router-dom";

const ErrorPage = () => {
	return (
		<div className='flex flex-col items-center justify-center h-screen gap-2'>
			<h1 className='text-4xl text-copy-lighter tracking-tight'>
				Page not found
			</h1>
			<Link to='/'>
				<button className='px-4 py-2 bg-primary-light text-primary-content font-semibold rounded-md hover:bg-primary'>
					Back to Home
				</button>
			</Link>
		</div>
	);
};

export default ErrorPage;
