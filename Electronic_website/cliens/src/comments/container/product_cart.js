import "../container/product_cart.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Scrollbar, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import product1 from "../images/product-cat-1.webp";
import product2 from "../images/product-cat-2.webp";
import product3 from "../images/product-cat-3.webp";
import product4 from "../images/product-cat-4.webp";
import product5 from "../images/product-cat-5.webp";
import product6 from "../images/product-cat-6.webp";
import product7 from "../images/product-cat-7.webp";
import { Link, useNavigate } from "react-router-dom";
// Import Swiper React components
export const Product_cart = () => {
	const navipage = useNavigate();
	const handleshop = () => {
		navipage("/shop");
	};
	return (
		<>
			<section className="product_cart">
				<div className="container">
					<div className="row">
						<div className="col-xxl-12 col-12">
							<div className="product_cart_slider">
								<Swiper
									slidesPerView={1}
									breakpoints={{
										576: {
											slidesPerView: 2,
											spaceBetween: 20,
										},
										992: {
											slidesPerView: 3,
											spaceBetween: 30,
										},
										1196: {
											slidesPerView: 4,
											spaceBetween: 30,
										},
									}}
									navigation={true}
									scrollbar={{
										hide: true,
									}}
									modules={[Scrollbar, Navigation, Pagination]}
									className="mySwiper">
									<SwiperSlide>
										<div className="product__cart_slider" onClick={handleshop}>
											<div className="product__mgs">
												<img src={product1} alt="" />
											</div>
											<div className="product__content">
												<h3>
													<Link to="/product">Iphone</Link>
												</h3>
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="product__cart_slider" onClick={handleshop}>
											<div className="product__mgs">
												<img src={product2} alt="" />
											</div>
											<div className="product__content">
												<h3>
													<Link to="/product">Iphone</Link>
												</h3>
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="product__cart_slider" onClick={handleshop}>
											<div className="product__mgs">
												<img src={product3} alt="" />
											</div>
											<div className="product__content">
												<h3>
													<Link to="/product">Iphone</Link>
												</h3>
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="product__cart_slider" onClick={handleshop}>
											<div className="product__mgs">
												<img src={product4} alt="" />
											</div>
											<div className="product__content">
												<h3>
													<Link to="/product">Iphone</Link>
												</h3>
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="product__cart_slider" onClick={handleshop}>
											<div className="product__mgs">
												<img src={product5} alt="" />
											</div>
											<div className="product__content">
												<h3>
													<Link to="/product">Iphone</Link>
												</h3>
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="product__cart_slider" onClick={handleshop}>
											<div className="product__mgs">
												<img src={product6} alt="" />
											</div>
											<div className="product__content">
												<h3>
													<Link to="/product">Iphone</Link>
												</h3>
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="product__cart_slider" onClick={handleshop}>
											<div className="product__mgs">
												<img src={product1} alt="" />
											</div>
											<div className="product__content">
												<h3>
													<Link to="/product">Iphone</Link>
												</h3>
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="product__cart_slider" onClick={handleshop}>
											<div className="product__mgs">
												<img src={product7} alt="" />
											</div>
											<div className="product__content">
												<h3>
													<Link to="/product">Iphone</Link>
												</h3>
											</div>
										</div>
									</SwiperSlide>
								</Swiper>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};
