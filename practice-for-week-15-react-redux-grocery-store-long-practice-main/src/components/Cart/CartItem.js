import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import {addCart} from  '../../store/cart.js';


function CartItem({ item }) {
  const [count, setCount] = useState(item.count);

  useEffect(() => {
    setCount(item.count);
  }, [item.count]);

  return (
    <li className="cart-item">
      <div className="cart-item-header">{item.name}</div>
      <div className="cart-item-menu">
        <input
          type="number"
          value={count}
        />
        <button
          className="cart-item-button"
        >
          +
        </button>
        <button
          className="cart-item-button"
        >
          -
        </button>
        <button
          className="cart-item-button"
        >
          Remove
        </button>
      </div>
    </li>
  );
}

export default CartItem;
