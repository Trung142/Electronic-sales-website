import "../Page/product_main.scss";
import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { VND } from "../FormatCode/VND";
import { ProducContect } from "../../Context/privecontext";
export const Product_main = () => {
	const [product_Detail, setproduct_Detail] = useState([]);
	const { handleshoping } = useContext(ProducContect);

	//add cart sphopping
	const handleAddshopping = (user) => {
		//handleshoping(user);
		const item = JSON.parse(localStorage.getItem("cart_product"));
		let check = item.findIndex((item) => item.id === user.id);
		if (check && check === -1) {
			handleshoping(user);
		} else {
			toast.warning("san pham da ton tai");
		}
	};
	useEffect(() => {
		let product = JSON.parse(localStorage.getItem("product_detail"));
		if (product) {
			setproduct_Detail(product);
			localStorage.getItem("product_detail");
		}
	}, []);
	return (
		<>
			<section className="product__main">
				<div className="container">
					<div className="row">
						<div className="col-xl-7 col-lg-6 mb-3">
							<div className="product_content">
								<div className="product__main_img">
									<img
										src={`http://localhost:8080/image/${product_Detail.imager}`}
										alt=""
									/>
								</div>
								<div className="product__item">
									<nav>
										<div className="product_img">
											<button className="active_link" type="">
												<img
													src={`http://localhost:8080/image/${product_Detail.imager}`}
													alt=""
												/>
											</button>
											<button type="">
												<img
													src={`http://localhost:8080/image/${product_Detail.imager}`}
													alt=""
												/>
											</button>
											<button type="">
												<img
													src={`http://localhost:8080/image/${product_Detail.imager}`}
													alt=""
												/>
											</button>
											<button type="">
												<img
													src={`http://localhost:8080/image/${product_Detail.imager}`}
													alt=""
												/>
											</button>
										</div>
									</nav>
								</div>
							</div>
						</div>
						<div className="col-xl-5 col-lg-6">
							<div className="product__text">
								<div className="product__detail_text">
									<span>60 In Stock</span>
								</div>
								<h3>{product_Detail.product_name}</h3>
								<p>
									Shop t142ayun@gmail.com every day low prices. Free shipping on
									orders <br></br> 35.000 đ or Pickup in-store and get
								</p>
								<div className="product__price mb-3">
									<del>10000</del>
									<h3>{VND.format(product_Detail.price)}</h3>
									<span>{product_Detail.sale}</span>
								</div>
								<div className="table__quantity mb-3">
									<span>+</span>
									<div className="table__item">
										<input
											name=""
											value={
												product_Detail &&
												product_Detail.quantity
											}
										/>
									</div>

									<span>-</span>
								</div>
								<div className="product__chill_item mb-5">
									<div
										className="product__cart"
										onClick={() => handleAddshopping(product_Detail)}>
										<i class="fa-solid fa-cart-plus"></i>
										<h3>Add to Cart</h3>
									</div>
									<button className="itme_action" type="">
										<i class="fa-regular fa-heart"></i>
									</button>
								</div>
								<hr></hr>
								<div className="product__footer">
									<div className="item mb-1">
										<h3>SKU :</h3>
										<span>
											{product_Detail.product_Details &&
												product_Detail.product_Details.sku}
										</span>
									</div>
									<div className="item mb-1">
										<h3>Category :</h3>
										<span>
											{product_Detail.product_Details &&
												product_Detail.product_Details.Category}
										</span>
									</div>
									<div className="item mb-1">
										<h3>Tags :</h3>
										<span>
											{product_Detail.product_Details &&
												product_Detail.product_Details.tags.tags1}
										</span>
									</div>
									<div className="item mb-1">
										<h3>Share :</h3>
										<span>
											<div>
												<i class="fa-brands fa-facebook"></i>
											</div>
											<div>
												<i class="fa-brands fa-twitter"></i>
											</div>
											<div>
												<i class="fa-brands fa-linkedin-in"></i>
											</div>
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};
