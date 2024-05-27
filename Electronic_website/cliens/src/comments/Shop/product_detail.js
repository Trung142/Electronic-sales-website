import { useContext, useEffect, useState } from "react";
import "../Shop/product_sort.scss";
import { ProducContect } from "../../Context/privecontext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { readProduct } from "../../reviceapi/axios";
export const Product_Detail = () => {
	const { handleshoping } = useContext(ProducContect);
	const navigate = useNavigate();

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
	//add product to cart

	const handleAddshopping = (user) => {
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

	const handleDetaile = (event) => {
		navigate("/product_detail");
		localStorage.setItem("product_detail", JSON.stringify(event));
	};
	return (
		<>
			<div className="product__detail">
				<div className="row">
					{Product &&
						Product.length > 0 &&
						Product.map((item, index) => {
							return (
								<div
									className="col-xl-4 col-lg-4 col-md-6 col-sm-6 mb-5"
									key={{ index }}>
									<div className="product__item">
										<div className="product__thumb">
											<a
												href="/product_detail"
												onClick={() => handleDetaile(item)}>
												<img
													src={`http://localhost:8080/image/${item.imager}`}
													alt=""
												/>
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
													className="itme_action"
													type=""
													onClick={() => handleDetaile(item)}>
													<i class="fa-solid fa-link"></i>
												</button>
											</div>
											<div
												className="product_add"
												onClick={() => handleAddshopping(item)}>
												<div className="product__cart">
													<i class="fa-solid fa-cart-plus"></i>
													<h3>Add to Cart</h3>
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
													<span>${item.price}</span>
												</div>
											</div>
										</div>
									</div>
								</div>
							);
						})}
				</div>
			</div>
		</>
	);
};
