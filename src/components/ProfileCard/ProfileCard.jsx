import React, { useState } from "react";
import "./profilecard.css";
import {
	dp,
	clockIcon,
	cakeIcon,
	locationIcon,
	mailIcon,
	cameraIcon,
} from "../../assets";
const ProfileCard = ({ id }) => {
	const [isEditing, setIsEditing] = useState(false);
	return (
		<section className="profilecard">
			<header>
				<div>
					<img
						src={dp}
						alt="profile_image"
						className="profilecard__dp roundimage"
					/>
				</div>
				<h1>{"User"}</h1>
				<h2>{"About"}</h2>
			</header>
			<article>
				<div className="profilecard__info">
					<img src={clockIcon} alt="join date" />
					<h3>Tanggal</h3>
				</div>
				<div className="profilecard__info">
					<img src={locationIcon} alt="location" />
					<h3>Lokasi</h3>
				</div>
				<div className="profilecard__info">
					<img src={mailIcon} alt="mail" />
					<h3>Email</h3>
				</div>
				<div className="profilecard__info">
					<img src={cakeIcon} alt="date of birth" />
					<h3>Info</h3>
				</div>
			</article>
		</section>
	);
};

export default ProfileCard;
