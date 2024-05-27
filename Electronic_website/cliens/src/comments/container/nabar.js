/* eslint-disable react/jsx-pascal-case */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link, useNavigate } from "react-router-dom";
import "../container/nabar.scss";
import shape from "../images/offcanvas-shape-1.webp";
import { Shopping_cart } from "./shopping_cart";
import { useContext, useState } from "react";
import { ProducContect } from "../../Context/privecontext";
import { toast } from "react-toastify";
import ScrollToTop from "react-scroll-to-top";
import Upload_Avata from "../admin/upload_avata";

export const Navbar = () => {
	const [show, setshow] = useState(false);
	const { cart_product, logoutContext, user, avata, setavata } =
		useContext(ProducContect);
	const navigate = useNavigate();
	const handleClose = () => {
		setshow(false);
	};
	const handleLogout = () => {
		logoutContext();
		toast.success("logout success !");
		navigate("/sign_up");
	};
	const handleImage = (event) => {
		setavata(event);
	};
	const handleHome = () => {
		window.scrollTo(0, 0);
	};
	return (
		<>
			<header>
				<div className="container-fluid">
					<div className="row">
						<div className="col-xxl-1 col-xl-2 col-lg-4 col-md-4 col-sm-5 col-8 left-header">
							<div className="logo">
								<a href="">Trung</a>
								<span>Shop</span>
							</div>
						</div>
						<div className="col-xxl-6 col-xl-7 d-none d-xl-block conten-header">
							<div className="main-menu">
								<div className="mobile-menu-3">
									<div className="navbar">
										<ul className="navbar-conten">
											<li onClick={handleHome} className="item">
												<Link to="/">Home</Link>
											</li>
											<li onClick={handleHome} className="item">
												<Link to="/about">About Us</Link>
											</li>
											<li onClick={handleHome} className="item">
												<Link to="/shop">Shop</Link>
											</li>
											<li className="item active">
												<Link to="/about">Pages</Link>
												<ul className="submenu">
													<li onClick={handleHome} className="sub-item">
														<Link href="/">Pages</Link>
													</li>
													<li onClick={handleHome} className="sub-item">
														<Link to="/shop">Product</Link>
													</li>
													<li onClick={handleHome} className="sub-item">
														<Link to="/">Setting</Link>
													</li>
													<li onClick={handleHome} className="sub-item">
														<Link to="/login">Login</Link>
													</li>
													<li onClick={handleHome} className="sub-item">
														<Link to="/cart">My Cart</Link>
													</li>
													<li onClick={handleHome} className="sub-item">
														<Link to="/">you user</Link>
													</li>
												</ul>
											</li>
											<li onClick={handleHome} className="item">
												<Link to="/contact#">Contact us</Link>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
						<div className="col-xxl-5 col-xl-3 col-lg-8 col-md-8 col-sm-7 col-4 rigth-header">
							<div className="header__bottom-right-13 d-flex justify-content-end align-items-center pl-30"></div>
							<div className="header__search-13 d-none d-md-block">
								<ul className="header-content">
									<li className="item">
										<Link to="/sign_up">
											<i className="fa-solid fa-magnifying-glass"></i>
										</Link>
									</li>
									{user && user.uath === true ? (
										<li className="item">
											<div className="avata">
												{avata && avata.image ? (
													<div
														className="d-flex justify-content-center align-items-center"
														style={{
															width: "45px",
															height: "45px",
															borderRadius: "50%",
															border: "1px solid #e2e2e2",
															position: "relative",
														}}>
														<label
															onClick={() => setshow(true)}
															style={{
																position: "absolute",
																top: "-7px",
																right: "-10px",
																cursor: "pointer",
															}}>
															<small>
																<i
																	style={{ fontSize: "15px" }}
																	class="fa-regular fa-pen-to-square"></i>
															</small>
														</label>
														<img
															style={{
																height: "100%",
																width: "100%",
																borderRadius: "50%",
																border: "1px solid #e2e2e2",
															}}
															src={`http://localhost:8080/image/${avata.image}`}
															alt=""
														/>
													</div>
												) : (
													<>
														<div
															className="d-flex justify-content-center align-items-center"
															style={{
																width: "45px",
																height: "45px",
																borderRadius: "50%",
																border: "1px solid #e2e2e2",
																position: "relative",
															}}>
															<label
																onClick={() => setshow(true)}
																style={{
																	position: "absolute",
																	top: "-7px",
																	right: "-5px",
																	cursor: "pointer",
																}}>
																<small>
																	<i
																		style={{ fontSize: "15px" }}
																		class="fa-regular fa-pen-to-square"></i>
																</small>
															</label>
															<label>
																<i className="fa-solid fa-user-ninja"></i>
															</label>
														</div>
													</>
												)}
											</div>
											<div className="log" onClick={handleLogout}>
												<Link>log out</Link>
											</div>
										</li>
									) : (
										<li className="item">
											<div className="avata">
												<label>
													<i className="fa-solid fa-user-ninja"></i>
												</label>
											</div>
											<div className="log">
												<Link to="/login">Log in</Link>
											</div>
										</li>
									)}

									<li className="item">
										<Link href="" className="cart_chill">
											<i className="fa-regular fa-heart "></i>
											<small>1</small>
										</Link>
									</li>
									<li
										className="item"
										data-bs-toggle="offcanvas"
										data-bs-target="#offcanvasRight1"
										aria-controls="offcanvasRight">
										<Link className="cart_chill">
											<i className="fa-solid fa-cart-arrow-down "></i>
											<small>{cart_product.length}</small>
										</Link>
									</li>
									{(user && user.uath === true && user.Role === "R1") ||
									user.Role === "R2" ? (
										<li className="item">
											<Link to="/admin">--=Admin</Link>
										</li>
									) : null}
								</ul>
								{user && user.uath === true && (
									<div
										style={{
											textAlign: "center",
											position: "absolute",
											left: "86px",
											bottom: "-15px",
											
										}}>
										<small style={{ fontSize: "13px", color: "#f50963" }}>
											{user.name}
										</small>
									</div>
								)}
							</div>
							<div className="header__action-13 d-block d-xl-none">
								<div
									className="bar"
									data-bs-toggle="offcanvas"
									data-bs-target="#offcanvasRight"
									aria-controls="offcanvasRight">
									<i className="fa-solid fa-bars"></i>
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>
			<Shopping_cart />
			{/* mobile */}
			<div
				className="offcanvas offcanvas-end"
				tabindex="-1"
				id="offcanvasRight"
				aria-labelledby="offcanvasRightLabel">
				<div className="offcanvas-header">
					<h5 className="offcanvas-title" id="offcanvasRightLabel">
						<div className="logo">
							<a href="">Trung</a>
							<span>Shop</span>
						</div>
						{user && user.uath === true && (
							<div className="d-flex align-items-center">
								<div className="avata">
									{avata && avata.image ? (
										<div
											className="d-flex justify-content-center align-items-center"
											style={{
												width: "45px",
												height: "45px",
												borderRadius: "50%",
												border: "1px solid #e2e2e2",
												position: "relative",
											}}>
											<label
												onClick={() => setshow(true)}
												style={{
													position: "absolute",
													top: "-7px",
													right: "-10px",
													cursor: "pointer",
												}}>
												<small>
													<i class="fa-regular fa-pen-to-square"></i>
												</small>
											</label>
											<img
												style={{
													height: "100%",
													width: "100%",
													borderRadius: "50%",
													border: "1px solid #e2e2e2",
												}}
												src={`http://localhost:8080/image/${avata.image}`}
												alt=""
											/>
										</div>
									) : (
										<>
											<div
												className="d-flex justify-content-center align-items-center"
												style={{
													width: "45px",
													height: "45px",
													borderRadius: "50%",
													border: "1px solid #e2e2e2",
													position: "relative",
												}}>
												<label
													onClick={() => setshow(true)}
													style={{
														position: "absolute",
														top: "-7px",
														right: "-5px",
														cursor: "pointer",
													}}>
													<small>
														<i
															style={{ fontSize: "15px" }}
															class="fa-regular fa-pen-to-square"></i>
													</small>
												</label>
												<label>
													<i className="fa-solid fa-user-ninja"></i>
												</label>
											</div>
										</>
									)}
								</div>
								<small> : {user.name}</small>
							</div>
						)}
					</h5>
					{(user && user.uath === true && user.Role === "R1") ||
					user.Role === "R2" ? (
						<li className="item" style={{ listStyle: "none" }}>
							<Link to="/admin" style={{ textDecoration: "none" }}>
								--=Admin
							</Link>
						</li>
					) : null}
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
							<ul className="navbar-conten">
								<li onClick={handleHome} className="item">
									<Link to="/" href={"/#"}>
										Home
									</Link>
								</li>
								<li onClick={handleHome} className="item">
									<Link to="/about">About Us</Link>
								</li>
								<li onClick={handleHome} className="item">
									<Link to="/shop">Shop</Link>
								</li>
								<li onClick={handleHome} className="item active">
									<Link to="/about">Pages</Link>
									<ul className="submenu">
										<li onClick={handleHome} className="sub-item">
											<Link to="/about" href="#">
												Pages
											</Link>
										</li>
										<li onClick={handleHome} className="sub-item">
											<Link to="/shop">Product</Link>
										</li>
										<li onClick={handleHome} className="sub-item">
											<Link to="/">Setting</Link>
										</li>
										<li onClick={handleHome} className="sub-item">
											<Link to="/login">Login</Link>
										</li>
										<li onClick={handleHome} className="sub-item">
											<Link to="/cart">My Cart</Link>
										</li>
										<li onClick={handleHome} className="sub-item">
											<Link to="/">you user</Link>
										</li>
									</ul>
								</li>
								<li onClick={handleHome} className="item">
									<Link to="/contact">Contact us</Link>
								</li>
							</ul>
						</div>
					</div>
					<div className="offcanvas__btn">
						<button type="" className="btn__getting">
							<a href="">Getting Started</a>
						</button>
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
			<ScrollToTop smooth />
			<Upload_Avata
				show={show}
				handleClose={handleClose}
				handleImage={handleImage}
			/>
		</>
	);
};
