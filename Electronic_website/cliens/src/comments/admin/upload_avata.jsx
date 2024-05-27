import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";
import { useContext, useState } from "react";
import { upload_avata } from "../../reviceapi/axios";
import { ProducContect } from "../../Context/privecontext";
const Upload_Avata = (props) => {
	const { show, handleClose, handleImage } = props;
	const { user } = useContext(ProducContect);
	const [file, setfile] = useState(null);
	const handleDeleteproduct = async (id) => {
		if (file) {
			const fd = new FormData();
			fd.append("profile_pic", file);
            const res = await upload_avata(+id, fd);
			if (res && res.errCode === 0) {
				if (res.message && res.message.errCode === 0) {
					toast.success(res.message.errMessage);
					handleImage({
						image: res.message.User.image,
					});
				} else {
					toast.error(res.message.errMessage);
				}
			} else {
				toast.error(
					"error status: " + res.status + " errcode: " + res.data.errCode
				);
			}
			handleClose();
		} else {
			toast.error("please upload file!");
		}
	};
	return (
		<>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>avata</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<div>
						<form>
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
					</div>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
					<Button
						variant="primary"
						onClick={() => handleDeleteproduct(user.userid)}
					>
						Save Changes
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};
export default Upload_Avata;
