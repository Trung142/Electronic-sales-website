import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";
import { update_Product } from "../../../reviceapi/axios";
const UpdateProduct = (props) => {
	const { show, handleClose, handleUpdateData, updateData } = props;
	const [product_name, setproduct_name] = useState("");
	const [price, setprice] = useState("");
	const [quantity, setquantity] = useState("");
	const [sale, setsale] = useState("");
	const [top_rated, settop_rated] = useState("");
	const handleUpdateproduct = async (id) => {
		if (!product_name || !price || !quantity || !sale || !top_rated) {
			toast.warning("not values!");
		} else {
			let value = {
				product_name: product_name,
				price: price,
				quantity: quantity,
				sale: sale,
				top_rated: top_rated,
			};
			const res = await update_Product(+id, value);
			if (res && res.errCode === 0) {
				if (res.message && res.message.errCode === 0) {
					toast.success(res.message.Message);
					handleUpdateData({
						id: updateData.id,
						product_name: product_name,
						price: price,
						quantity: quantity,
						sale: sale,
						top_rated: top_rated,
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
			setproduct_name(updateData.product_name);
			setprice(updateData.price);
			setquantity(updateData.quantity);
			setsale(updateData.sale);
			settop_rated(updateData.top_rated);
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [updateData]);
	return (
		<>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Modal heading</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<form className="was-validated">
						<div className="d-flex justify-content-between align-content-center">
							<div className="col-md-6 mr-1">
								<label for="validationServer02" class="form-label">
									Product name
								</label>
								<input
									type="text"
									className="form-control is-valid"
									id="validationServer02"
									aria-label="file example"
									required
									value={product_name}
									onChange={(e) => setproduct_name(e.target.value)}
								/>
								<div className="invalid-feedback">Looks good!</div>
							</div>
							<div className="col-md-6">
								<label for="validationServer02" className="form-label">
									Price
								</label>
								<input
									type="number"
									className="form-control is-valid"
									id="validationServer02"
									aria-label="file example"
									required
									value={price}
									onChange={(e) => setprice(e.target.value)}
								/>
								<div className="invalid-feedback">Looks good!</div>
							</div>
						</div>
						<div className="d-flex justify-content-between align-content-center">
							<div className="col-md-6 mr-1">
								<label for="validationServer02" className="form-label">
									Quantity
								</label>
								<input
									type="number"
									className="form-control is-valid"
									id="validationServer02"
									aria-label="file example"
									required
									value={quantity}
									onChange={(e) => setquantity(e.target.value)}
								/>
								<div className="invalid-feedback">Looks good!</div>
							</div>
							<div className="col-md-6">
								<label for="validationServer02" className="form-label">
									Sale
								</label>
								<input
									type="number"
									className="form-control is-valid"
									id="validationServer02"
									min="1"
									max="100"
									required
									value={sale}
									onChange={(e) => setsale(e.target.value)}
								/>
								<div className="invalid-feedback">Looks good!</div>
							</div>
						</div>
						<div className="col-md-6">
							<label for="validationServer02" className="form-label">
								Top rated
							</label>
							<input
								type="text"
								className="form-control is-valid"
								id="validationServer02"
								aria-label="file example"
								required
								value={top_rated}
								onChange={(e) => settop_rated(e.target.value)}
							/>
							<div className="invalid-feedback">Looks good!</div>
						</div>
					</form>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
					<Button
						variant="primary"
						onClick={() => handleUpdateproduct(updateData.id)}
					>
						Save Changes
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};

export default UpdateProduct;
