import React, { useEffect } from "react";
import Gallery from "../../components/Gallery/Gallery";
import UMKM from "../../components/UMKM/UMKM";
import Post from "../../components/Post/Post";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import "./profile.css";

const Profile = () => {
	return (
		<section className="profile">
			<article className="profile__left">
				<ProfileCard />
			</article>
			<article className="profile__center"></article>
			<article className="profile__right">
				<UMKM />
			</article>
		</section>
	);
};

export default Profile;
