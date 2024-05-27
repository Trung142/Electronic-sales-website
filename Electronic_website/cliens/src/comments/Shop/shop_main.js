/* eslint-disable react/jsx-pascal-case */
import { Link } from "react-router-dom";
import "../Shop/shop_main.scss";
import { useState } from "react";
import { Product_sort } from "./product_sort";
import { Product_Detail } from "./product_detail";
export const Shop_main = () => {
	const [active, setactive] = useState("");
	const [active1, setactive1] = useState("");
	const handleActive = () => {
		setactive("active");
		setactive1("");
	};
	const handleActive1 = () => {
		setactive1("active");
		setactive("");
	};
	return (
		<>
			<section className="shop__area_main">
				<div className="container">
					<div className="row d-md-flex mb-5 shop__row">
						<div className="col-lg-6 col-md-5 mb-4 mb-md-0">
							<div className="item_sort">
								<span>Showing 1-9 of 27 results</span>
							</div>
						</div>
						<div className="col-lg-6 col-md-7">
							<div className="list__sort d-flex justify-content-md-end">
								<div className="left_sort__item">
									<span onClick={handleActive}>
										<i className={`fa-solid fa-border-all ${active}`}></i>
									</span>
									<span onClick={handleActive1}>
										<i className={`fa-solid fa-bars ${active1}`}></i>
									</span>
								</div>
								<div className="dropdown open">
									<Link
										id="triggerId"
										data-bs-toggle="dropdown"
										aria-haspopup="true"
										aria-expanded="false">
										<span>
											Short Fitering <i class="fa-solid fa-chevron-up"></i>
										</span>
									</Link>
									<div className="dropdown-menu" aria-labelledby="triggerId">
										<Link className="dropdown-item">
											<span>Short Fitering</span>
										</Link>
										<Link className="dropdown-item ">
											<span>Latest Product</span>
										</Link>
										<Link className="dropdown-item">
											<span>Price low to high</span>
										</Link>
										<Link className="dropdown-item ">
											<span>Price high to low</span>
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="shop__main">
						<div className="row">
							<div className="col-lg-3">
								<div className="shop__slidebar">
									<div className="shop__swipper1">
										<div
											class="accordion accordion-flush"
											id="accordionFlushExample">
											<div class="accordion-item">
												<h2 class="accordion-header" id="flush-headingOne">
													<button
														class="accordion-button collapsed"
														type="button"
														data-bs-toggle="collapse"
														data-bs-target="#flush-collapseOne1"
														aria-expanded="true"
														aria-controls="flush-collapseOne">
														Ipad Phone & Tablets
													</button>
												</h2>
												<div
													id="flush-collapseOne1"
													class="accordion-collapse collapse"
													aria-labelledby="flush-headingOne"
													data-bs-parent="#accordionFlushExample">
													<div class="accordion-body">
														<ul>
															<li>Phone</li>
															<li>Tablet</li>
															<li>Ipad</li>
														</ul>
													</div>
												</div>
											</div>
										</div>
										<div
											class="accordion accordion-flush"
											id="accordionFlushExample2">
											<div class="accordion-item">
												<h2 class="accordion-header" id="flush-headingOne2">
													<button
														class="accordion-button collapsed"
														type="button"
														data-bs-toggle="collapse"
														data-bs-target="#flush-collapseOne2"
														aria-expanded="true"
														aria-controls="flush-collapseOne">
														Planer & Virtual
													</button>
												</h2>
												<div
													id="flush-collapseOne2"
													class="accordion-collapse collapse"
													aria-labelledby="flush-headingOne2"
													data-bs-parent="#accordionFlushExample2">
													<div class="accordion-body">
														<ul>
															<li>Planer</li>
															<li>Virtual</li>
														</ul>
													</div>
												</div>
											</div>
										</div>
										<div
											class="accordion accordion-flush"
											id="accordionFlushExample">
											<div class="accordion-item">
												<h2 class="accordion-header" id="flush-headingOne3">
													<button
														class="accordion-button collapsed"
														type="button"
														data-bs-toggle="collapse"
														data-bs-target="#flush-collapseOne3"
														aria-expanded="true"
														aria-controls="flush-collapseOne">
														Wireless & Watches
													</button>
												</h2>
												<div
													id="flush-collapseOne3"
													class="accordion-collapse collapse"
													aria-labelledby="flush-headingOne"
													data-bs-parent="#accordionFlushExample">
													<div class="accordion-body">
														<ul>
															<li>Wireless</li>
															<li>Watch</li>
														</ul>
													</div>
												</div>
											</div>
										</div>
										<div
											class="accordion accordion-flush"
											id="accordionFlushExample">
											<div class="accordion-item">
												<h2 class="accordion-header" id="flush-headingOne">
													<button
														class="accordion-button collapsed"
														type="button"
														data-bs-toggle="collapse"
														data-bs-target="#flush-collapseOne4"
														aria-expanded="true"
														aria-controls="flush-collapseOne">
														Computers Monitor & Laptop
													</button>
												</h2>
												<div
													id="flush-collapseOne4"
													class="accordion-collapse collapse"
													aria-labelledby="flush-headingOne"
													data-bs-parent="#accordionFlushExample">
													<div class="accordion-body">
														<ul>
															<li>Computer</li>
															<li>Laptop</li>
															<li>Monitor</li>
														</ul>
													</div>
												</div>
											</div>
										</div>
										<div
											class="accordion accordion-flush"
											id="accordionFlushExample">
											<div class="accordion-item">
												<h2 class="accordion-header" id="flush-headingOne">
													<button
														class="accordion-button collapsed"
														type="button"
														data-bs-toggle="collapse"
														data-bs-target="#flush-collapseOne5"
														aria-expanded="true"
														aria-controls="flush-collapseOne">
														Exercise Bike & Shaver Clean
													</button>
												</h2>
												<div
													id="flush-collapseOne5"
													class="accordion-collapse collapse"
													aria-labelledby="flush-headingOne"
													data-bs-parent="#accordionFlushExample">
													<div class="accordion-body">
														<ul>
															<li>Exercise-Bike</li>
															<li>Shaver-Clean</li>
														</ul>
													</div>
												</div>
											</div>
										</div>
										<div
											class="accordion accordion-flush"
											id="accordionFlushExample">
											<div class="accordion-item">
												<h2 class="accordion-header" id="flush-headingOne">
													<button
														class="accordion-button collapsed"
														type="button"
														data-bs-toggle="collapse"
														data-bs-target="#flush-collapseOne6"
														aria-expanded="true"
														aria-controls="flush-collapseOne">
														Spinning Reel & Kettle
													</button>
												</h2>
												<div
													id="flush-collapseOne6"
													class="accordion-collapse collapse"
													aria-labelledby="flush-headingOne"
													data-bs-parent="#accordionFlushExample">
													<div class="accordion-body">
														<ul>
															<li>Spinning-Reel</li>
															<li>Kettle</li>
														</ul>
													</div>
												</div>
											</div>
										</div>
										<div
											class="accordion accordion-flush"
											id="accordionFlushExample">
											<div class="accordion-item">
												<h2 class="accordion-header" id="flush-headingOne">
													<button
														class="accordion-button collapsed"
														type="button"
														data-bs-toggle="collapse"
														data-bs-target="#flush-collapseOne7"
														aria-expanded="true"
														aria-controls="flush-collapseOne">
														Camera Bluetooth & Headset
													</button>
												</h2>
												<div
													id="flush-collapseOne7"
													class="accordion-collapse collapse"
													aria-labelledby="flush-headingOne"
													data-bs-parent="#accordionFlushExample">
													<div class="accordion-body">
														<ul>
															<li>Camera</li>
															<li>Bluetooth</li>
															<li>Headset</li>
														</ul>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="shop__swipper">
										<div
											class="accordion accordion-flush"
											id="accordionFlushExample">
											<div class="accordion-item">
												<h2 class="accordion-header" id="flush-headingOne">
													<button
														class="accordion-button collapsed"
														type="button"
														data-bs-toggle="collapse"
														data-bs-target="#flush1-collapseOne"
														aria-expanded="true"
														aria-controls="flush-collapseOne">
														Ipad Phone & Tablets
													</button>
												</h2>
												<div
													id="flush1-collapseOne"
													class="accordion-collapse collapse"
													aria-labelledby="flush-headingOne"
													data-bs-parent="#accordionFlushExample">
													<div class="accordion-body">
														<ul>
															<li>Phone</li>
															<li>Tablet</li>
															<li>Ipad</li>
														</ul>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="shop__swipper">
										<div
											class="accordion accordion-flush"
											id="accordionFlushExample">
											<div class="accordion-item">
												<h2 class="accordion-header" id="flush-headingOne">
													<button
														class="accordion-button collapsed"
														type="button"
														data-bs-toggle="collapse"
														data-bs-target="#flush2-collapseOne"
														aria-expanded="true"
														aria-controls="flush-collapseOne">
														Ipad Phone & Tablets
													</button>
												</h2>
												<div
													id="flush2-collapseOne"
													class="accordion-collapse collapse"
													aria-labelledby="flush-headingOne"
													data-bs-parent="#accordionFlushExample">
													<div class="accordion-body">
														<ul>
															<li>Phone</li>
															<li>Tablet</li>
															<li>Ipad</li>
														</ul>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="shop__swipper">
										<div
											class="accordion accordion-flush"
											id="accordionFlushExample">
											<div class="accordion-item">
												<h2 class="accordion-header" id="flush-headingOne">
													<button
														class="accordion-button collapsed"
														type="button"
														data-bs-toggle="collapse"
														data-bs-target="#flush3-collapseOne"
														aria-expanded="true"
														aria-controls="flush-collapseOne">
														Ipad Phone & Tablets
													</button>
												</h2>
												<div
													id="flush3-collapseOne"
													class="accordion-collapse collapse"
													aria-labelledby="flush-headingOne"
													data-bs-parent="#accordionFlushExample">
													<div class="accordion-body">
														<ul>
															<li>Phone</li>
															<li>Tablet</li>
															<li>Ipad</li>
														</ul>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="shop__swipper2">
										<div className="swipper__item">
											<button type="">Reset Filter</button>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-9 order-first order-lg-last ">
								<div className="product__popular_swiper">
									<div className="container">
										{active1 && active1 === "active" ? (
											<Product_sort />
										) : (
											<Product_Detail />
										)}
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
