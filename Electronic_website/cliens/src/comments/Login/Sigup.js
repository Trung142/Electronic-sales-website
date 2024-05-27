import "../Login/login.scss";
import { Footer } from "../container/footer";
import { Navbar } from "../container/nabar";
import { CreatUser } from "./CreatUser";
export const SigUp = () => {
	return (
		<>
			<Navbar />
			<CreatUser />
			<Footer />
		</>
	);
};
