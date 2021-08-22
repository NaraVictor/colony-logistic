const ContactView = (props) => {
	return (
		<>
			<section className="hero-mini p-md-5 p-2">
				<div className="container">
					<div className="row hero-content text-light">
						<div className="col">
							<h1 className="section-title text-light">
								Contact <span>Us</span>
							</h1>
							<p>We love to hear from you...</p>
						</div>
					</div>
				</div>
			</section>
			<section className="section">
				<div className="container">
					<div className="row">
						<div className="col mt-5">
							<div className="contact-map mb-3">
								<h3 className="section-title">
									<span>Locate</span> Us
								</h3>
								<div className="divider"></div>

								<iframe
									title="Colony Logistics Location"
									src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317.1790372122892!2d-0.1380307010530346!3d5.687864021027516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf83f3bf54d7d9%3A0x422b145dceeab676!2sThe%20Colony%20Logistics%20Services!5e0!3m2!1sen!2sgh!4v1625018422512!5m2!1sen!2sgh"
									style={{ border: 0 }}
									allowFullScreen=""
									loading="lazy"
									className="map"></iframe>
							</div>
							<div className="contact-form mt-5">
								<h3 className="section-title">
									Get <span>intouch</span>
								</h3>

								<div className="divider"></div>

								<div
									className="float-bottom text-left text-md-center"
									data-aos="fade-up">
									<div className="float-group mx-auto">
										<i className="far fa-envelope"></i>
										<a href="mailto:info@thecolonylogistics.com">
											info@thecolonylogistics.com
										</a>
									</div>
									<div className="float-group mx-auto mt-1 ml-md-2">
										<i className="fas fa-phone-alt"></i>
										<a href="tel:+233303941724">0303941724</a> &
										<a href="tel:+233507183456"> 0507183456</a>
									</div>
									<div className="float-group mx-auto mt-1">
										<i className="fas fa-map-marker"></i>
										<a href="https://goo.gl/maps/dwEbd2W77nAb6MSQ7">
											Hse 365, 73 Lakeside Road, Nii Amasa Nikoi Avenue, Ashale
											Botwe
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export { ContactView };
