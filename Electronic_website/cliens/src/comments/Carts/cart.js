/* eslint-disable react/jsx-pascal-case */
import { Cat_area } from "../container/cat_area";
import { Footer } from "../container/footer";
import { Navbar } from "../container/nabar";
import { My__cart } from "./my-cart";
export const Cart = () => {
	return (
		<>
			<Navbar />
			<My__cart />
			<Cat_area />
			<Footer />
		</>
	);
};
