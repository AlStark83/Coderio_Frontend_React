/* eslint-disable react/prop-types */
// import Link  from 'react'
function Card({ id, name, image, title, price }) {
  return (
    <>
    <div className={"id"} key={id}>
			{/* <Link to={`/product/${id}`}> */}
				<img className={"image"} src={image} alt="not found" />
			{/* </Link> */}
			<h2>{title}</h2>
			<h2>{name}</h2>
			<h3 className={price}>{price}</h3>
		</div>
    </>
  )
}

export default Card