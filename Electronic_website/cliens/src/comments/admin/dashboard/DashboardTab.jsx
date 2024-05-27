/* eslint-disable react/jsx-pascal-case */
import React, { useContext, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { FaUser, FaCartPlus } from "react-icons/fa";
import { AiFillShopping } from "react-icons/ai";
import { ProducContect } from "../../../Context/privecontext";
import AddProduct from "../page/AddProduct";
import UpdateProduct from "../page/UpdateProduct";
import DeleteProduct from "../page/DeleteProdut";
import { VND } from "../../FormatCode/VND";
import { useEffect } from "react";
import UploadImage from "../page/uploadImage";
import ReactPaginate from "react-paginate";
import { List_User } from "../user/user";
import { List_Order } from "../user/order";
const DashboardTab = () => {
	let [show, setshow] = useState(false);
	const [listproduct, setlistproduct] = useState([]);
	const [showupdate, setshowupdate] = useState(false);
	const [updateData, setupdateData] = useState({});
	const [showDelete, setshowDelete] = useState(false);
	const [deleteData, setdeleteData] = useState({});
	const [showUpload, setshowUpload] = useState(false);
	const [uploadData, setuploadData] = useState({});
	//product
	const { product, mode, totalUser, total_page, handlepageClick } = useContext(
		ProducContect
	);
	const handleCole = () => {
		setshow(false);
		setshowupdate(false);
		setshowDelete(false);
		setshowUpload(false);
	};
	const handleAdd_prodcut = (event) => {
		setlistproduct([event, ...listproduct]);
	};
	//upload image
	const handleUploadImage = (event) => {
		setshowUpload(true);
		setuploadData(event);
	};
	const handleImage = (event) => {
		let listData = [...listproduct];
		let index = listproduct.findIndex((item) => item.id === event.id);
		listData[index].imager = event.imager;
		setlistproduct(listData);
	};
	///update
	const handleUpdate = (event) => {
		setshowupdate(true);
		setupdateData(event);
	};
	const handleUpdateData = (event) => {
		let listData = [...listproduct];
		let index = listproduct.findIndex((item) => item.id === event.id);
		listData[index].product_name = event.product_name;
		listData[index].price = event.price;
		listData[index].quantity = event.quantity;
		listData[index].sale = event.sale;
		listData[index].top_rated = event.top_rated;
		listData[index].createdAt = event.createdAt;
		setlistproduct(listData);
	};
	//delete
	const handleDelete = (user) => {
		setshowDelete(true);
		setdeleteData(user);
	};
	const handleDelete_data = (user) => {
		let listData = [...listproduct];
		listData = listproduct.filter((item) => item.id !== user.id);
		setlistproduct(listData);
	};
	useEffect(() => {
		setlistproduct(product.User);
	}, [product]);
	return (
		<>
			<div className="container mx-auto">
				<div className="tab container mx-auto ">
					<Tabs defaultIndex={0} className=" ">
						<TabList className="md:flex md:space-x-8 bg-  grid grid-cols-1 text-center gap-4   md:justify-center mb-10 ">
							<Tab>
								<button
									type="button"
									className="font-medium border-b-2 hover:shadow-purple-700 border-purple-500 text-purple-500 rounded-lg text-xl shadow-[inset_0_0_8px_rgba(0,0,0,0.6)]  px-5 py-1.5 text-center bg-[#605d5d12] "
								>
									<div className="flex gap-2 items-center">
										<MdOutlineProductionQuantityLimits />
										Products
									</div>{" "}
								</button>
							</Tab>
							<Tab>
								<button
									type="button"
									className="font-medium border-b-2 border-pink-500 bg-[#605d5d12] text-pink-500  hover:shadow-pink-700  rounded-lg text-xl shadow-[inset_0_0_8px_rgba(0,0,0,0.6)]    px-5 py-1.5 text-center "
								>
									<div className="flex gap-2 items-center">
										<AiFillShopping /> Order
									</div>
								</button>
							</Tab>
							<Tab>
								<button
									type="button"
									className="font-medium border-b-2 border-green-500 bg-[#605d5d12] text-green-500 rounded-lg text-xl  hover:shadow-green-700 shadow-[inset_0_0_8px_rgba(0,0,0,0.6)]   px-5 py-1.5 text-center "
								>
									<div className="flex gap-2 items-center">
										<FaUser /> Users
									</div>
								</button>
							</Tab>
						</TabList>
						{/* product  */}
						<TabPanel>
							<div className="  px-4 md:px-0 mb-16">
								<h1
									className=" text-center mb-5 text-3xl font-semibold underline"
									style={{ color: mode === "dark" ? "white" : "" }}
								>
									Product Details
								</h1>
								<div className=" flex justify-end">
									<button
										type="button"
										className="focus:outline-none text-white bg-pink-600 shadow-[inset_0_0_10px_rgba(0,0,0,0.6)] border hover:bg-pink-700 outline-0 font-medium rounded-lg text-sm px-5 py-2.5 mb-2"
										style={{
											backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "",
											color: mode === "dark" ? "white" : "",
										}}
										onClick={() => setshow(true)}
									>
										{" "}
										<div className="flex gap-2 items-center">
											Add Product <FaCartPlus size={20} />
										</div>
									</button>
								</div>
								<div className="relative overflow-x-auto ">
									<table className="w-full text-sm text-left text-gray-500 dark:text-gray-400  ">
										<thead
											className="text-xs border border-gray-600 text-black uppercase bg-gray-200 shadow-[inset_0_0_8px_rgba(0,0,0,0.6)]"
											style={{
												backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "",
												color: mode === "dark" ? "white" : "",
											}}
										>
											<tr>
												<th scope="col" className="px-6 py-3">
													S.No
												</th>
												<th scope="col" className="px-6 py-3">
													Image
												</th>
												<th scope="col" className="px-6 py-3">
													Title
												</th>
												<th scope="col" className="px-6 py-3">
													Price
												</th>
												<th scope="col" className="px-6 py-3">
													Sale
												</th>
												<th scope="col" className="px-6 py-3">
													Quantity
												</th>
												<th scope="col" className="px-6 py-3">
													Date
												</th>
												<th scope="col" className="px-6 py-3">
													Action
												</th>
											</tr>
										</thead>
										<tbody className="">
											{listproduct &&
												listproduct &&
												listproduct.map((item, index) => {
													return (
														<>
															<tr
																className="bg-gray-50 border-b  dark:border-gray-700"
																style={{
																	backgroundColor:
																		mode === "dark" ? "rgb(46 49 55)" : "",
																	color: mode === "dark" ? "white" : "",
																}}
																key={index}
															>
																<td
																	className="px-6 py-4 text-black "
																	style={{
																		color: mode === "dark" ? "white" : "",
																	}}
																>
																	{item.id}
																</td>
																<th
																	scope="row"
																	className="px-6 py-4 font-medium text-black whitespace-nowrap"
																>
																	<img
																		onClick={() => handleUploadImage(item)}
																		className="w-16"
																		style={{cursor:'pointer'}}
																		src={`http://localhost:8080/image/${item.imager}`}
																		alt="img"
																	/>
																</th>
																<td
																	className="px-6 py-4 text-black "
																	style={{
																		color: mode === "dark" ? "white" : "",
																	}}
																>
																	{item.product_name}
																</td>
																<td
																	className="px-6 py-4 text-black "
																	style={{
																		color: mode === "dark" ? "white" : "",
																	}}
																>
																	{VND.format(item.price)}
																</td>
																<td
																	className="px-6 py-4 text-black "
																	style={{
																		color: mode === "dark" ? "white" : "",
																	}}
																>
																	{item.sale}
																</td>
																<td
																	className="px-6 py-4 text-black "
																	style={{
																		color: mode === "dark" ? "white" : "",
																	}}
																>
																	{item.quantity}
																</td>
																<td
																	className="px-6 py-4 text-black "
																	style={{
																		color: mode === "dark" ? "white" : "",
																	}}
																>
																	{item.createdAt}
																</td>
																<td className="px-6 py-4">
																	<div className=" flex gap-2">
																		<div
																			className=" flex gap-2 cursor-pointer text-black "
																			style={{
																				color: mode === "dark" ? "white" : "",
																			}}
																		>
																			<div onClick={() => handleDelete(item)}>
																				<svg
																					xmlns="http://www.w3.org/2000/svg"
																					fill="none"
																					viewBox="0 0 24 24"
																					strokeWidth={1.5}
																					stroke="currentColor"
																					className="w-6 h-6"
																				>
																					<path
																						strokeLinecap="round"
																						strokeLinejoin="round"
																						d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
																					/>
																				</svg>
																			</div>
																			<div onClick={() => handleUpdate(item)}>
																				<svg
																					xmlns="http://www.w3.org/2000/svg"
																					fill="none"
																					viewBox="0 0 24 24"
																					strokeWidth={1.5}
																					stroke="currentColor"
																					className="w-6 h-6"
																				>
																					<path
																						strokeLinecap="round"
																						strokeLinejoin="round"
																						d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
																					/>
																				</svg>
																			</div>
																		</div>
																	</div>
																</td>
															</tr>
														</>
													);
												})}
										</tbody>
									</table>
								</div>
							</div>
							<div className="d-flex justify-content-center">
								<ReactPaginate
									previousLabel="Previous"
									nextLabel="Next"
									pageClassName="page-item"
									pageLinkClassName="page-link"
									previousClassName="page-item"
									previousLinkClassName="page-link"
									nextClassName="page-item"
									nextLinkClassName="page-link"
									breakLabel="..."
									breakClassName="page-item"
									breakLinkClassName="page-link"
									pageCount={total_page}
									marginPagesDisplayed={totalUser}
									pageRangeDisplayed={3}
									onPageChange={handlepageClick}
									containerClassName="pagination"
									activeClassName="active"
								/>
							</div>
						</TabPanel>
						{/* oder */}
						<TabPanel>
							{/* <Order order={order} setOrder={setOrder} setLoading={setLoading} /> */}
							<List_Order />
						</TabPanel>
						{/* user */}
						<TabPanel>
							{/* <User addressInfo={addressInfo} setAddressInfo={setAddressInfo} setLoading={setLoading} /> */}
							<List_User />
						</TabPanel>
					</Tabs>
				</div>
			</div>

			<AddProduct
				show={show}
				handleClose={handleCole}
				handleAdd_prodcut={handleAdd_prodcut}
			/>
			<UpdateProduct
				show={showupdate}
				handleClose={handleCole}
				updateData={updateData}
				handleUpdateData={handleUpdateData}
			/>
			<DeleteProduct
				show={showDelete}
				handleClose={handleCole}
				deleteData={deleteData}
				handleDelete={handleDelete_data}
			/>
			<UploadImage
				show={showUpload}
				handleClose={handleCole}
				uploadData={uploadData}
				handleImage={handleImage}
			/>
		</>
	);
};

export default DashboardTab;
