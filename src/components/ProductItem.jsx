import React, { useContext, useState } from 'react';
import '../styles/ProductItem.scss';
import AppContext from '../context/AppContext';
import ProductDetail from '../containers/ProductDetail';

import addToCartImage from '@icons/bt_add_to_cart.svg';
import addedToCartImage from '@icons/bt_added_to_cart.svg';

const ProductItem = ({ product }) => {
	const [ toggleProduct, setToggleProduct ] = useState(false);
	const { state, addToCart } = useContext(AppContext);

	const handleClick = (item) => {
			addToCart(item);
	}

	return (
		<div className="ProductItem">
			<img
				src={product.images[0]}
				loading="lazy" alt={product.title} className="productImage"
				onClick={() => setToggleProduct(!toggleProduct)}
			/>
			<div className="product-info">
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				<figure
					onClick={() => handleClick(product)}>
					{  state.cart.includes(product) ? <img className="add-to-cart-btn" src={addedToCartImage} alt="added to cart" />  : <img className="add-to-cart-btn pointer" src={addToCartImage} alt="add to cart" /> }
				</figure>
			</div>
			{toggleProduct && <ProductDetail
				product={product}
				setToggleProduct={setToggleProduct}
				handleClick={handleClick}
			/>}
		</div>
	);
}

export default ProductItem;