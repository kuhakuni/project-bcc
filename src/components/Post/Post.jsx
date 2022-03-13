import React, { useState } from "react";
import {
	dp,
	likedIcon,
	notLiked,
	commentIcon,
	shareIcon,
	cake,
} from "../../assets";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "./post.css";

const PostTitle = styled.h5`
	font-size: 1.5rem;
	font-weight: 700;
	color: #03045e;
	margin-bottom: 0.5rem;
`;
const PostSubtitle = styled.h6`
	font-size: 1rem;
	font-weight: 400;
	color: #0077b6;
	margin-top: -0.25rem;
	margin-bottom: 0.5rem;
`;
const Post = () => {
	const [likes, setLikes] = useState(false);
	const likeHandler = () => {
		let isLiked = !likes ? true : false;
		setLikes(isLiked);
	};

	return (
		<article className={"post halfborder"}>
			<Link to={`/post`} className="row">
				<div className="col-md-4">
					<img src={cake} alt="post_image" className="post__image" />
				</div>
				<div className="col-md-8">
					<div className="card-body">
						<PostTitle>
							Kue Tart Cocok Untuk Ulang Tahun Orang Tersayang
						</PostTitle>
						<PostSubtitle>08:22 • 25 Feb 2022</PostSubtitle>
						<p className="card-text">
							Tar adalah suatu makanan yang dipanggang, bahan
							dasarnya kue pastri dan diisi dengan sesuatu yang
							manis atau gurih, tetapi bagian atas makanan ini
							tidak ditutup atau dilapisi dengan pastri. Isi dari
							tar modern biasanya berbasis buah, terkadang dengan
							kustar. Sedangkan tartlet adalah tar kecil,
							contohnya tar telur (egg tart). Istilah Prancis
							tarte dapat diterjemahkan menjadi tar ataupun pai,
							sebab keduanya pada dasarnya sama dengan
							pengecualian bahwa isi pai biasanya ditutup
							seluruhnya dengan pastri, sementara tar dibiarkan
							terbuka.
						</p>
					</div>
					<hr />
					<Link to={`/user/`}>
						<div className="d-flex align-items-center">
							<img
								src={dp}
								alt="profileImage"
								className="post__dp roundimage"
							/>
							<div className="user-info">
								<h3>Guciers</h3>
								<p>Produk Kreatif • UMKM</p>
							</div>
						</div>
					</Link>
				</div>
			</Link>
			<div className="post__footer">
				<div className="post__reactions">
					<img
						src={likes ? likedIcon : notLiked}
						alt="like"
						onClick={likeHandler}
					/>
					<Link to={`/post`}>
						<img src={commentIcon} alt="comment" />
					</Link>
					<Link to={`/share`}>
						<img src={shareIcon} alt="share" />
					</Link>
					<p>{""}</p>
				</div>
			</div>
		</article>
	);
};

export default Post;
