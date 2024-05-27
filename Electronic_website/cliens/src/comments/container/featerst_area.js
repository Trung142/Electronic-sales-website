import "../container/features.scss";
export const Featerest_area = () => {
	return (
		<>
			<section className="features">
				<div className="container">
					<div className="row">
						<div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
							<div className="features_item">
								<div className="item">
									<i class="fa-solid fa-truck-fast"></i>
								</div>
								<div className="features__content">
									<h3>Free Shipping</h3>
									<span>
										Free Shipping for orders <br></br> over $120
									</span>
								</div>
							</div>
						</div>
						<div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
							<div className="features_item">
								<div className="item">
									<i class="fa-solid fa-dollar-sign"></i>
								</div>
								<div className="features__content">
									<h3>Refund</h3>
									<span>
										Within 30 days for an <br></br>exchange
									</span>
								</div>
							</div>
						</div>
						<div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
							<div className="features_item">
								<div className="item">
									<i class="fa-solid fa-envelope"></i>
								</div>
								<div className="features__content">
									<h3>Support</h3>
									<span>
										24 hours a day, 7 days<br></br>a week
									</span>
								</div>
							</div>
						</div>
						<div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
							<div className="features_item">
								<div className="item">
									<i class="fa-solid fa-credit-card"></i>
								</div>
								<div className="features__content">
									<h3>Payment</h3>
									<span>
										Pay with Multiple Credit<br></br>a Cards
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};
