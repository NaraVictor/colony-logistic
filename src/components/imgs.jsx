export const ImgBox = ({ imgUrl, alt }) => {
	return (
		<div className="img-box img" data-aos="fade-in">
			<img src={imgUrl} data-aos="fade-up" alt={alt} />
		</div>
	);
};

export const ImgContainerLeft = ({ imgUrl, alt }) => {
	return (
		<div className="img-container-left">
			<img src={imgUrl} alt={alt} />
		</div>
	);
};

export const ImgContainerRight = ({ imgUrl, alt }) => {
	return (
		<div className="img img-container-right" data-aos="fade-in">
			<img src={imgUrl} alt={alt} />
		</div>
	);
};
