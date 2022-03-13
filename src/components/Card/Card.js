import imgPost from "../../assets/post.png";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { dp } from "../../assets";

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

const PostImage = styled.div`
	background-image: url(${imgPost});
	${"" /* max-width: 100vw; */}
	${"" /* height: 500px; */}
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	flex: 0 0 auto;
	width: 33.3333333333%;
`;
export const UserPostCard = () => {
	return (
		<div className="card p-3">
			<div className="row align-items-center">
				{/* <div className="col-md-4"> */}
				<PostImage></PostImage>
				{/* <img className="img-fluid" src={imgPost} alt="post" /> */}
				{/* </div> */}
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
				</div>
			</div>
		</div>
	);
};

export const UmkmCard = (nama, bidang) => {
	<Link to={`/user/`}>
		<div className="user">
			<img src={dp} alt={"umkmimage"} className="roundimage" />
			<div className="info-user">
				<h3>{nama}</h3>
				<p>{bidang}</p>
			</div>
		</div>
	</Link>;
};
