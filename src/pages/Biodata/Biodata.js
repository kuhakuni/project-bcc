import "./Biodata.css";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { FooterBiodata } from "../../components/Footer/Footer";
import styled from "styled-components";
import Picture from "../../assets/Rectangle 54.png";
const FormUMKM = () => {
	return (
		<>
			<h1 className="fs-4">Lengkapi Data UMKM</h1>
			<div className="mb-3">
				<label htmlFor="formNameUMKM" className="form-label">
					Nama UMKM
				</label>
				<input type="text" className="form-control" id="formNameUMKM" />
			</div>
			<div className="mb-3">
				<label htmlFor="formBidang" className="form-label">
					Bidang UMKM
				</label>
				<input type="text" className="form-control" id="formBidang" />
			</div>
			<div className="row mb-3">
				<div className="col">
					<label htmlFor="pendapatan" className="form-label">
						Pendapatan Sebulan
					</label>
					<input
						type="text"
						className="form-control"
						id="pendapatan"
					/>
				</div>
				<div className="col">
					<label htmlFor="lap-keu" className="form-label">
						Unggah Laporan Keuangan
					</label>
					<input type="text" className="form-control" id="lap-keu" />
				</div>
			</div>
			<div className="mb-3">
				<label htmlFor="lamaKerja" className="form-label">
					Lama Bekerja menjadi pelaku UMKM
				</label>
				<input type="text" className="form-control" id="lamaKerja" />
			</div>
			<div className="row mb-3">
				<div className="col">
					<label htmlFor="jumlahBarang" className="form-label">
						Jumlah barang laku terjual
					</label>
					<input
						type="text"
						className="form-control"
						id="jumlahBarang"
					/>
				</div>
				<div className="col">
					<label htmlFor="bukti" className="form-label">
						Unggah Bukti
					</label>
					<input type="text" className="form-control" id="bukti" />
				</div>
			</div>
			<div className="mb-3">
				<label htmlFor="lamaKerja" className="form-label">
					Prestasi UMKM *Unggah bukti prestasi
				</label>
				<input type="text" className="form-control" id="lamaKerja" />
			</div>
		</>
	);
};
const Footer = styled.footer``;
export const Biodata = () => {
	const [isUMKM, setIsUMKM] = useState("1");
	useEffect(() => {
		document.body.style.backgroundColor = "#fff";
	}, []);
	return (
		<>
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
				</div>
			</nav>
			<section className="biodata mb-3">
				<div className="container">
					<div className="row">
						<div className="col-md-6">
							<h1 className="fs-4">Lengkapi Data Berikut</h1>
							<form>
								<div className="mb-3 select">
									<label htmlFor="select-role">
										Sebagai apa Anda?
									</label>
									<select
										className="form-select"
										name=""
										id="select-role"
										onChange={(e) =>
											setIsUMKM(e.currentTarget.value)
										}
									>
										<option value="1">Pelaku UMKM</option>
										<option value="0">Investors</option>
									</select>
								</div>
								<div className="mb-3">
									<label
										htmlFor="formName"
										className="form-label"
									>
										Nama
									</label>
									<input
										type="text"
										className="form-control"
										id="formName"
									/>
								</div>
								<div className="mb-3">
									<label
										htmlFor="formDateOfBirth"
										className="form-label"
									>
										Tanggal Lahir
									</label>
									<input
										type="date"
										className="form-control"
										id="for mDateOfBirth"
									/>
								</div>
								<div className="mb-3">
									<label
										htmlFor="formPhone"
										className="form-label"
									>
										Nomor Handphone
									</label>
									<input
										type="number"
										className="form-control"
										id="formPhone"
									/>
								</div>
								<div className="mb-3">
									<label
										htmlFor="formJob"
										className="form-label"
									>
										Pekerjaan
									</label>
									<input
										type="text"
										className="form-control"
										id="formJob"
									/>
								</div>
								<div className="mb-3">
									<label
										htmlFor="formGaji"
										className="form-label"
									>
										Pendapatan Sebulan
									</label>
									<input
										type="number"
										className="form-control"
										id="formGaji"
									/>
								</div>
								{isUMKM === "1" ? <FormUMKM /> : <></>}
								<div className="form-check">
									<input
										className="form-check-input"
										type="checkbox"
										value=""
										id="flexCheckDefault"
									/>
									<label
										className="form-check-label"
										htmlFor="flexCheckDefault"
									>
										Centang jika Anda telah memasukkan data
										dengan{" "}
										<span className="fw-bold">benar</span>
									</label>
								</div>
								<div className="form-check mb-3">
									<input
										className="form-check-input"
										type="checkbox"
										value=""
										id="flexCheckDefault2"
									/>
									<label
										className="form-check-label"
										htmlFor="flexCheckDefault2"
									>
										Centang jika Anda telah menyetujui semua
										<span className="fw-bold ms-1">
											persyaratan
										</span>
									</label>
								</div>
								<button
									type="submit"
									className="btn btn-primary"
								>
									Konfirmasi
								</button>
							</form>
						</div>
						<div className="col-md-6">
							<img src={Picture} alt="" className="img-fluid" />
						</div>
					</div>
				</div>
			</section>
			<FooterBiodata />
		</>
	);
};
