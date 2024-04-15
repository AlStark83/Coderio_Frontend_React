import PropTypes from 'prop-types';

function Pagination({ productsPerPage, allProducts, pagination }) {

	const pageNumbers = [];
		
	for (let i = 0; i < Math.ceil(allProducts/ productsPerPage); i++) {
		pageNumbers.push(i+1);
	}

	return (
		<nav className="flex justify-center mt-8">
			<div className="pagination">
				{pageNumbers &&
					pageNumbers.map((number) => (
						<button
							key={number}
							className="mb-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-1 focus:outline-none focus:shadow-outline"
							onClick={() => pagination(number)}
						>
							{number}
						</button>
					))}
			</div>
		</nav>
	);
	
}
Pagination.propTypes = {
  productsPerPage: PropTypes.number.isRequired,
  allProducts: PropTypes.array.isRequired,
  pagination: PropTypes.func.isRequired
};
export default Pagination;
