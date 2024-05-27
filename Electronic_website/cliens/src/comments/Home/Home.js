/* eslint-disable react/jsx-pascal-case */
import { Banner_area } from "../container/banner_area";
import { Cat_area } from "../container/cat_area";
import { Featerest_area } from "../container/featerst_area";
import { Footer } from "../container/footer";
import { Navbar } from "../container/nabar";
import { Product_cart } from "../container/product_cart";
import { Product_offer } from "../container/product_offer";
import { Product_popular } from "../container/product_popular";
import { Slider } from "../container/slider_area";
export const Home = () => {
	return (
		<>
			<Navbar />
			<Slider id="nabar" />
			<Product_cart />
			<Product_popular />
			<Product_offer />
			<Banner_area />
			<Featerest_area />
			<Cat_area />
			<Footer />
		</>
	);
};
