/* eslint-disable react/jsx-pascal-case */
/* eslint-disable array-callback-return */
import { useContext, useEffect, useState } from "react";
import "../Carts/cart.scss";
import { ProducContect } from "../../Context/privecontext";
import { VND } from "../FormatCode/VND";
import { useNavigate } from "react-router-dom";
import Buy_Order from "./modalorder";
export const My__cart = () => {
	const [show, setshow] = useState(false);
	const [data, setdata] = useState({});
	const {
		cart_product,
		user,
		handleDeleteshopping,
		handlequantity,
		handlequantitys__1,
	} = useContext(ProducContect);
	// eslint-disable-next-line react-hooks/exhaustive-deps
	const [total, settotal] = useState(0);
	
	const navigage = useNavigate();
	const handleClose = () => {
		setshow(false);
	}
	const handleRemove = (user) => {
		handleDeleteshopping(user);
	};
	const handlequantity_1 = (user) => {
		handlequantity(user);
	};
	const handlequantitys = (user) => {
		handlequantitys__1(user);
	};
	
	

	// the pay
	const handleMypay = (event) => {
		
		if (user && user.uath === true) {
		 	setshow(true);
			setdata(event);
		} else {
			navigage("/login");
		}

	};
	// eslint-disable-next-line react-hooks/exhaustive-deps
	useEffect(() => {
		let sum = 0;
		if (cart_product && cart_product.length > 0) {
			cart_product.map((item) => {
				return (sum = +item.price * +item.quantity + sum);
			});
			settotal(sum);
		} else {
			settotal(0);
		}
	});
	return (
		<>
			<section className="my_cart" id="nabar">
				<div className="container">
					<div className="row">
						<div className="col-xxl-8 col-xl-8 col-lg-10">
							<div className="my__cart">
								<h3>My Cart</h3>
							</div>
							<div className="chill__item">
								<span>Home</span>
								<li>
									<span>Cart</span>
								</li>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="my__cart_product">
				<div className="container">
					<div className="row">
						<div className="col-12">
								<div className="table__container">
									<div className="table__content">
										<div className="table__header">
											<div className="item_header">
												<span>Continue Shopping</span>
												<i>--.</i>
											</div>
										</div>
									</div>
									<table className="table">
										<thead>
											<tr>
												<th className="product_image">Images</th>
												<th className="Cart_product_name">Product</th>
												<th className="product_price">Price</th>
												<th className="product_subtotal">Quantity</th>
												<th className="product_remove">Remove</th>
											</tr>
										</thead>
										<tbody>
											{cart_product &&
												cart_product.length > 0 &&
												cart_product.map((item, index) => {
													return (
														<>
															<tr key={index}>
																<td>
																	<img
																		src={`http://localhost:8080/image/${item.imager}`}
																		alt=""
																	/>
																</td>
																<td>{item.product_name}</td>
																<td>{VND.format(item.price)}</td>
																<td>
																	<div className="table__quantity">
																		<span
																			onClick={() => handlequantity_1(item)}>
																			+
																		</span>
																		<div className="table__item">
																			<input name="" value={item.quantity} />
																		</div>

																		<span onClick={() => handlequantitys(item)}>
																			-
																		</span>
																	</div>
																</td>
																<td>
																	<i
																		onClick={() => handleRemove(item)}
																		className="fa-solid fa-trash-can"></i>
																</td>
															</tr>
														</>
													);
												})}
										</tbody>
									</table>
								</div>
								<div className="table__footer">
									<div className="item_footer">
										<h3>Cart Totals</h3>
										<div className="content">
											<div className="item_1">
												<span>Subtotal</span>
												<small>{VND.format(total)}</small>
											</div>
											<div className="item_1">
												<span>Total</span>
												<small>{VND.format(total)}</small>
											</div>
										</div>
										<div
											className="checkout"
											onClick={() => handleMypay(cart_product)}>
											<button>Buy Now</button>
										</div>
									</div>
								</div>
							
						</div>
					</div>
				</div>
			</section>
			<Buy_Order
				show={show}
				handleClose={handleClose}
				data={data}
				total ={total}
			/>
		</>
	);
};
