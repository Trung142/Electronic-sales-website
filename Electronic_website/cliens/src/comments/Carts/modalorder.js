/* eslint-disable no-lone-blocks */
import { useContext, useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { VND } from "../FormatCode/VND";
import { create_Order, image_avata } from "../../reviceapi/axios";
import { toast } from "react-toastify";
import { ProducContect } from "../../Context/privecontext";

const Buy_Order = (props) => {
    const { show, handleClose, data, total } = props;
    const [name, setname] = useState("");
	const [address, setaddress] = useState("");
	const [phone, setphone] = useState("");
	const [email, setemail] = useState("");
	const { user } = useContext(ProducContect);
	const getUser = async(id) => {
		let res = await image_avata(+id);
		if (res && res.errCode === 0) {
			setname(res.message && res.message.name);
			setemail(res.message && res.message.email);
		}
	}
    const handleSubmit = (e) => {
        e.preventDefault();
        data && data.length > 0 && data.map(async (item,index) => {
                  let valua = {
					product_name: item.product_name,
					price: item.price * item.quantity,
					quantity: item.quantity,
					file: item.imager,
					name: name,
					address: address,
					phone: phone,
					email: email,
                };
           let res = await create_Order(valua);
           return res && res.errCode === 0 && res.message.errCode ===0 ? true:false
        })
		toast.success("order success !");
		handleClose();
	}
	
	useEffect(() => {
		getUser(user.userid)
	},[user])
	return (
		<>
			<Modal show={show} fullscreen={true} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Product information</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<div className="container">
						<div className="row">
							<div className="col-md-6">
								<table className="table">
									<thead>
										<tr>
											<th className="product_image">Images</th>
											<th className="Cart_product_name">Product</th>
											<th className="product_price">Price</th>
											<th className="product_subtotal">Quantity</th>
										</tr>
									</thead>
									<tbody>
										{data &&
											data.length > 0 &&
											data.map((item, index) => {
												return (
													<>
														<tr key={index}>
															<td>
																<img
																	style={{ width: "50px", height: "50px" }}
																	src={`http://localhost:8080/image/${item.imager}`}
																	alt=""
																/>
															</td>
															<td>{item.product_name}</td>
															<td>{VND.format(item.price)}</td>
															<td>{item.quantity}</td>
														</tr>
													</>
												);
											})}
									</tbody>
								</table>
								<div className="content">
									<div className="item_1">
										<span>Total : </span>
										<small><b>{VND.format(total)}</b></small>
									</div>
								</div>
							</div>
							<div className="col-md-6">
								<form
									class="row g-3 needs-validation"
									onSubmit={handleSubmit}
									novalidate>
									<div class="col-md-12">
										<label for="validationCustomUsername" class="form-label">
											Email
										</label>
										<div class="input-group has-validation">
											<span class="input-group-text" id="inputGroupPrepend">
												@
											</span>
											<input
												type="email"
												class="form-control"
												id="validationCustomUsername"
												aria-describedby="inputGroupPrepend"
												value={email}
												onChange={(e) => setemail(e.target.value)}
												required
											/>
											<div class="invalid-feedback">
												Please choose a username.
											</div>
										</div>
									</div>
									<div class="col-md-6">
										<label for="validationCustom02" class="form-label">
											Name
										</label>
										<input
											type=""
											class="form-control"
											id="validationCustom02"
											value={name}
											onChange={(e) => setname(e.target.value)}
											required
										/>
										<div class="valid-feedback">Looks good!</div>
									</div>
									<div class="col-md-6">
										<label for="validationCustom03" class="form-label">
											Phone Number
										</label>
										<input
											type="text"
											class="form-control"
											id="validationCustom03"
											value={phone}
											onChange={(e) => setphone(e.target.value)}
											required
										/>
										<div class="invalid-feedback">
											Please provide a valid city.
										</div>
									</div>
									<div class="col-md-12">
										<label for="validationCustom03" class="form-label">
											Address
										</label>
										<input
											type="text"
											class="form-control"
											id="validationCustom03"
											value={address}
											onChange={(e) => setaddress(e.target.value)}
											required
										/>
										<div class="invalid-feedback">
											Please provide a valid city.
										</div>
									</div>
									<div class="col-12">
										<div class="form-check">
											<input
												class="form-check-input"
												type="checkbox"
												value=""
												id="invalidCheck"
												required
											/>
											<label class="form-check-label" for="invalidCheck">
												Agree to terms and conditions
											</label>
											<div class="invalid-feedback">
												You must agree before submitting.
											</div>
										</div>
									</div>
									<div class="col-12">
										<button class="btn btn-primary" type="submit">
											Pay Now
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</Modal.Body>
			</Modal>
		</>
	);
};

export default Buy_Order;
