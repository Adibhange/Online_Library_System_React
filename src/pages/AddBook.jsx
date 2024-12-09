import { useState } from "react";
import { useNavigate } from "react-router-dom";
import bookCategories from "../data/bookCategories";
import { useDispatch } from "react-redux";
import { addBook } from "../redux/bookSlice";

const AddBook = () => {
	const [formData, setFormData] = useState({
		title: "",
		author: "",
		coverImage: "",
		description: "",
		category: "",
		rating: "",
	});

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		// Validate the form
		if (
			!formData.title ||
			!formData.author ||
			!formData.coverImage ||
			!formData.description ||
			!formData.category ||
			!formData.rating
		) {
			alert("Please fill in all fields.");
			return;
		}

		dispatch(addBook({ ...formData, id: Date.now() })); // Unique ID using timestamp
		navigate("/books");
	};

	return (
		<section className='container mx-auto py-6 px-4'>
			<h1 className='text-3xl font-bold text-center mb-6'>Add New Book</h1>
			<form
				onSubmit={handleSubmit}
				className='max-w-lg mx-auto space-y-4 bg-foreground p-6 rounded-md shadow-md'>
				<div>
					<label className='block font-medium mb-2'>Book Title</label>
					<input
						type='text'
						name='title'
						value={formData.title}
						onChange={handleChange}
						className='w-full border border-border rounded-md p-2'
					/>
				</div>

				<div>
					<label className='block font-medium mb-2'>Author</label>
					<input
						type='text'
						name='author'
						value={formData.author}
						onChange={handleChange}
						className='w-full border border-border rounded-md p-2'
					/>
				</div>

				<div>
					<label className='block font-medium mb-2'>Cover Image URL</label>
					<input
						type='text'
						name='coverImage'
						value={formData.coverImage}
						onChange={handleChange}
						className='w-full border border-border rounded-md p-2'
					/>
				</div>

				<div>
					<label className='block font-medium mb-2'>Description</label>
					<textarea
						name='description'
						value={formData.description}
						onChange={handleChange}
						className='w-full border border-border rounded-md p-2'
						rows='4'></textarea>
				</div>

				<div>
					<label className='block font-medium mb-2'>Category</label>

					<select
						name='category'
						value={formData.category}
						onChange={handleChange}
						className='w-full border border-border rounded-md p-2'>
						<option
							value=''
							disabled>
							Select a category
						</option>
						{bookCategories.map((category) => (
							<option
								key={category.id}
								value={category.name}>
								{category.name}
							</option>
						))}
					</select>
				</div>

				<div>
					<label className='block font-medium mb-2'>Rating (1-5)</label>
					<input
						type='number'
						name='rating'
						value={formData.rating}
						onChange={handleChange}
						min='1'
						max='5'
						className='w-full border border-border rounded-md p-2'
					/>
				</div>

				<button
					type='submit'
					className='w-full bg-primary text-white py-2 rounded-md shadow-md'>
					Add Book
				</button>
			</form>
		</section>
	);
};

export default AddBook;
