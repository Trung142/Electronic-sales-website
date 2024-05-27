import { toast } from "react-toastify";
import { createContext, useEffect, useState } from "react";
import { image_avata, readProduct_page} from "../reviceapi/axios";
const ProducContect = createContext({});
const ProductProvider = ({ children }) => {
	//user
	const [user, setUser] = useState({ userid:"",name: "",role:"",uath: false });
	const [avata, setavata] = useState({});
	//add to cart shopping
	const [product_Detail, setproduct_Detail] = useState([]);
	const [cart_product, setCart_product] = useState([]);
	const [product, setproduct] = useState([]);
	//pagination
	const [totalUser, settotalUser] = useState(0);
	const [total_page, settotal_page] = useState(0);

	let handleshoping = (user) => {
		setCart_product([...cart_product, user]);
		localStorage.setItem(
			"cart_product",
			JSON.stringify([...cart_product, user])
		);
		toast.success(user.product_name + " to cart Success!");
	};
	//product
	// delete to cart
	let handleDeleteshopping = (user) => {
		const item = JSON.parse(localStorage.getItem("cart_product"));
		let listData = [...item];
		listData = item.filter((item) => item.id !== user.id);
		localStorage.setItem("cart_product", JSON.stringify(listData));
		setCart_product(listData);
	};
	// quantity + 1
	let handlequantity = (event) => {
		const item = JSON.parse(localStorage.getItem("cart_product"));
		let listData = [...item];
		let index = item.findIndex((item) => item.id === event.id);
		listData[index].quantity =
			event.quantity < 1 ? (event.quantity = 1) : event.quantity + 1;
		localStorage.setItem("cart_product", JSON.stringify(listData));
		setCart_product(listData);
	};
	// quantity -1
	let handlequantitys__1 = (event) => {
		const item = JSON.parse(localStorage.getItem("cart_product"));
		const listData = [...item];
		let index = item.findIndex((item) => item.id === event.id);
		listData[index].quantity =
			event.quantity < 2 ? (event.quantity = 1) : event.quantity - 1;
		localStorage.setItem("cart_product", JSON.stringify(listData));
		setCart_product(listData);
	};

	useEffect(() => {
		const item = JSON.parse(localStorage.getItem("cart_product"));
		if (item) {
			setCart_product(item);
		}
	}, []);

	//login
	const loginContext = (id,name,role) => {
		setUser((user) => ({
			name: name,
			uath: true,
			Role: role,
			userid:id
		}));
		localStorage.setItem("name", name);
		localStorage.setItem("role", role);
		localStorage.setItem("userid", id);
	};

	// logout
	const logoutContext = () => {
		setUser((user) => ({
			name: "",
			uath: false,
			Role: "",
			userid: "",
		}));
		localStorage.removeItem("name");
		localStorage.removeItem("role");
		localStorage.removeItem("userid");
	};
	//product admin
	const getProduct = async (page) => {
		const res = await readProduct_page(page);
		if (res && res.errCode === 0) {
			setproduct(res.message);
			settotalUser(res.message.total);
			settotal_page(res.message.totalpage)
		}
	};
	const handlepageClick = (page) => {
		getProduct(+page.selected + 1);
	};
	//avata
	const getavata = async(id) => {
		const res = await image_avata(+id);
		if (res && res.errCode === 0) {
			setavata(res.message);
		}
	}
	useEffect(() => {
		getProduct(1);
		getavata(user.userid);
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [user]);
	const [mode, setMode] = useState("light");
	const toggleMode = () => {
		if (mode === "light") {
			setMode("dark");
			document.body.style.backgroundColor = "rgb(17, 24, 39)";
		} else {
			setMode("light");
			document.body.style.backgroundColor = "white";
		}
	};
	return (
		<ProducContect.Provider
			value={{
				mode,
				handleshoping,
				cart_product,
				product_Detail,
				product,
				totalUser,
				total_page,
				handlepageClick,
				setproduct_Detail,
				handleDeleteshopping,
				handlequantity,
				handlequantitys__1,
				loginContext,
				user,
				avata,
				setavata,
				logoutContext,
				toggleMode,
			}}>
			{children}
		</ProducContect.Provider>
	);
};
export { ProducContect, ProductProvider };
