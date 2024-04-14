


// eslint-disable-next-line react/prop-types
function Pagination({ productsPerPage, allProducts, pagination }) {

	const pageNumbers = [];
		
	for (let i = 0; i < Math.ceil(allProducts/ productsPerPage); i++) {
		pageNumbers.push(i+1);
	}

	return (
		<nav >
			<div  className="paginado">
				{pageNumbers &&
					pageNumbers.map((number) => (
							<button key={number} className="button" onClick={() => pagination(number)}>{number}</button>
					))}
			</div>
		</nav>
	);
}
export default Pagination;
