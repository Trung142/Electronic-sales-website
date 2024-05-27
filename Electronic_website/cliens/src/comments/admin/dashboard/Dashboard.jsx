import { FaUserTie } from "react-icons/fa";
import DashboardTab from "./DashboardTab";
import { useContext, useEffect, useState } from "react";
import { ProducContect } from "../../../Context/privecontext";
import { read_Order, read_user } from "../../../reviceapi/axios";

const Dashboard = () => {
	const { mode, product } = useContext(ProducContect);
	const [totalOrder, settotalOrder] = useState(0);
	const [totalUser, settotalUser] = useState(0);
	const getlistOrder = async (page) => {
		const res = await read_Order(+page);
		if (res && res.errCode === 0) {
			if (res.message && res.message.errCode === 0) {
				settotalOrder(res.message.total)
			}
		}
	};
	const getlist = async (page) => {
		const res = await read_user(+page);
		if (res && res.errCode === 0) {
			if (res.message && res.message.errCode === 0) {
				settotalUser(res.message.total)
			}
		}
	};
	useEffect(() => {
		getlistOrder(1)
		getlist(1)
	})
	return (
		<section className="text-gray-600 body-font mt-10 mb-10">
			<div className="container px-5 mx-auto mb-10">
				<div className="flex flex-wrap -m-4 text-center">
					<div className="p-4 md:w-1/4 sm:w-1/2 w-full">
						<div
							className=" border-2 hover:shadow-purple-600 shadow-[inset_0_0_10px_rgba(0,0,0,0.6)] bg-gray-100 border-gray-300    px-4 py-3 rounded-xl"
							style={{
								backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "",
								color: mode === "dark" ? "white" : "",
							}}
						>
							<div
								className="text-purple-500 w-12 h-12 mb-3 inline-block"
								viewBox="0 0 24 24"
							>
								<FaUserTie size={50} />
							</div>
							<h2
								className="title-font font-medium text-3xl text-black fonts1"
								style={{ color: mode === "dark" ? "white" : "" }}
							>
								{product && product.errCode === 0 && product.total}
							</h2>
							<p
								className=" text-purple-500  font-bold"
								style={{ color: mode === "dark" ? "white" : "" }}
							>
								Total Products
							</p>
						</div>
					</div>
					<div className="p-4 md:w-1/4 sm:w-1/2 w-full">
						<div
							className=" border-2 hover:shadow-purple-600 shadow-[inset_0_0_10px_rgba(0,0,0,0.6)] bg-gray-100 border-gray-300    px-4 py-3 rounded-xl"
							style={{
								backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "",
								color: mode === "dark" ? "white" : "",
							}}
						>
							<div
								className="text-purple-500 w-12 h-12 mb-3 inline-block"
								viewBox="0 0 24 24"
							>
								<FaUserTie size={50} />
							</div>
							<h2
								className="title-font font-medium text-3xl text-black fonts1"
								style={{ color: mode === "dark" ? "white" : "" }}
							>
								{totalOrder }
							</h2>
							<p
								className=" text-purple-500  font-bold"
								style={{ color: mode === "dark" ? "white" : "" }}
							>
								Total Orders
							</p>
						</div>
					</div>
					<div className="p-4 md:w-1/4 sm:w-1/2 w-full">
						<div
							className=" border-2 hover:shadow-purple-600 shadow-[inset_0_0_10px_rgba(0,0,0,0.6)] bg-gray-100 border-gray-300    px-4 py-3 rounded-xl"
							style={{
								backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "",
								color: mode === "dark" ? "white" : "",
							}}
						>
							<div
								className="text-purple-500 w-12 h-12 mb-3 inline-block"
								viewBox="0 0 24 24"
							>
								<FaUserTie size={50} />
							</div>
							<h2
								className="title-font font-medium text-3xl text-black fonts1"
								style={{ color: mode === "dark" ? "white" : "" }}
							>
								{totalUser}
							</h2>
							<p
								className=" text-purple-500  font-bold"
								style={{ color: mode === "dark" ? "white" : "" }}
							>
								Total Users
							</p>
						</div>
					</div>
					<div className="p-4 md:w-1/4 sm:w-1/2 w-full">
						<div
							className=" border-2 hover:shadow-purple-600 shadow-[inset_0_0_10px_rgba(0,0,0,0.6)] bg-gray-100 border-gray-300    px-4 py-3 rounded-xl"
							style={{
								backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "",
								color: mode === "dark" ? "white" : "",
							}}
						>
							<div
								className="text-purple-500 w-12 h-12 mb-3 inline-block"
								viewBox="0 0 24 24"
							>
								<FaUserTie size={50} />
							</div>
							<h2
								className="title-font font-medium text-3xl text-black fonts1"
								style={{ color: mode === "dark" ? "white" : "" }}
							>
								{product && product.errCode === 0 && product.total}
							</h2>
							<p
								className=" text-purple-500  font-bold"
								style={{ color: mode === "dark" ? "white" : "" }}
							>
								Total Products
							</p>
						</div>
					</div>
				</div>
			</div>
			<DashboardTab />
		</section>
	);
};

export default Dashboard;
