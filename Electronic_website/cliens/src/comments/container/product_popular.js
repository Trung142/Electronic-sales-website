/* eslint-disable jsx-a11y/anchor-is-valid */
import "../container/product_popular.scss";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { ProducContect } from "../../Context/privecontext";
import { toast } from "react-toastify";
import { VND } from "../FormatCode/VND";
import { readProduct } from "../../reviceapi/axios";
export const Product_popular = () => {
	const { handleshoping } = useContext(ProducContect);
	const [Product, setProduct] = useState([]);
	const getProduct = async () => {
		let res = await readProduct();
		if (res && res.errCode === 0) {
			setProduct(res.message.User);
		} 
	};
	useEffect(() => {
		getProduct();
	}, []);
	//
	const navigate = useNavigate();
	const handleAddshopping = (user) => {
		//handleshoping(user);
		const item = JSON.parse(localStorage.getItem("cart_product"));
		if (item) {
			let check = item.findIndex((item) => item.id === user.id);
			if (check && check === -1) {
				handleshoping(user);
			} else {
				toast.warning("san pham da ton tai");
			}
		} else {
			handleshoping(user);
		}
	};
	// product detail
	const handleDetaile = (event) => {
		navigate("/product_detail");
		localStorage.setItem("product_detail", JSON.stringify(event));
		handleHome();
	};
	// const handlecart = () => {
	// 	navigate("/cart");
	// };

	const handleHome = () => {
		window.scrollTo(0, 0);
	};
	return (
		<>
			<section className="pb-2 product_popular">
				<div className="container">
					<div className="row ">
						<div className="col-xl-6 col-lg-6 col-md-6 mb-3">
							<div className="product__name">
								<span></span>
								<h3>Popular Products</h3>
							</div>
						</div>
						<div className="col-xl-6 col-lg-6 col-md-6 mb-3">
							<div className="product_tap">
								<ul className="nav justify-content-md-end">
									<li className="item-nav">
										<button type="">Top Rated</button>
									</li>
									<li className="item-nav">
										<button type="">Best Selling</button>
									</li>
									<li className="item-nav">
										<button type="">Latest Product</button>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="product__popular_swiper">
						<div className="row ">
							{Product &&
								Product.length > 0 &&
								Product.map((item, index) => {
									return (
										<div
											className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-5"
											key={{ index }}>
											<div className="product__item">
												<div className="product__thumb">
													<a onClick={() => handleDetaile(item)}>
														<img src={`http://localhost:8080/image/${item.imager}`} alt="" />
													</a>
													<div className="product_sale">
														<button className="item-1" type="">
															Sale
														</button>
														<button className="item-2" type="">
															{item.sale}
														</button>
													</div>
													<div className="product_action">
														<button className="itme_action" type="">
															<i class="fa-regular fa-heart"></i>
														</button>
														<button className="itme_action" type="">
															<i class="fa-regular fa-eye"></i>
														</button>
														<button
															onClick={() => handleDetaile(item)}
															className="itme_action"
															type="">
															<i class="fa-solid fa-link"></i>
														</button>
													</div>

													{/* <div className="product_add" onClick={handlecart}>
															<div className="product__cart">
																<i className="fa-solid fa-cart-plus"></i>
																<h3>View Cart</h3>
															</div>
														</div>
													 */}
													<div
														className="product_add"
														onClick={(event) => handleAddshopping(item)}>
														<div className="product__cart">
															<i className="fa-solid fa-cart-plus"></i>
															<h3> Add to Cart</h3>
														</div>
													</div>
												</div>
												<div className="product__content">
													<h3>{item.product_name}</h3>
													<div className="product__price">
														<div className="product__old_price">
															<del></del>
														</div>
														<div className="product__new_price">
															<span>{VND.format(item.price)}</span>
														</div>
													</div>
												</div>
											</div>
										</div>
									);
								})}
						</div>
					</div>
				</div>
			</section>
		</>
	);
};
