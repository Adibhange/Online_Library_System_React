import { useParams } from "react-router-dom";

const CategoryBooks = () => {
	const { category } = useParams();
	return <div>{category}</div>;
};

export default CategoryBooks;
