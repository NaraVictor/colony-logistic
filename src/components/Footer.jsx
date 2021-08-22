const Footer = (props) => {
	return (
		<footer className="pt-5 footer">
			<div className="container">
				<div className="row">
					<div className="col-12 col-md-6 mb-4 mb-md-0">
						<h4 className="footer-title mb-4 color-pink">
							The Colony Logistics Services Ltd
						</h4>
						<div>
							<p>
								The Colony Logistics is a registered Ghanaian company licensed
								to provide cleaning and logistics services. We are a company
								with many years of experience in providing excellent logistics
								solutions around the globe.
							</p>
						</div>
					</div>
					<div className="col-12 col-md-6">
						<div className="row">
							<div className="col-3 text-right">
								<i className="fas fa-phone-alt"></i>
							</div>
							<div className="pl-3 col-9">
								<a href="tel:+233303941724">+233 (0)30 394 1724</a>
								<br />
								<a href="tel:+233507183456">+233 (0)50 718 3456</a>
							</div>
						</div>
						<div className="row">
							<div className="col-3 text-right">
								<i className="far fa-envelope"></i>
							</div>
							<div className="pl-3 col-9">
								<a href="mailto:info@thecolonylogistics.com">
									info@thecolonylogistics.com
								</a>
							</div>
						</div>
						<div className="row">
							<div className="col-3 text-right">
								<i className="far fa-calendar"></i>
							</div>
							<div className="pl-3 col-9">
								<span>Mon-Fri 8:30am – 5:00pm</span>
							</div>
						</div>

						<div className="row">
							<div className="col-3 text-right">
								<i className="fas fa-map-marker"></i>
							</div>
							<div className="pl-3 col-9">
								<a href="https://goo.gl/maps/dwEbd2W77nAb6MSQ7">
									Hse 365, 73 Lakeside Road, Nii Amasa Nikoi Avenue, Ashale
									Botwe
								</a>
							</div>
						</div>
					</div>
				</div>
				<div className="mt-3 text-center m-0">
					<div>
						<i className="fab fa-facebook-f pr-1"></i>
						<i className="fab fa-instagram pr-1"></i>
						<i className="fab fa-linkedin pr-1"></i>
						<i className="fab fa-twitter"></i>
					</div>
					<span>the colony logistics</span>
				</div>
				<div className="row text-center">
					<div className="col">
						<div className="divider my-3"></div>
						<p>@2021 The Colony Logistics Services</p>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
