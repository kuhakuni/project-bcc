import CreatePost from "../../components/CreatePost/CreatePost";
import UMKM from "../../components/UMKM/UMKM";
import Iklan from "../../components/Iklan/Iklan";
import Post from "../../components/Post/Post";
import { useState } from "react";
import useSWR from "swr";
import axios from "axios";
import { API } from "../../config/api";
import "./home.css";

// const fetcher = (url, token) => {
// 	axios
// 		.get(url, { headers: { Authorization: "Bearer " + token } })
// 		.then((res) => res.data.data);
// };

const Home = () => {
	// const { data, error } = useSWR(
	// 	[
	// 		"http://d706-203-190-45-126.ngrok.io/berhasil_id/public/api/user/posts",
	// 		localStorage.getItem("token"),
	// 	],
	// 	fetcher,
	// 	{ refreshInterval: 200 }
	// );
	// const posts = (async () => {
	// 	await API.get("/berhasil_id/public/api/user/posts", {
	// 		headers: {
	// 			Authorization: "Bearer " + localStorage.getItem("token"),
	// 		},
	// 	});
	// })();
	return (
		<section className="home">
			<main className="home__left">
				<CreatePost />
				<Post />
			</main>
			<aside className="home__right">
				<UMKM />
				<Iklan />
			</aside>
		</section>
	);
};

export default Home;
