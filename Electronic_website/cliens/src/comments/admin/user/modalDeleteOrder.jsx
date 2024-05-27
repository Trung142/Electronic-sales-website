import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";
import { delete_Order } from "../../../reviceapi/axios";
const DeleteOrder = (props) => {
	const { show, handleClose, handleDelete, deleteData } = props;
	const handleDeleteOrder = async (id) => {
		const res = await delete_Order(+id);
		if (res && res.errCode === 0) {
			if (res.message && res.message.errCode === 0) {
				toast.success(res.message.errMessage);
				handleDelete(deleteData);
			} else {
				toast.error(res.message.errMessage);
			}
		} else {
			toast.error(
				"error status: " + res.status + " errcode: " + res.data.errCode
			);
		}
		handleClose();
	};
	return (
		<>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Delete Products Order</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<div>
						<span>Do you want remove ! <small>idOrder :</small><b>{deleteData.id}</b></span>
					</div>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
					<Button
						variant="primary"
						onClick={() =>handleDeleteOrder(deleteData.id)}
					>
						Save Changes
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};
export default DeleteOrder;
