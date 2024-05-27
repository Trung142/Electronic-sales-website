import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";
import { update_Order} from "../../../reviceapi/axios";
const UpdateOrder = (props) => {
	const { show, handleClose, handleUpdateData, updateData } = props;
	const [name, setname] = useState("");
    const [address, setaddress] = useState("");
    const [phone, setphone] = useState("");
    const [email, setemail] = useState("");
    const handleSubmit = async (event) => {
        event.preventDefault();
		if (!name || !address || !phone || !email) {
			toast.warning("not values!");
		} else {
			let value = {
                name: name,
                address: address,
                phone: phone,
                email: email
			};
			const res = await update_Order(+updateData.id,value);
			console.log("check", res);
			if (res && res.errCode === 0) {
				if (res.message && res.message.errCode === 0) {
					toast.success(res.message.Message);
					handleUpdateData({
						id: updateData.id,
                        name: name,
                        address: address,
                        phone: phone,
                        email: email
					});
				} else {
					toast.error(res.message && res.message.errMessage);
				}
			} else {
				toast.error("error to server!");
			}
			handleClose();
		}
	};
	useEffect(() => {
		if (show) {
            setname(updateData.name);
            setphone(updateData.phone);
            setaddress(updateData.address);
            setemail(updateData.email);
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [updateData]);
	return (
		<>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Edit User</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<form class="row g-3 needs-validation" onSubmit={handleSubmit} novalidate>
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
                                onChange={(e)=>setemail(e.target.value)}
									required
								/>
								<div class="invalid-feedback">Please choose a username.</div>
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
                                onChange={(e)=>setname(e.target.value)}
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
                                onChange={(e)=>setphone(e.target.value)}
								required
							/>
							<div class="invalid-feedback">Please provide a valid city.</div>
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
                                onChange={(e)=>setaddress(e.target.value)}
								required
							/>
							<div class="invalid-feedback">Please provide a valid city.</div>
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
								Submit form
							</button>
						</div>
					</form>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};

export default UpdateOrder;
