import img from "../../static/img/img.png";

const ServicesView = (props) => {
	return (
		<>
			<section className="services-hero hero-mini p-4">
				<div className="container">
					<div className="row hero-content">
						<div className="col">
							<h3 className="section-title text-light">
								<span>Our</span>Services
							</h3>
						</div>
					</div>
				</div>
			</section>
			<section className="section-service">
				<div className="container">
					<div className="float-box" data-aos="fade-down">
						<p>
							We are dedicated to providing the most effective and efficient
							Cleaning and Janitorial Services to our clients.
						</p>
						<p>
							We take great professional and personal interest in delivering
							client-oriented quality services to meet the demands of best
							practices and international standards. The Colony Logistics
							Limited (TCLL) is ready to provide excellent commercial cleaning
							and janitorial services using personnel with the right skills and
							experience. Our cleaning and janitorial services span from:
						</p>
					</div>
					<div className="divider"></div>
					<div className="row py-5">
						<div data-aos="zoom-in" className="col-md-5 col-12">
							<img src={img} alt="service illustration" />
						</div>

						<div data-aos="fade-left" className="col-md-7 col-12">
							<h4 className="service-title">
								<span>Deep</span> Cleaning
							</h4>
							<p>
								We focus on conducting a thorough clean where we ensure the
								removal of deep dirt and leave no spot untouched by covering
								areas that are not mostly considered in regular cleaning
								processes. With this service, all arrears are covered from
								arears behind appliances, under beds, interior windows, window
								frames, baseboards and doors amongst others.
							</p>
						</div>
					</div>
				</div>
			</section>
			<section className="my-5 py-5 section-service">
				<div className="container">
					<div className="row">
						<div
							data-aos="fade-right"
							className="col-md-7 col-12 order-2 order-md-0">
							<h4 className="service-title">
								<span>Event</span> Cleaning
							</h4>
							<p>
								Whatsoever the size or type of event you intend hosting, we
								provide complete cleaning services that cater for before, during
								and after the event. Our well trained team focus on details and
								ensure the venue is as clean and worthy of use, maintains a
								level of tidiness throughout the event and finally sign off the
								event as clean as clean can be.
							</p>
						</div>
						<div data-aos="zoom-in" className="col-md-4 col-12 order-1">
							<img src={img} alt="service illustration" />
						</div>
					</div>
				</div>
			</section>
			<section className="py-5 section-service">
				<div className="container">
					<div className="row">
						<div className="col-md-5 col-12" data-aos="zoom-in">
							<img src={img} alt="service illustration" />
						</div>

						<div className="col-md-7 col-12" data-aos="fade-left">
							<h4 className="service-title">
								<span>Commercial and Residential</span> Cleaning
							</h4>
							<p>
								Our service delivery range from commercial or institutional
								service offerings to the cleaning of residences or homes.
							</p>
						</div>
					</div>
				</div>
			</section>
			<section className="py-5 section-service">
				<div className="container">
					<div className="row">
						<div
							className="col-md-7 col-12 order-2 order-md-0"
							data-aos="fade-right">
							<h4 className="service-title">
								<span>Construction</span> Cleaning
							</h4>
							<p>
								Prior to the full completion of construction works, lots of
								waste is created. These waste and dirt created often need to be
								well cleaned before installations of floor coverings and
								interior fittings are made. We have therefore put in place a
								comprehensive guideline to ensure these sites are well cleaned.
							</p>
						</div>
						<div className="col-md-5 col-12 order-1" data-aos="fade-left">
							<img src={img} alt="service illustration" />
						</div>
					</div>
				</div>
			</section>
			<section className="py-5 section-service">
				<div className="container">
					<div className="row">
						<div className="col-md-5 col-12" data-aos="zoom-in">
							<img src={img} alt="service illustration" />
						</div>

						<div className="col-md-7 col-12" data-aos="fade-right">
							<h4 className="service-title">
								<span>Laundry</span> Services
							</h4>
							<p>
								Our highly skilled team and our use of state of the art
								equipment enable us to provide stainless, neat and professional
								services. We provide quick and on-demand services that meet our
								client’s needs. Pickups and drop-offs to residencies are also
								offered.
							</p>
						</div>
					</div>
				</div>
			</section>
			<section className="py-5 section-service">
				<div className="container">
					<div className="row">
						<div
							className="col-md-7 col-12 order-2 order-md-0"
							data-aos="fade-right">
							<h4 className="service-title">
								<span>Facility</span> Management
							</h4>
							<p>
								Allow us manage all aspects of your facilities to ensure the
								safety, functionality and efficiency of all equipment and the
								built environment as a whole. We integrate our processes, people
								and systems to ensure that businesses can focus on what really
								matters to them
							</p>
						</div>

						<div className="col-md-5 col-12 order-1" data-aos="zoom-in">
							<img src={img} alt="service illustration" />
						</div>
					</div>
				</div>
			</section>
			<section className="py-5 section-service">
				<div className="container">
					<div className="row">
						<div className="col-md-5 col-12" data-aos="zoom-in">
							<img src={img} alt="service illustration" />
						</div>

						<div className="col-md-7 col-12" data-aos="fade-left">
							<h4 className="service-title">
								<span>Fumigation</span>
							</h4>
							<p>
								We also perform fumigations when requested. Our trained team
								together with the use of effective resources help exterminate
								pests and parasites inhabiting a place at any point in time.
							</p>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export { ServicesView };
