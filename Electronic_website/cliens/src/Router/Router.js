/* eslint-disable react/jsx-pascal-case */
import { Routes, Route } from "react-router-dom";
import { Home } from "../comments/Home/Home";
import { About } from "../comments/About/about";
import { Contact } from "../comments/Contact/contact";
import { Shop } from "../comments/Shop/shop.js";
import { Cart } from "../comments/Carts/cart.js";
import { Product_Details } from "../comments/Page/product_detaild.js";
import { SigUp } from "../comments/Login/Sigup.js";
import { Sign_in } from "../comments/Login/login.js";
import { useContext } from "react";
import { ProducContect } from "../Context/privecontext.js";
import { NavbarAdmin } from "../comments/admin/admin.jsx";

export const Router = () => {
	const { user } = useContext(ProducContect);
	return (
		<>
			<Routes>
				<Route path="/admin" element={user && user.uath === true && user.Role === 'R1' && user.userid === '1'? <NavbarAdmin/>:<Home />} />
				<Route path="/" element={<Home />} />
				<Route path="/sign_up" element={<SigUp />} />
				<Route
					path="/login"
					element={user && user.uath === true ? <Home /> : <Sign_in />}
				/>
				<Route path="/shop" element={<Shop />} />
				<Route path="/cart" element={<Cart />} />
				<Route path="/product_detail" element={<Product_Details />} />
				<Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
		</>
	);
};
