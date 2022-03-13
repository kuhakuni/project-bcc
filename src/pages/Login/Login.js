import { NavForm } from "../../components/Navbar/Navbar";
import { FooterLogin } from "../../components/Footer/Footer";
import { API } from "../../config/api";
import { useAuth } from "../../config/Auth";
import { NavLink } from "react-router-dom";
import picture from "../../assets/Rectangle 1.png";
import { useState } from "react";
import styled from "styled-components";
import "./Login.css";

const LoginTitle = styled.h1`
	color: #023e8a;
	margin-bottom: 2rem;
	font-size: calc(1rem + 2.7vw);
	font-weight: 400;
	line-height: 1.2;
`;
const Login = () => {
	const [passwordShown, setPasswordShown] = useState(false);
	const passwordToggle = () => {
		setPasswordShown(!passwordShown);
	};
	const eyeClassName = passwordShown ? "bi-eye" : " bi-eye-slash";
	const passType = passwordShown ? "text" : "password";
	const { setToken } = useAuth();
	const [forms, setForms] = useState({
		email: "",
		password: "",
	});
	const [isError, setError] = useState({
		status: false,
		message: "",
	});
	const btnSubmit = document.querySelector("#btn-submit");
	const btnLoading = document.querySelector("#btn-loading");
	const handleLogin = async (e) => {
		e.preventDefault();
		btnSubmit.style.display = "none";
		btnLoading.style.display = "block";
		try {
			const loginResponse = await API.post(
				"/berhasil_id/public/api/login",
				{
					...forms,
				}
			);
			btnSubmit.style.display = "block";
			btnLoading.style.display = "none";
			if (loginResponse.data.success) {
				const token = loginResponse.data.data.token;
				const id = loginResponse.data.data.id_user;
				setToken(token, id);
				window.location.href = "/";
			}
		} catch (error) {
			console.log(error);
			setError({
				status: true,
				message: "Error while logging in",
			});
		}
	};
	return (
		<>
			<NavForm type="Daftar" />
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
								onSubmit={handleLogin}
							>
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
									Masuk
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
								Belum punya akun? Silahkan
								<NavLink to="/signup" className="ms-1 signup">
									Daftar
								</NavLink>
							</p>
						</div>
						<div className="col-md-6">
							<img src={picture} className="img-fluid" alt="" />
						</div>
					</div>
				</div>
			</section>
			<FooterLogin />
		</>
	);
};

export default Login;
