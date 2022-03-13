import "./Footer.css";
import styled from "styled-components";
const Biodata = styled.footer`
	background: #caf0f8;
	padding: 1rem;
`;
const Title = styled.h2`
	font-weight: 700;
	color: #03045e;
	font-size: 2rem;
`;
const Paragraph = styled.p`
	font-weight: 500;
	color: #03045e;
	font-size: 1rem;
`;
export const FooterBiodata = () => {
	return (
		<Biodata>
			<div className="container">
				<Title>Berhasil.id</Title>
				<Paragraph>
					adalah website untuk menghubungkan jutaan investors untuk
					membantu mengembangkan
					<span className="ms-1 fw-bold">usaha</span>mu
				</Paragraph>
			</div>
		</Biodata>
	);
};
export const FooterLogin = () => {
	return (
		<>
			<section className="description">
				<div className="container">
					<div className="row">
						<div className="col-md-6">
							<h1>Untuk apa Berhasil.id?</h1>
							<div className="btn-description">
								<p>Temukan Investor</p>
								<i className="bi bi-chevron-right"></i>
							</div>
							<div className="btn-description">
								<p>Temukan UMKM</p>
								<i className="bi bi-chevron-right"></i>
							</div>
							<div className="btn-description">
								<p>Temukan Produk</p>
								<i className="bi bi-chevron-right"></i>
							</div>
						</div>
						<div className="col-md-5 offset-md-1 definition">
							<h2>Berhasil.id</h2>
							<p>
								adalah website untuk menghubungkan jutaan
								investors untuk membantu mengembangkan
								<span className="ms-1 fw-bold">usaha</span>mu
							</p>
						</div>
					</div>
				</div>
			</section>
			<section className="ad">
				<div className="container">
					<div className="row">
						<div className="col-md-8">
							<p>
								Posting produk Anda untuk dilihat jutaan orang
							</p>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};
