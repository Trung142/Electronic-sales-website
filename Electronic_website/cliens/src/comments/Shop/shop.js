/* eslint-disable react/jsx-pascal-case */
import { Cat_area } from "../container/cat_area";
import { Footer } from "../container/footer";
import { Navbar } from "../container/nabar";
import { Shop_header } from "./shop_header";
import { Shop_main } from "./shop_main";
export const Shop = () => {
	return (
		<>
			<Navbar />
			<Shop_header />
			<Shop_main />
			<Cat_area />
			<Footer />
		</>
	);
};
