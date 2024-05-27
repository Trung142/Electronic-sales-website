/* eslint-disable react/jsx-pascal-case */
import { useContext, useEffect, useState } from "react";
import { ProducContect } from "../../../Context/privecontext";
import ReactPaginate from "react-paginate";
import { FaCartPlus } from "react-icons/fa";
import { read_user } from "../../../reviceapi/axios";
import Create_User from "./modalCreateuser";
export const List_User = () => {
	const { mode } = useContext(ProducContect);
	//pagination
	const [show, setshow] = useState(false);
	const [totalUser, settotalUser] = useState(0);
	const [total_page, settotal_page] = useState(0);
	const [listUser, setlistUser] = useState([]);
	const getlistUser = async (page) => {
		const res = await read_user(page);
		if (res && res.errCode === 0) {
			if (res.message) {
				setlistUser(res.message.User);
				settotalUser(res.message.total);
				settotal_page(res.message.totalpage);
			}
		}
	};
	const handlepageClick = (page) => {
		getlistUser(+page.selected + 1);
	};
	const handleCole = () => {
		setshow(false);
	};
	const handleAdd_User = (event) => {
		setlistUser([event, ...listUser]);
	};
	useEffect(() => {
		getlistUser(1);
	}, []);
	return (
		<>
			<div className="relative overflow-x-auto mb-10">
				<h1
					className=" text-center mb-5 text-3xl font-semibold underline"
					style={{ color: mode === "dark" ? "white" : "" }}
				>
					User Details
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
							Add User <FaCartPlus size={20} />
						</div>
					</button>
				</div>
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
								S.No
							</th>

							<th scope="col" className="px-6 py-3">
								Name
							</th>
							<th scope="col" className="px-6 py-3">
								Gender
							</th>

							<th scope="col" className="px-6 py-3">
								Date
							</th>
							<th scope="col" className="px-6 py-3">
								Phone Number
							</th>
							<th scope="col" className="px-6 py-3">
								Address
							</th>
							<th scope="col" className="px-6 py-3">
								Email
							</th>
							<th scope="col" className="px-6 py-3">
								Role
							</th>
							<th scope="col" className="px-6 py-3">
								CreatedAt
							</th>
						</tr>
					</thead>
					<tbody>
						{listUser &&
							listUser.length > 0 &&
							listUser.map((item, index) => {
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
												{item.gender}
											</td>
											<td
												className="px-6 py-4 text-black "
												style={{ color: mode === "dark" ? "white" : "" }}
											>
												{item.date}
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
												{item.address}
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
												{item.value}
											</td>
											<td
												className="px-6 py-4 text-black "
												style={{ color: mode === "dark" ? "white" : "" }}
											>
												{item.createdAt}
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
			<Create_User
				show={show}
				handleClose={handleCole}
				handleAdd_User = {handleAdd_User}
			/>
		</>
	);
};
