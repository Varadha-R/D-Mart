import React,{useState} from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
    export default function Cartpage() {
        const navigate = useNavigate();
        const [cartItems, setCartItems] = useState([]);
    
        useEffect(() => {
            const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
            setCartItems(savedCart);
        }, []);
    
        const updateCart = (updatedCart) => {
            setCartItems(updatedCart);
            localStorage.setItem("cart", JSON.stringify(updatedCart));
        };
    
        const removeFromCart = (index) => {
            const updatedCart = cartItems.filter((_, i) => i !== index);
            updateCart(updatedCart);
        };
    
        const increaseAmount = (id) => {
            const updatedCart = cartItems.map((item) =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            );
            updateCart(updatedCart);
        };
    
        const decreaseAmount = (id) => {
            const updatedCart = cartItems
                .map((item) =>
                    item.id === id ? { ...item, quantity: item.quantity - 1 } : item
                )
                .filter((item) => item.quantity > 0);
            updateCart(updatedCart);
        };
    
        const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    
        const order = () => {
            alert(`Hi, your order is placed! Total Price: ₹${totalPrice.toFixed(2)}`);
        };
    
        return (
            <>
                <h2 className="Quick">Shopping Cart</h2>
                {cartItems.length > 0 ? (
                    <ul>
                        {cartItems.map((item, index) => (
                            <li key={index} className="index-cartpage">
                                {item.name} - ₹{item.price} x {item.quantity} = ₹{item.price * item.quantity}
                                <img src={item.img}  alt={item.name} className="img-cart" />
                                <button onClick={() => decreaseAmount(item.id)} className="decrease">-</button>
                                <button onClick={() => increaseAmount(item.id)} className="increase">+</button>
                                <button className="remove" onClick={() => removeFromCart(index)}>Remove</button>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>Your Cart is empty</p>
                )}
                <button onClick={() => navigate("/Categories")} className="back-to-shopping">Back to Shopping</button>
                <h4>Total: ₹{totalPrice.toFixed(2)}</h4>
                <button onClick={order} className="btn-submit">Submit</button>
               
            </>
        );
    }