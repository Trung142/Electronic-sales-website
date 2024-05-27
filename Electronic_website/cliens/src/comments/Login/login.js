import "../Login/login.scss";
import { Footer } from "../container/footer";
import { Navbar } from "../container/nabar";
import { LoginUser } from "./loginUse";
export const Sign_in = () => {
	return (
		<>
			<Navbar />
			<LoginUser />
			<Footer />
		</>
	);
};
