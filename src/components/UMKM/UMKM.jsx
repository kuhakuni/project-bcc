import React, { useEffect, useState } from "react";
import "./UMKM.css";
import { API } from "../../config/api";
import { useAuth } from "../../config/Auth";
import { UmkmCard } from "../Card/Card";
async function getData(token) {
	const url =
		"http://ae0e-203-190-45-126.ngrok.io/berhasil_id/public/api/user/recommendations";
	try {
		await fetch(url, {
			method: "GET",
			headers: { Authorization: "Bearer " + token.authToken },
		})
			.then((res) => res.json())
			.then((res) => {
				if (res.success) {
					return res.data;
				}
			});
	} catch (error) {
		console.log(error);
	}
}
const UMKM = () => {
	const token = useAuth();
	const [umkm, setUmkm] = useState([]);
	useEffect(() => {
		const url =
			"http://ae0e-203-190-45-126.ngrok.io/berhasil_id/public/api/user/recommendations";
		fetch(url)
			.then((res) => res.json())
			.then((res) => {
				if (res.success) {
					setUmkm(res.data);
				}
			});
	}, [umkm]);
	console.log(umkm);
	const dataUMKM = umkm.rekomendasi_umkm ? umkm.rekomendasi_umkm : [];
	return (
		<section className="umkm">
			<div>
				<h2>Saran UMKM</h2>
				{dataUMKM.map((umkm) => {
					<UmkmCard
						key={umkm.id_umkm}
						nama={umkm.nama_umkm}
						bidang={umkm.bidang_umkm}
					/>;
				})}
			</div>
		</section>
	);
};

export default UMKM;
