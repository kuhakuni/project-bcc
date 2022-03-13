import "./Navbar.css";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";
import { home, bellIcon, message } from "../../assets";
import {
	Navbar,
	Nav,
	Form,
	FormControl,
	Button,
	Container,
} from "react-bootstrap";
import { dp } from "../../assets";
import styled from "styled-components";

const Styles = styled.div`
	background: #fff;
`;
const Link = (props) => {
	if (props.type === "Daftar") {
		return (
			<NavLink to="/signup" className="btn btn-signup">
				{props.type}
			</NavLink>
		);
	}
	return (
		<NavLink to="/login" className="btn btn-signup">
			{"Masuk"}
		</NavLink>
	);
};

export const NavForm = (props) => {
	return (
		<nav className="navbar navbar-light">
			<div className="container">
				<NavLink to="/" className="navbar-brand fw-bold">
					<img
						src={logo}
						alt=""
						className="d-inline-block align-text-top img-fluid"
						width="24"
					/>
					Berhasil.id
				</NavLink>
				<Link type={props.type}></Link>
			</div>
		</nav>
	);
};

export const NavMain = (isPremium) => {
	return (
		<Styles>
			<Navbar expand="lg">
				<Container fluid>
					<div className="d-flex">
						<Navbar.Brand>
							<NavLink to="/" className="navbar-brand fw-bold">
								<img
									src={logo}
									alt=""
									className="d-inline-block align-text-top img-fluid"
									width="24"
								/>
							</NavLink>
						</Navbar.Brand>
						<input
							className="form-control me-2"
							type="search"
							placeholder="Pencarian"
							aria-label="Search"
						/>
						{isPremium && (
							<button className="btn btn-premium">Premium</button>
						)}
					</div>
					<Navbar.Toggle aria-controls="navbarScroll" />
					<Navbar.Collapse id="navbarScroll">
						<Nav
							className="ms-auto my-2 my-lg-0"
							style={{ maxHeight: "100px" }}
							navbarScroll
						>
							<Nav.Link href="#action1">UMKM</Nav.Link>
							<Nav.Link href="#action2">Investor</Nav.Link>
						</Nav>
						<div className="d-flex justify-content-around">
							<img className="img-fluid" src={home} width="36" />
							<img
								className="img-fluid"
								src={message}
								width="36"
							/>
							<img
								className="img-fluid"
								src={bellIcon}
								width="36"
							/>
							<NavLink to="/biodata">
								<img
									className="img-fluid"
									src={dp}
									width="36"
								/>
							</NavLink>
						</div>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</Styles>
	);
};
