import "../container/product_offer.scss";
import product1 from "../images/product-cat-7.webp";
import product2 from "../images/product-cat-3.webp";
import product3 from "../images/product-cat-1.webp";
import product4 from "../images/product-cat-2.webp";
export const Product_offer = () => {
	return (
		<>
			<section className="product_offer">
				<div className="container">
					<div className="row">
						<div className="col-xl-6 col-lg-6 col-md-6 mb-3">
							<div className="product__name">
								<span></span>
								<h3>Deal of The Day</h3>
							</div>
						</div>
						<div className="col-xl-6 col-lg-6 col-md-6 mb-3">
							<div className="product_tap d-md-flex justify-content-end">
								<button type="">View All Products</button>
							</div>
						</div>
					</div>
					<div className="product__offer_content">
						<div className="container">
							<div className="row">
								<div className="col-xl-6">
									<div className="offer__item">
										<div className="offer__rigth">
											<div className="offer__img">
												<img src={product1} alt="" />
											</div>
											<div className="content">
												<h3>August Gift Voucher</h3>
												<span>
													10% <b>Off</b>
												</span>
												<div className="product__countdown" data-countdown>
													<div className="product__inner">
														<ul>
															<li>
																<span data-days>133</span>
																Day
															</li>
															<li>
																<span data-hours>22</span>
																Hrs
															</li>
															<li>
																<span data-minutes>12</span>
																Min
															</li>
															<li>
																<span data-seconds>2</span>
																Sec
															</li>
														</ul>
													</div>
												</div>
											</div>
										</div>
										<div className="offer__left">
											<div className="offer__text">
												<span>
													Coupon <small>Active</small>
												</span>
												<i className="fa-solid fa-circle-info"></i>
											</div>
											<div className="offer__end">
												<button type="">AUGUST23</button>
											</div>
										</div>
									</div>
								</div>
								<div className="col-xl-6">
									<div className="offer__item">
										<div className="offer__rigth">
											<div className="offer__img">
												<img src={product2} alt="" />
											</div>
											<div className="content">
												<h3>Winter Gift Voucher</h3>
												<span>
													15% <b>Off</b>
												</span>
												<div className="product__countdown" data-countdown>
													<div className="product__inner">
														<ul>
															<li>
																<span data-days>163</span>
																Day
															</li>
															<li>
																<span data-hours>22</span>
																Hrs
															</li>
															<li>
																<span data-minutes>12</span>
																Min
															</li>
															<li>
																<span data-seconds>2</span>
																Sec
															</li>
														</ul>
													</div>
												</div>
											</div>
										</div>
										<div className="offer__left">
											<div className="offer__text">
												<span>
													Coupon <small>Active</small>
												</span>
												<i className="fa-solid fa-circle-info"></i>
											</div>
											<div className="offer__end">
												<button type="">WINTER23</button>
											</div>
										</div>
									</div>
								</div>
								<div className="col-xl-6">
									<div className="offer__item">
										<div className="offer__rigth">
											<div className="offer__img">
												<img src={product3} alt="" />
											</div>
											<div className="content">
												<h3>August Gift Voucher</h3>
												<span>
													10% <b>Off</b>
												</span>
												<div className="product__countdown" data-countdown>
													<div className="product__inner">
														<ul>
															<li>
																<span data-days>133</span>
																Day
															</li>
															<li>
																<span data-hours>22</span>
																Hrs
															</li>
															<li>
																<span data-minutes>12</span>
																Min
															</li>
															<li>
																<span data-seconds>2</span>
																Sec
															</li>
														</ul>
													</div>
												</div>
											</div>
										</div>
										<div className="offer__left">
											<div className="offer__text">
												<span>
													Coupon <small>Active</small>
												</span>
												<i className="fa-solid fa-circle-info"></i>
											</div>
											<div className="offer__end">
												<button type="">AUGUST23</button>
											</div>
										</div>
									</div>
								</div>
								<div className="col-xl-6">
									<div className="offer__item">
										<div className="offer__rigth">
											<div className="offer__img">
												<img src={product4} alt="" />
											</div>
											<div className="content">
												<h3>January Gift Voucher</h3>
												<span>
													20% <b>Off</b>
												</span>
												<div className="product__countdown" data-countdown>
													<div className="product__inner">
														<ul>
															<li>
																<span data-days>133</span>
																Day
															</li>
															<li>
																<span data-hours>22</span>
																Hrs
															</li>
															<li>
																<span data-minutes>12</span>
																Min
															</li>
															<li>
																<span data-seconds>2</span>
																Sec
															</li>
														</ul>
													</div>
												</div>
											</div>
										</div>
										<div className="offer__left">
											<div className="offer__text">
												<span>
													Coupon <small>Active</small>
												</span>
												<i className="fa-solid fa-circle-info"></i>
											</div>
											<div className="offer__end">
												<button type="">JANUARY23</button>
											</div>
										</div>
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
