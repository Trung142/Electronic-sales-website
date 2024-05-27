/* eslint-disable react/jsx-pascal-case */
import { Shop_header } from "../Shop/shop_header";
import { Cat_area } from "../container/cat_area";
import { Footer } from "../container/footer";
import { Navbar } from "../container/nabar";
import { Product_main } from "./product_main";

export const Product_Details = () => {
	return (
		<>
			<Navbar />
			<Shop_header />
			<Product_main />
			<Cat_area />
			<Footer />
		</>
	);
};
