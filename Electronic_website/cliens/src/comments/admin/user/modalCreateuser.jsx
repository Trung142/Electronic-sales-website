import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";
import { create_user } from "../../../reviceapi/axios";
const Create_User = (props) => {
	const { show, handleClose, handleAdd_User } = props;
	const [name, setname] = useState("");
	const [email, setemail] = useState("");
	const [phone, setphone] = useState("");
	const [address, setaddress] = useState("");
	const [gender, setgender] = useState(null);
    const [role, setrole] = useState("");
	const [password, setpassword] = useState("");
	//this.handleSubmit = this.handleSubmit.bind(this);
	const handleSubmit = async (event) => {
		event.preventDefault();
		if (!name || !email || !phone || !address || !gender || !role || !password) {
			toast.warning("not values!");
		} else {
			const valua = {
				name: name,
				email: email,
				password: password,
				phone: phone,
				address: address,
				gender: gender,
				keyRole: role
			}
			const res = await create_user(valua);
			if (res && res.errCode === 0) {
				if (res.message && res.message.errCode === 0) {
					toast.success('Create user success!');
					handleAdd_User({
						id: +res.message.User,
						name: name,
						email: email,
						phone: phone,
						address: address,
						gender: gender,
						keyRole: role,
					});
					handleClose();
				} else {
					toast.error(res.message && res.message.errMessage);
				}
			} else {
				toast.error("error to server!");
			}
			
		}
		
	};
	return (
		<>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Add User</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<form class="row g-3 needs-validation" onSubmit={handleSubmit} novalidate>
						<div class="col-md-4">
							<label for="validationCustom01" class="form-label">
								User Name
							</label>
							<input
								type="text"
								class="form-control"
								id="validationCustom01"
                                value={name}
                                onChange={(e)=>setname(e.target.value)}
								required
							/>
							<div class="valid-feedback">Looks good!</div>
						</div>
						<div class="col-md-4">
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
						<div class="col-md-4">
							<label for="validationCustom02" class="form-label">
								Password
							</label>
							<input
								type="password"
								class="form-control"
								id="validationCustom02"
								value={password}
                                onChange={(e)=>setpassword(e.target.value)}
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
						<div class="col-md-6">
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
						<div class="col-md-3">
							<label for="validationCustom04" class="form-label">
								Gender
							</label>
                            <select class="form-select" id="validationCustom04"
                                value={gender}
                                onChange={(e)=>setgender(e.target.value)}
                                required
                            >
								<option selected disabled value="">
									Choose...
								</option>
								<option value={1}>Nam</option>
								<option value={0}>Nữ</option>
							</select>
							<div class="invalid-feedback">Please select a valid state.</div>
						</div>
						<div class="col-md-3">
							<label for="validationCustom04" class="form-label">
								Role
							</label>
                            <select class="form-select" id="validationCustom04"
                                value={role}
                                onChange={(e)=>setrole(e.target.value)}
                                required>
								<option selected disabled value="">
									Choose...
								</option>
								<option value={"R1"}>Admin</option>
								<option value={"R2"}>Manager</option>
								<option value={"R3"}>Employees</option>
							</select>
							<div class="invalid-feedback">Please select a valid state.</div>
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
export default Create_User;
