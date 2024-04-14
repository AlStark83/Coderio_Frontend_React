/* eslint-disable react/prop-types */

import { connect } from 'react-redux';
import { addToCart } from '../redux/actions/actions';

const ButtonAddToCart = ({ product, addToCart }) => {
  return (
    <button onClick={() => addToCart(product)}>Add to Cart</button>
    
  );
};

const mapDispatchToProps = {
  addToCart
};
const ButtonAddToCartConnected = connect(null, mapDispatchToProps)(ButtonAddToCart);

export default ButtonAddToCartConnected