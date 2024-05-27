/* eslint-disable react/jsx-pascal-case */
/* eslint-disable jsx-a11y/iframe-has-title */
import { Cat_area } from "../container/cat_area";
import { Footer } from "../container/footer";
import { Navbar } from "../container/nabar";
export const Contact = () => {

	return (
		<>
			<Navbar />
			<div style={{ border: "none", paddingTop: "100px" }} id="contact">
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.13094945935!2d106.64587547363546!3d10.801281258737657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175298ac0ea83bb%3A0x88ac2cf591238e01!2zQ2FvIMSQ4bqzbmcgQ8O0bmcgVGjGsMahbmcgVmnhu4d0IE5hbSAtIEjhu41jIFZp4buHbiBDYXRpZWR1!5e0!3m2!1sen!2s!4v1714814658823!5m2!1sen!2s"
					width="600"
					height="450"
					style={{ border: "0" }}
					allowfullscreen=""
					loading="lazy"
					referrerpolicy="no-referrer-when-downgrade"></iframe>
			</div>
			<Cat_area />
			<Footer />
		</>
	);
};
