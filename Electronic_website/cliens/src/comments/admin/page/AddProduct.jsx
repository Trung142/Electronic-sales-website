import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";
import { createProduct } from "../../../reviceapi/axios";
const AddProduct = (props) => {
	const { show, handleClose, handleAdd_prodcut } = props;
	const [product_name, setproduct_name] = useState("");
	const [price, setprice] = useState("");
	const [quantity, setquantity] = useState("");
	const [sale, setsale] = useState("");
	const [file, setfile] = useState(null);
	const [top_rated, settop_rated] = useState("");
	const handleAddproduct = async () => {
		if (!product_name || !price || !quantity || !sale || !top_rated) {
			toast.warning("not values!");
		} else if (!file) {
			toast.error(
				"Please provide a photo have (.jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF!"
			);
		} else {
			const fd = new FormData();
			fd.append("profile_pic", file);
			fd.append("product_name", product_name);
			fd.append("price", price);
			fd.append("quantity", quantity);
			fd.append("sale", sale);
			fd.append("top_rated", top_rated);
			const res = await createProduct(fd);
			if (res && res.errCode === 0) {
				if (res.message && res.message.errCode === 0) {
					toast.success(res.message.Message);
					handleAdd_prodcut({
						id: +res.message.data.id,
						imager: res.message.data.imager,
						product_name: product_name,
						quantity: quantity,
						price: price,
						sale: sale,
						top_rated: top_rated,
						createdAt: res.message.data.createdAt,
					});
				} else {
					toast.error(res.message && res.message.errMessage);
				}
			} else {
				toast.error("error to server!");
			}
			setproduct_name("");
			setfile("");
			setprice("");
			setquantity("");
			settop_rated("");
			setsale("");
			handleClose();
		}
	};
	return (
		<>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Add Products</Modal.Title>
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
						<div className="mb-3">
							<input
								type="file"
								name="profile_pic"
								className="form-control"
								aria-label="file example"
								required
								multiple
								onChange={(e) => setfile(e.target.files[0])}
							/>
							<div className="invalid-feedback">
								Example invalid form file feedback
							</div>
						</div>
					</form>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
					<Button variant="primary" onClick={() => handleAddproduct()}>
						Save Changes
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};
export default AddProduct;
