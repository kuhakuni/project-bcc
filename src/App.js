import { Route, Routes } from "react-router-dom";
import { React, useState } from "react";
import Home from "./pages/Home/Home.jsx";
import Login from "./pages/Login/Login";
import { Signup } from "./pages/Signup/Signup";
import { NavMain } from "./components/Navbar/Navbar";
import { AuthContext } from "./config/Auth";
import { PrivateRoute, RestrictedRoute } from "./config/PrivateRoute";
import "./App.css";
import { Biodata } from "./pages/Biodata/Biodata.js";

function App() {
	const isAnyToken = JSON.parse(localStorage.getItem("token"));
	const userId = JSON.parse(localStorage.getItem("id"));
	const [authToken, setAuthToken] = useState(isAnyToken);
	const [user, setUser] = useState(userId);

	const setToken = (token, id) => {
		localStorage.setItem("token", JSON.stringify(token));
		localStorage.setItem("id", JSON.stringify(id));
		setAuthToken(authToken);
		setUser(user);
	};
	return (
		<AuthContext.Provider value={{ authToken, setToken, user }}>
			<Routes>
				<Route
					path="/"
					element={
						<PrivateRoute>
							<NavMain isPremium={true} />
							<div className="container-main">
								<Home />
							</div>
						</PrivateRoute>
					}
				/>
				<Route
					path="/biodata"
					element={
						<PrivateRoute>
							<Biodata />
						</PrivateRoute>
					}
				/>
				<Route
					path="/login"
					element={
						<RestrictedRoute>
							<Login />
						</RestrictedRoute>
					}
				/>
				<Route
					path="/signup"
					element={
						<RestrictedRoute>
							<Signup />
						</RestrictedRoute>
					}
				/>
			</Routes>
		</AuthContext.Provider>
	);
}

export default App;
