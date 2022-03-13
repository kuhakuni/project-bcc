import { NavForm } from "../../components/Navbar/Navbar";
import { NavLink } from "react-router-dom";
import picture from "../../assets/Rectangle 1.png";
import { useState } from "react";
import { API } from "../../config/api";
import { useAuth } from "../../config/Auth";
import styled from "styled-components";

const LoginTitle = styled.h1`
	color: #023e8a;
	margin-bottom: 2rem;
	font-size: calc(1rem + 2.7vw);
	font-weight: 400;
	line-height: 1.2;
`;
export const Signup = () => {
	const [passwordShown, setPasswordShown] = useState(false);
	const passwordToggle = () => {
		setPasswordShown(!passwordShown);
	};
	const eyeClassName = passwordShown ? "bi-eye" : " bi-eye-slash";
	const passType = passwordShown ? "text" : "password";
	const { setToken } = useAuth();
	const [forms, setForms] = useState({
		nama: "",
		email: "",
		password: "",
	});
	const [isError, setError] = useState({
		status: false,
		message: "",
	});
	const btnSubmit = document.querySelector("#btn-submit");
	const btnLoading = document.querySelector("#btn-loading");
	const handleSignup = async (e) => {
		e.preventDefault();
		btnSubmit.style.display = "none";
		btnLoading.style.display = "block";
		try {
			const registerResponse = await API.post(
				"berhasil_id/public/api/register",
				{
					...forms,
				}
			);
			btnSubmit.style.display = "block";
			btnLoading.style.display = "none";
			if (registerResponse.data.success) {
				const token = registerResponse.data.data.token;
				const id = registerResponse.data.data.id_user;
				setToken(token, id);
				window.location.href = "/";
			}
		} catch (error) {
			console.log(error);
			setError({
				status: true,
				message: "Error while signing up",
			});
		}
	};
	return (
		<>
			<NavForm type="Masuk" />
			<section className="login">
				<div className="container">
					<div className="row align-items-center">
						<div className="login col-md-6">
							<LoginTitle>
								Selamat Datang di Berhasil.id
							</LoginTitle>
							<form
								action="#"
								method="POST"
								className="mb-3"
								onSubmit={handleSignup}
							>
								<div className="form-group">
									<input
										type="text"
										name="nama"
										className="form-login"
										placeholder="Name"
										onChange={(e) => {
											setForms(() => ({
												...forms,
												nama: e.target.value,
											}));
										}}
										required
									/>
									<i className="bi bi-person field-icon"></i>
								</div>
								<div className="form-group">
									<input
										type="email"
										name="email"
										className="form-login"
										placeholder="Email"
										onChange={(e) => {
											setForms(() => ({
												...forms,
												email: e.target.value,
											}));
										}}
										required
									/>
									<i className="bi bi-envelope field-icon"></i>
								</div>
								<div className="form-group">
									<input
										type={passType}
										name="password"
										className="form-login"
										id="password"
										placeholder="Password"
										onChange={(e) => {
											setForms(() => ({
												...forms,
												password: e.target.value,
											}));
										}}
										required
									/>
									<i
										className={
											"bi field-icon " + eyeClassName
										}
										id="togglePassword"
										onClick={passwordToggle}
									></i>
								</div>
								<button
									type="submit"
									name="login"
									id="btn-submit"
									className="btn btn-login form-login"
								>
									Daftar
								</button>
								<button
									id="btn-loading"
									className="btn btn-login form-login"
									style={{ display: "none" }}
									disabled
								>
									<span
										className="spinner-border spinner-border-sm"
										role="status"
										aria-hidden="true"
									></span>
								</button>
							</form>
							<p className="text-center">
								Sudah punya akun? Silahkan
								<NavLink to="/login" className="ms-1 signup">
									Masuk
								</NavLink>
							</p>
						</div>
						<div className="col-md-6">
							<img src={picture} className="img-fluid" alt="" />
						</div>
					</div>
				</div>
			</section>
		</>
	);
};
