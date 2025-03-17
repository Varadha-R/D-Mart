import { useEffect, useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Categories() {
    const [cart, setCart] = useState([]); 
    const navigate = useNavigate(); 
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState(""); 
    const [searchTerm, setSearchTerm] = useState("");
    const [priceFilter, setPriceFilter] = useState("All");
    const products = [
        { id: 1, name: "Onion", price: 60, img: "https://cdn.pixabay.com/photo/2016/05/16/22/47/onions-1397037_1280.jpg" },
        { id: 2, name: "Potato", price: 85, img: "https://cdn.pixabay.com/photo/2016/08/11/08/43/potatoes-1585060_1280.jpg" },
        { id: 3, name: "Carrot", price: 100, img: "https://cdn.pixabay.com/photo/2014/07/03/08/22/carrots-382686_1280.jpg" },
        { id: 4, name: "Tomato", price: 40, img: "https://cdn.pixabay.com/photo/2022/09/05/09/50/tomatoes-7433786_1280.jpg" },
        { id: 5, name: "Capsicum", price: 120, img: "https://cdn.pixabay.com/photo/2024/07/08/02/17/capsicum-8879943_1280.jpg" },
        { id: 6, name: "Beetroot", price: 100, img: "https://cdn.pixabay.com/photo/2015/03/24/08/52/beetroot-687251_1280.jpg" },
        { id: 7, name: "Cabbage", price: 90, img: "https://cdn.pixabay.com/photo/2018/10/03/22/08/kohl-3722517_1280.jpg" },
        { id: 8, name: "Beans", price: 70, img: "https://cdn.pixabay.com/photo/2018/09/25/20/09/bush-beans-3702999_1280.jpg" },
        { id: 9, name: "Ginger", price: 50, img: "https://cdn.pixabay.com/photo/2016/10/04/12/28/ginger-1714196_1280.jpg" },
        { id: 10, name: "Cucumber", price: 75, img: "https://cdn.pixabay.com/photo/2015/07/15/09/52/cucumber-845953_1280.jpg" },
        { id: 11, name: "Cauliflower", price: 80, img: "https://cdn.pixabay.com/photo/2020/09/02/15/29/cauliflower-5538616_1280.jpg" },
        { id: 12, name: "Garlic", price: 70, img: "https://cdn.pixabay.com/photo/2017/11/28/16/38/garlic-2984093_1280.jpg" }
    ]
    useEffect(() => {
    
        const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
        setCart(savedCart);
    }, []);

    const addToCart = (product) => {
        let updatedCart = [...cart];

        const existingProduct = updatedCart.find((item) => item.id === product.id);
        if (existingProduct) {
            existingProduct.quantity += 1; 
        } else {
            updatedCart.push({ ...product, quantity: 1 }); 
        }

        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        setToastMessage(`${product.name} added to cart!`);
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000);
    };
    const filteredProducts = products.filter((product) => {
        const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesPrice =
            priceFilter === "All" ||
            (priceFilter === "Below 80" && product.price < 80) ||
            (priceFilter === "80-100" && product.price >= 80 && product.price <= 100) ||
            (priceFilter === "Above 100" && product.price > 100);

        return matchesSearch && matchesPrice;
    });

    return (
        <>
            <h2 className="Quick">VEGETABLES</h2>
            <input
                type="text"
                placeholder="Search Vegetables..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-box"/>
                 <select value={priceFilter} onChange={(e) => setPriceFilter(e.target.value)} className="filter-dropdown">
                <option value="All">All Prices</option>
                <option value="Below 80">Below Rs. 80</option>
                <option value="80-100">Rs. 80 - Rs. 100</option>
                <option value="Above 100">Above Rs. 100</option>
            </select>
            <div className="products">
                {filteredProducts.map((product) => (
                    <div key={product.id} className="product">
                        <h3>{product.name}</h3>
                        <h3>Rs - {product.price}</h3>
                        <img src={product.img} width={200} height={200} alt={product.name} />
                        <br />
                        <button className="Btn-cart" onClick={() => addToCart(product)}> Add to Cart</button>
                    </div>
                ))}
            </div>

            <button onClick={() => navigate("/cart-page")} className="go-to-cart">Go to Cart</button>

            <div className="position-fixed bottom-0 end-0 p-3" style={{ zIndex: 1050 }}>
                <div
                    className={`toast align-items-center text-white bg-success border-0 ${showToast ? "show" : "hide"}`}
                    role="alert">
                    <div className="d-flex">
                        <div className="toast-body">{toastMessage}</div>
                        <button
                            type="button"
                            className="btn-close btn-close-white me-2 m-auto"
                            onClick={() => setShowToast(false)}
                        ></button>
                    </div>
                </div>
            </div>

            <div className="Footer">
                <p className="Footer-content">Sitemap</p>
                <p className="Footer-content">Privacy policy</p>
                <p className="Footer-content">Terms of Use</p>
                <p className="Footer-content">Investor Relations</p>
            </div>
        </>
    );
}