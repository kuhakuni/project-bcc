import axios from "axios";

export const API = axios.create({
	baseURL: "http://ae0e-203-190-45-126.ngrok.io",
	headers: {
		"Access-Control-Allow-Origin": "*",
		"Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
		"Content-Type": "application/json",
	},
});
