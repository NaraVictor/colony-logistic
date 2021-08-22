const SubNav = (props) => {
	return (
		<div className="sub-nav">
			<span className="contact-info text-center text-md-left">
				<a href="tel:+233507183456">
					<i className="fas fa-phone-alt pr-2 fa-1x"></i>
					050 718 3456
				</a>
				<a
					href="mailto:info@thecolonylogistics.com"
					className="ml-3 d-block d-md-inline">
					<i className="fas fa-envelope pr-2 fa-1x"></i>
					info@thecolonylogistics.com
				</a>
			</span>
			<span className="social-media d-none d-md-inline">
				<a href="https://wa.me/233507183456" className="pr-2">
					<i className="fab fa-whatsapp pr-md-2"></i>
				</a>
				<a
					href="https://facebook.com/thecolonylogistics"
					target="_blank"
					rel="noreferrer"
					className="pr-2">
					<i className="fab fa-facebook-f pr-md-2"></i>
				</a>
				<a href="#" className="pr-2">
					<i className="fab fa-instagram pr-md-2"></i>
				</a>
				<a
					href="https://www.linkedin.com/company/the-colony-logistics"
					target="_blank"
					rel="noreferrer"
					className="pr-2">
					<i className="fab fa-linkedin pr-md-2"></i>
				</a>
				<a
					href="https://twitter.com/colony_logistic"
					target="_blank"
					rel="noreferrer"
					className="pr-2">
					<i className="fab fa-twitter"></i>
				</a>
			</span>
		</div>
	);
};

export default SubNav;
