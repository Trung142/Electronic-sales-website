import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { delete_Product } from "../../../reviceapi/axios";
import { toast } from "react-toastify";
const DeleteProduct = (props) => {
	const { show, handleClose, handleDelete, deleteData } = props;
	const handleDeleteproduct = async (id) => {
		const res = await delete_Product(id);
		if (res && res.errCode === 0) {
			if (res.message && res.message.errCode === 0) {
				toast.success(res.message.errMessage);
				handleDelete(deleteData);
			} else {
				toast.error(res.message.errMessage);
			}
			
		} else {
			toast.error("error status: "+ res.status+" errcode: "+res.data.errCode);
		}
		handleClose();
	};
	return (
		<>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Modal heading</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<div>
						<span>id: {deleteData.id}</span>
						<span>product: {deleteData.product_name}</span>
					</div>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
					<Button variant="primary" onClick={()=>handleDeleteproduct(deleteData.id)}>
						Save Changes
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};
export default DeleteProduct;
