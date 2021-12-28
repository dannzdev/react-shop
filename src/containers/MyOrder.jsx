import React, { useContext, useState } from "react";
import AppContext from "../context/AppContext";
import OrderItem from "@components/OrderItem";
import "@styles/MyOrder.scss";
import arrow from "@icons/flechita.svg";
import { Link }from 'react-router-dom';

const MyOrder = ({ toggleOrders, setToggleOrders }) => {
	const { state } = useContext(AppContext);
	console.log(state);
	const [toggle, setToggle] = useState(false);

 const sumTotal = () => {
  const reducer = (accumulator, currentValue) =>
   accumulator + currentValue.price;
  const sum = state.cart.reduce(reducer, 0);
  return sum;
 };

 return (
  <aside className="MyOrder">
   <div className="title-container">
    <a href="/orders">
     <img src={arrow} alt="arrow" />
    </a>
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
    <Link to="/checkout" >
     <button className="primary-button" onClick={() => setToggle(true)}>
      Checkout
     </button>
    </Link>
   </div>
   {/* {toggle && (
    <Checkout  setToggle={setToggle} />
   )} */}
  </aside>
 );
};

export default MyOrder;
