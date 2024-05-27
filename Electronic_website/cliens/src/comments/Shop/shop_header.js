import { Link } from "react-router-dom";
import "../Shop/shop_header.scss";
export const Shop_header = () => {
	return (
		<>
			<section className="shop__header" id="nabar">
				<div className="container">
					<div className="row">
						<div className="col-xxl-7">
							<div className="shop__icon">
								<div className="shop_list">
									<span>
										<Link to="/">
											<i class="fa-solid fa-house"></i>
										</Link>
									</span>
									<span>
										<Link to="/">Home</Link>
									</span>
									<span>
										<Link>
											<i class="fa-solid fa-chevron-right"></i>
										</Link>
									</span>
									<span>
										<Link to="/shop">Product</Link>
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
