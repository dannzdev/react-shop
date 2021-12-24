import React, { useContext, useState } from 'react';
import AppContext from '../context/AppContext';
import OrderItem from '@components/OrderItem';
import '@styles/MyOrder.scss';
import arrow from '@icons/flechita.svg';

const MyOrder = ({ toggleOrders, setToggleOrders }) => {
	const { state } = useContext(AppContext);
	const [ toggle, setToggle ] = useState(false);


	const sumTotal = () => {
		const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
		const sum = state.cart.reduce(reducer, 0);
		return sum;
	}



	return (
		<aside className="MyOrder">
			<div className="title-container">

				<a href="/orders"><img src={arrow} alt="arrow"/></a>
				<p className="titlep">My order</p>

			</div>
			<div className="my-order-content">
			{state.cart.map((product, index) => (
					<OrderItem product={product} key={`orderItem-${product.id}-${index}`} />
		))}

				<div className="order">
					<p>
						<span>Total</span>
					</p>
					<p>${sumTotal()}</p>
				</div>
				<a href="/checkout"><button className="primary-button" onClick={() => setToggle(true)}>
					Checkout</button></a>
			</div>
			{toggle && <Checkout toggleOrders={toggleOrders}
					setToggleOrders={setToggleOrders}/>}
		</aside>
	);
}

export default MyOrder;
