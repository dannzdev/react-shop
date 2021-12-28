import React, { useContext } from 'react';
import OrderItem from '../components/OrderItem';
import '../styles/Checkout.scss';
import arrow from '@icons/flechita.svg';
import AppContext from '../context/AppContext';

const Checkout = ({ setToggle }) => {

	const { state } = useContext(AppContext);
	
	console.log(state);

	const today = new Date(Date.now()).toLocaleString().split(', ')[0];
	return (
		<div className="Checkout">
			<div className="Checkout-container">
				<div className="title-container" onClick={() => setToggle(false)}>
					<img src={arrow} alt="arrow" />
					<h1 className="title">My order</h1>
				</div>
				<div className="Checkout-content">
					<div className="order">
						<p>
							<span>{today}</span>
							<span>{state.cart.length} articles</span>
						</p>
						<p>${state.total}</p>
					</div>
				</div>
				{state.cart.map((product) => (
					<OrderItem
						product={product}
						key={`orderItem-${product.id}`}
					/>
				))}
			</div>
		</div>
	);
}

export default Checkout;