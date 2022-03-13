import "./createPost.css";
import { dp, imagePostIcon, vidPostIcon } from "../../assets";

const CreatePost = () => {
	// local states
	const loadVideo = (e) => {};

	const loadImage = (e) => {};

	const submitHandler = async (e) => {};

	return (
		<div className="container-createpost">
			<section className="createpost createpost__left">
				<img src={dp} alt="profile" className="roundimage" />
				<h1>Cakiest</h1>
				<h5>Kuliner</h5>
			</section>
			<article className="createpost createpost__right">
				<form>
					<div className="post__area">
						<img
							src={dp}
							alt="post"
							className="roundimage img-post"
						/>
						<div className="post__area__right">
							<textarea placeholder="Silahkan mulai postingan" />
							{/* {preview && (
								<img
									src={preview}
									alt="uploaded file"
									className="uploaded-image"
								/>
							)}
							{previewVideo && (
								<video width="320" height="240">
									<source src={previewVideo} />
								</video>
							)} */}
							<div className="btns">
								<div className="upload">
									<label htmlFor="image-post">
										<img
											src={imagePostIcon}
											alt="Post Foto"
										/>
										{"Foto"}
									</label>
									<input
										type="file"
										id="image-post"
										accept="image/png, image/jpeg"
										onChange={loadImage}
									/>
								</div>
								<div className="upload">
									<label htmlFor="video-post">
										<img
											src={vidPostIcon}
											alt="Post Foto"
										/>
										{"Video"}
									</label>
									<input
										type="file"
										id="video-post"
										accept="video/mp4,video/x-m4v,video/*"
										onChange={loadVideo}
									/>
								</div>
								<button
									type="submit"
									className="btn-submit"
									aria-label="submit"
								>
									Post
								</button>
							</div>
						</div>
					</div>
				</form>
			</article>
		</div>
	);
};

export default CreatePost;
