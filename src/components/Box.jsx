const Box = ({ imgUrl, body, classes, title, children }) => {
	return (
		<div className={`box ${classes}`}>
			{imgUrl && <img className="box-img" src={imgUrl} alt="profile shot" />}
			<h4 className="box-title">{title}</h4>
			<div className="box-body">
				<p>{body}</p>
			</div>
			<div className="box-footer">{children}</div>
		</div>
	);
};

export default Box;
