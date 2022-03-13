import React, { useEffect, useState } from "react";
import { dp } from "../../assets";
import { Link } from "react-router-dom";
import { toggleSidebar } from "../../features/modalSlice";
import "./iklan.css";

const Iklan = () => {
	return (
		<section className="iklan">
			<div>
				<h2>Iklan</h2>
				<Link to={`/user/`}>
					<div className="produk">
						<div>
							<img src={dp} alt={"gambar iklan"} />
						</div>
						<div className="info-iklan">
							<h3>UMKM</h3>
							<p>Test2</p>
						</div>
					</div>
				</Link>
			</div>
		</section>
	);
};

export default Iklan;
