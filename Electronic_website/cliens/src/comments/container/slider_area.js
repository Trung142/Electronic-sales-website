import slide1 from "../images/slider-1.webp";
import "../container/slider.scss";
export const Slider = () => {
	return (
		<>
			<section id="nabar">
				<div className="swiper-slider">
					<div className="swiper__slider2">
						<div className="container">
							<div className="swiper__slider-1 row">
								<div className="col-xl-6 col-lg-6">
									<div className="slider__content-13">
										<span className="slider__title-pre-13">
											Best Ear <br></br> Headphones
										</span>
										<h3 className="slider__title-13">
											Music To <br></br>Fill Your Heart
										</h3>
										<div className="slider__btn ">
											<button className="tp-btn-border" href="/shop">
												Shop Now
											</button>
										</div>
									</div>
								</div>
								<div className="col-xl-6 col-lg-6">
									<div className="fa__sliders text-end mr-4">
										<img src={slide1} alt="" decoding="async" data-nimg="1" />
										<span className="slider-crice1"></span>
										<span className="slider-crice2"></span>
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
