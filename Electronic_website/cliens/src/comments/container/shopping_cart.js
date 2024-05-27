/* eslint-disable array-callback-return */
/* eslint-disable no-const-assign */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-d;isable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom";
import shape from "../images/offcanvas-shape-1.webp";
import "../container/nabar.scss";
import { useContext, useEffect, useState } from "react";
import { ProducContect } from "../../Context/privecontext";
import { VND } from "../FormatCode/VND";
export const Shopping_cart = () => {
	const { cart_product, handleDeleteshopping } = useContext(ProducContect);
	const [total, settotal] = useState(0);
	const handleremiove = (user) => {
		handleDeleteshopping(user);
	};
	// eslint-disable-next-line react-hooks/exhaustive-deps
	useEffect(() => {
		
		if (cart_product && cart_product.length > 0) {
			let sum = 0;
			cart_product.map((item) => {
				sum = +item.price + sum;
			});
			settotal(sum);
		} else {
			settotal(0);
		}
	
	});

	const handleHome = () => {
		window.scrollTo(0, 0);
	};
	return (
		<>
			<div
				className="offcanvas offcanvas-end shopping__cart"
				tabindex="-1"
				id="offcanvasRight1"
				aria-labelledby="offcanvasRightLabel">
				<div className="offcanvas-header">
					<h5 className="offcanvas-title" id="offcanvasRightLabel">
						<div className="logo">
							<a href="">Shopping</a>
							<span>Cart</span>
						</div>
					</h5>
					<button
						type="button"
						class="btn-close"
						data-bs-dismiss="offcanvas"
						aria-label="Close"></button>
				</div>
				<div className="offcanvas-img">
					<img src={shape} alt="" />
				</div>
				<div className="offcanvas-body">
					<div className="offcanvas__content">
						<div className="navbar">
							{cart_product &&
								cart_product.length > 0 &&
								cart_product.map((item, index) => {
									return (
										<>
											<div className="row mb-3" key={index}>
												<div className="col-4">
													<div className="item__row">
														<img
															src={`http://localhost:8080/image/${item.imager}`}
															alt=""
														/>
													</div>
												</div>
												<div className="col-7">
													<div className="item__content">
														<span>{item.product_name}</span>
														<div className="item_price">
															<span>{VND.format(item.price)}</span>
															<small>x{item.quantity}</small>
														</div>
													</div>
												</div>
												<div className="remove col-1">
													<span onClick={() => handleremiove(item)}>x</span>
												</div>
											</div>
										</>
									);
								})}
						</div>
					</div>
					<div className="offcanvas__btn">
						<div className="bt__view">
							<div className="total__price">
								<div className="price__content">
									<h3>Subtotal:</h3>
								</div>
								<div className="price">
									<span>{VND.format(total)}</span>
								</div>
							</div>

							<Link to="/cart" onClick={handleHome}>
								<button type="" className="View">
									View Cart
								</button>
							</Link>
							<Link to="/">
								<button
									type=""
									className="checkout"
									data-bs-dismiss="offcanvas">
									Checkout
								</button>
							</Link>
						</div>
					</div>
					<div className="offcanvas__">
						<div className="offcanvas-chill">
							<span>Follow :</span>
							<div className="item-icons">
								<div>
									<i class="fa-brands fa-facebook"></i>
								</div>
								<div>
									<i class="fa-brands fa-twitter"></i>
								</div>
								<div>
									<i class="fa-brands fa-linkedin-in"></i>
								</div>
								<div>
									<i class="fa-brands fa-youtube"></i>
								</div>
							</div>
						</div>
					</div>
					<div className="offcanvas__contact">
						<div className="offcanvas_phone">
							<span>+84 379422402</span>
							<div>
								<p>t142ayun@gmail.com</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
