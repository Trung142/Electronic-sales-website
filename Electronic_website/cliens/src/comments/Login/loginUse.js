import { Link, useNavigate } from "react-router-dom";
import "../Login/login.scss";
import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { ProducContect } from "../../Context/privecontext";
import { loginUser } from "../../reviceapi/axios";
export const LoginUser = () => {
	const [loading1, setloading1] = useState(false);
	const [active2, setactive2] = useState("");
	const [active3, setactive3] = useState("");
	//values
	const [email, setemail] = useState("");
	const [password, setnpassword] = useState("");
	//submit sign up
	const { loginContext } = useContext(ProducContect);
	const navigage = useNavigate();
	const handleSignup = async() => {
		if (!email) {
			setactive2("active1");
		}
		if (!password) {
			setactive3("active1");
		} else {
			let valua = {
				email: email.trim(),
				password: password.trim()
			}
			const res = await loginUser(valua);
			console.log(res);
			if (res && res.errCode === 0) {
					if (res.message && res.message.errCode === 0) {
						toast.success("login success!");
						navigage("/");
						setactive3("");
						loginContext(
							res.message.User.id,
							res.message.User.name,
							res.message.User.keyRole
						);
					} else {
						toast.error(res.message && res.message.errMessage);
					}
			} else {
				navigage("/sign_up");
			}
		}
	};

	const handleClickEmail = () => {
		setactive2("active1");
		setactive3("");
	};
	const handleClickPasswor = () => {
		setactive2("");
		setactive3("active1");
	};
	return (
		<>
			<section className="sign__up">
				<div className="container">
					<div className="row">
						<div className="col-xl-6 col-lg-8 col-md-10">
							<div className="sigup_sweper">
								<div className="sigup_top">
									<div className="sigup_text">
										<h3>Hello Again!</h3>
										<span>Enter your credentials to acces your account.</span>
									</div>
								</div>
								<div className="sigup_form">
									<form>
										<div className="sigup_input">
											<div className={`sigup_item ${active2}`}>
												<div className="item" onClick={handleClickEmail}>
													<i className="fa-regular fa-envelope fa_item"></i>
													<input
														value={email}
														onChange={(event) => setemail(event.target.value)}
														type="email"
														name=""
														placeholder="Enter your email"
													/>
												</div>
											</div>
											<div className={`sigup_item ${active3}`}>
												<div className="item" onClick={handleClickPasswor}>
													<i className="fa-solid fa-lock fa_item"></i>
													<input
														value={password}
														onChange={(event) =>
															setnpassword(event.target.value)
														}
														type={loading1 === false ? "password" : "text"}
														name=""
														placeholder="Password"
													/>
													<i
														onClick={() => setloading1(!loading1)}
														className={
															loading1 === false
																? "fa-regular fa-eye-slash fa_item2"
																: "fa-regular fa-eye fa_item2"
														}></i>
												</div>
											</div>
										</div>
									</form>
									<div className="sigup__btn" onClick={() => handleSignup()}>
										<button type="submit">Sign in</button>
									</div>
									<div className="sigup_footer">
										<span>
											Already have an account?{" "}
											<Link to="/sign_up">Sign up</Link>{" "}
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};
