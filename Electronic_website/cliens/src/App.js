import { useContext, useEffect } from "react";
import { Router } from "./Router/Router";
import { ToastContainer } from "react-toastify";
import { ProducContect } from "./Context/privecontext";
function App() {
	const { loginContext } = useContext(ProducContect);
	useEffect(() => {
		if (localStorage.getItem("name") && localStorage.getItem("role")) {
			loginContext(localStorage.getItem("userid"),localStorage.getItem("name"), localStorage.getItem("role"));
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<>
			<Router />
			<ToastContainer
				position="top-center"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="light"
			/>
		</>
	);
}
export default App;
