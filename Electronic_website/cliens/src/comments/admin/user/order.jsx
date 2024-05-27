import { useContext, useEffect, useState } from "react";
import { ProducContect } from "../../../Context/privecontext";
import DeleteOrder from "./modalDeleteOrder";
import ReactPaginate from "react-paginate";
import { read_Order } from "../../../reviceapi/axios";
import UpdateOrder from "./modalUpdateOrder";
export const List_Order = () => {
	const { mode} = useContext(ProducContect);
	const [totalUser, settotalUser] = useState(0);
	const [total_page, settotal_page] = useState(0);
	const [listOrder, setlistOrder] = useState([]);
	const [showupdate, setshowupdate] = useState(false);
	const [updateData, setupdateData] = useState({});
	const [showDelete, setshowDelete] = useState(false);
	const [deleteData, setdeleteData] = useState({});
	const getlistOrder = async (page) => {
		const res = await read_Order(+page);
		if (res && res.errCode === 0) {
			if (res.message && res.message.errCode === 0) {
				setlistOrder(res.message.User);
				settotalUser(res.message.total);
				settotal_page(res.message.totalpage);
			}
		}
	};
	const handlepageClick = (page) => {
		getlistOrder(+page.selected + 1);
	};
	const handleCole = () => {
		setshowupdate(false);
		setshowDelete(false);
	};
	///update
	const handleUpdate = (event) => {
		setshowupdate(true);
		setupdateData(event);
	};
	const handleUpdateData = (event) => {
		let listData = [...listOrder];
		let index = listOrder.findIndex((item) => item.id === event.id);
		listData[index].name = event.name;
		listData[index].phone = event.phone;
		listData[index].email = event.email;
		listData[index].address = event.address;
		setlistOrder(listData);
	};
	//delete
	const handleDelete = (user) => {
		setshowDelete(true);
		setdeleteData(user);
	};
	const handleDelete_data = (user) => {
		let listData = [...listOrder];
		listData = listOrder.filter((item) => item.id !== user.id);
		setlistOrder(listData);
	};
	useEffect(() => {
		getlistOrder(1);
	}, []);
	return (
		<>
			<div className="relative overflow-x-auto mb-16">
				<h1
					className=" text-center mb-5 text-3xl font-semibold underline"
					style={{ color: mode === "dark" ? "white" : "" }}
				>
					Order Details
				</h1>
				<table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
					<thead
						className="text-xs text-black uppercase bg-gray-200 "
						style={{
							backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "",
							color: mode === "dark" ? "white" : "",
						}}
					>
						<tr>
							<th scope="col" className="px-6 py-3">
								Payment Id
							</th>
							<th scope="col" className="px-6 py-3">
								Image
							</th>
							<th scope="col" className="px-6 py-3">
								Product Name
							</th>
							<th scope="col" className="px-6 py-3">
								Total prodcuct quantity
							</th>
							<th scope="col" className="px-6 py-3">
								Price
							</th>
							<th scope="col" className="px-6 py-3">
								Category
							</th>
							<th scope="col" className="px-6 py-3">
								Name
							</th>
							<th scope="col" className="px-6 py-3">
								Address
							</th>
							
							<th scope="col" className="px-6 py-3">
								Phone Number
							</th>
							<th scope="col" className="px-6 py-3">
								Email
							</th>
							<th scope="col" className="px-6 py-3">
								Date
							</th>
							<th scope="col" className="px-6 py-3">
								Active
							</th>
						</tr>
					</thead>
					<tbody>
						{listOrder &&
							listOrder.length > 0 &&
							listOrder.map((item, index) => {
								return (
									<>
										<tr
											className="bg-gray-50 border-b  dark:border-gray-700"
											style={{
												backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "",
												color: mode === "dark" ? "white" : "",
											}}
											key={index}
										>
											<td
												className="px-6 py-4 text-black "
												style={{ color: mode === "dark" ? "white" : "" }}
											>
												{item.id}
											</td>
											<th
												scope="row"
												className="px-6 py-4 font-medium text-black whitespace-nowrap"
											>
												<img
													className="w-16"
													src={`http://localhost:8080/image/${item.imager}`}
													alt="img"
												/>
											</th>
											<td
												className="px-6 py-4 text-black "
												style={{ color: mode === "dark" ? "white" : "" }}
											>
												{item.product_name}
											</td>
											<td
												className="px-6 py-4 text-black "
												style={{ color: mode === "dark" ? "white" : "" }}
											>
												{item.quantity}
											</td>
											<td
												className="px-6 py-4 text-black "
												style={{ color: mode === "dark" ? "white" : "" }}
											>
												{item.price}
											</td>
											<td
												className="px-6 py-4 text-black "
												style={{ color: mode === "dark" ? "white" : "" }}
											>
												{item.category}
											</td>
											<td
												className="px-6 py-4 text-black "
												style={{ color: mode === "dark" ? "white" : "" }}
											>
												{item.name}
											</td>
											<td
												className="px-6 py-4 text-black "
												style={{ color: mode === "dark" ? "white" : "" }}
											>
												{item.address}
											</td>
										
											<td
												className="px-6 py-4 text-black "
												style={{ color: mode === "dark" ? "white" : "" }}
											>
												{item.phone}
											</td>
											<td
												className="px-6 py-4 text-black "
												style={{ color: mode === "dark" ? "white" : "" }}
											>
												{item.email}
											</td>
											<td
												className="px-6 py-4 text-black "
												style={{ color: mode === "dark" ? "white" : "" }}
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
			<DeleteOrder
				show={showDelete}
				handleClose={handleCole}
				handleDelete={handleDelete_data}
				deleteData ={deleteData}
			/>
			<UpdateOrder
				show={showupdate}
				handleClose={handleCole}
				handleUpdateData={handleUpdateData}
				updateData ={updateData}
			/>
		</>
	);
};
