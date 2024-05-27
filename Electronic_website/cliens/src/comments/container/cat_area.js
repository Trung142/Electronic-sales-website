import "../container/cat_area.scss";
export const Cat_area = () => {
	return (
		<>
			<section className="cat_area pt-5 pb-5">
				<div className="container">
					<div className="cta_inner-13">
						<div className="row">
							<div className="col-xl-6 col-lg-6">
								<div className="cta__content">
									<h3>
										Subscribe for <br></br>
										Latest Trends & Offers
									</h3>
								</div>
							</div>
							<div className="col-xl-6 col-lg-6 ">
								<div className="cta__form justify-content-end d-flex">
									<input type="email" name="email" placeholder="Emali" />
									<button type="">Subscribe</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};
