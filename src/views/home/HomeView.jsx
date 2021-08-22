import {
	ImgBox,
	ImgContainerLeft,
	ImgContainerRight,
} from "../../components/imgs";
import bucket from "../../static/img/bucket.png";
import satisfationImg from "../../static/img/img-2.jpg";
import whyUsImg from "../../static/img/img-3.jpg";

const HomeView = (props) => {
	return (
		<>
			<section className="hero hero-home py-4"></section>
			<section className="section-welcome">
				<div className="pt-5">
					<div className="row py-5">
						<div className="col-md-5 col-12" data-aos="fade-down">
							<ImgContainerLeft
								imgUrl={bucket}
								alt="cleaners bucket filled with brushes and detergents"
							/>
						</div>
						<div
							className="col-md-6 col-12 px-5 mt-4 mt-md-0"
							data-aos="zoom-in">
							<h3 className="section-title">
								You're <span>Welcome</span>
							</h3>
							<p>
								Welcome to The Colony Logistics Limited (TCLL), a global leader
								in cleaning and logistics services, bringing real-time solutions
								to all your needs. The Colony Logistics branded processes,
								outstanding client services, and TCLL Guarantee Signature have
								positioned us as the industry leaders in client retention. We
								deliver client-oriented quality services to meet the demand of
								international standards. We are effective and detail oriented in
								our service delivery and we implore the use of the most
								convenient technology and resources to give the best experience
								to our clients. Our TCLL Signature Clean which describes our
								quality commitment and our quality processes ensure we deliver
								only the best. In achieving TCLL Signature Clean results, our
								staff receive the most rigorous training in the industry – an
								intensive program to prepare themselves to become career
								cleaning professionals who are vested in the satisfaction of
								each and every client, well-versed in the latest and most
								effective cleaning technologies and attuned to the importance of
								even the smallest details.
							</p>
						</div>
					</div>
					<div className="divider"></div>
				</div>
			</section>
			{/* <section className="section section-services-brief py-5">
				<div className="container">
					<h3 className="section-title">
						Our <span>Services</span>
					</h3>
					<div className="row mx-auto">
						{Services.map((service) => {
							return (
								<div
									key={service.title}
									className="col-md-3 col-12 mb-2"
									data-aos="zoom-in">
									<Box title={service.title} body={service.desc}>
										<Link to="/services" className="button btn-outlined">
											Learn more
											<i className="fas fa-angle-right pl-2"></i>
										</Link>
									</Box>
								</div>
							);
						})}
					</div>
					<div className="divider pt-4"></div>
				</div>
			</section> */}
			<section className="section section-why-us py-5">
				<div className="row m-0">
					<div className="col-md-6 offset-1 col-12" data-aos="fade-up">
						<h3 className="section-title">
							<span>Why</span> Choose Us
						</h3>
						<p>
							It is simple – we create Outstanding Cleaning Processses,
							Measurable Service Delivery and Guaranteed Results. TCLL’s
							operating systems, branded processes, and outstanding client
							service have formed the foundation for delivering exceptional
							services.
						</p>
					</div>
					<div className="col-md-5 col-12">
						<ImgContainerRight imgUrl={whyUsImg} alt="why choose us" />
					</div>
				</div>
				<div className="divider pt-5"></div>
			</section>

			<section className="section section-satisfaction py-5">
				<div className="container" data-aos="fade-up">
					<h3 className="section-title text-center">Guaranteed Satisfaction</h3>
					<p>
						We are so confident of our services that we actually guarantee your
						satisfaction with us. TCLL guarantees to respond to and promptly
						resolve any specific service issues within one business day. If for
						any reason, TCLL should fail to meet either of these obligations,
						you are entitled to a complimentary cleaning service call. This is a
						key differentiator between TCLL and other suppliers.
					</p>
					<div className="row">
						<div className="col-md-6 col-12">
							<p>
								In addition, TCLL increases your return on investment by
								providing the following:
								<ul>
									<li>
										A well-trained and experienced cleaning crew that you can
										trust
									</li>
									<li>
										A comprehensive cleaning schedule designed specifically for
										your facility
									</li>
									<li>
										The expertise and ability to provide additional services
										when needed
									</li>
									<li>
										Proactive communication and a ready response any time the
										need arises
									</li>
									<li>
										Quality assurance processes that consider your point of view
									</li>
									<li>
										“Green”cleaning chemicals that promote improved air quality
									</li>
									<li>
										Hospital-grade disinfectants that kill bacteria and germs
									</li>
									<li>
										Monitoring supplies and advising on restocking them if that
										is your preference
									</li>
									<li>A partner who helps you manage your facility</li>
								</ul>
							</p>
						</div>
						<div className="col-md-6 col-12">
							<ImgBox imgUrl={satisfationImg} alt="Guaranteed Satisfaction" />
						</div>
					</div>
					<div className="row">
						<div className="col-12"></div>
					</div>
				</div>
			</section>

			{/* <section
				className="section section-customer-satisfaction py-5"
				data-aos="fade-in">
				<div className="container">
					<div className="row">
						<div className="col-md-7 col-12 order-1">
							<h3 className="section-title">
								Customer <span>Satisfaction</span>
							</h3>
							<p>
								We are so confident of our services that we actually guarantee
								your satisfaction with us. TCLL guarantees to respond to and
								promptly resolve any specific service issues within one business
								day. If for any reason, TCLL should fail to meet either of these
								obligations, you are entitled to a complimentary cleaning
								service call. This is a key differentiator between TCLL and
								other suppliers.
							</p>
							<p>
								In addition, TCLL increases your return on investment by
								providing the following:
							</p>
							<ul>
								<li>
									A well-trained and experienced cleaning crew that you can
									trust
								</li>
								<li>
									A comprehensive cleaning schedule designed specifically for
									your facility
								</li>
								<li>
									The expertise and ability to provide additional services when
									needed
								</li>
								<li>
									Proactive communication and a ready response any time the need
									arises
								</li>
								<li>
									Quality assurance processes that consider your point of view
								</li>
								<li>
									“Green”cleaning chemicals that promote improved air quality
								</li>
								<li>
									Hospital-grade disinfectants that kill bacteria and germs
								</li>
								<li>
									Monitoring supplies and advising on restocking them if that is
									your preference
								</li>
								<li>A partner who helps you manage your facility</li>
							</ul>
						</div>
						<div className="col-md-4 col-12 order-md-2 order-0">
							<img src={img} alt="" />
						</div>
					</div>
				</div>
			</section> */}

			{/* <section className="section section-our-pride py-5" data-aos="fade-in">
				<div className="container">
					<div className="divider"></div>
					<div className="row">
						<div className="col-md-4 col-12">
							<img src={img} alt="our pride illustration" />
						</div>
						<div className="col-md-1"></div>
						<div className="col-md-7 col-12">
							<h3 className="section-title">
								Our <span>Pride</span>
							</h3>
							<p>We're listed among the top logistics firms in the country</p>
							<ol>
								<li>We deliver on only the best standards</li>
								<li>We ensure the highest form of satisfaction</li>
								<li>We are skilled and expert contructors</li>
							</ol>
							<p>
								Our topmost priority is the absolute satisfaction of our
								clients. We provide quality solutions at all levels
							</p>
						</div>
					</div>
				</div>
			</section> */}

			<section
				className="section section-social py-4 bg-light"
				data-aos="zoom-in">
				<div className="container">
					<div className="row text-center">
						<div className="col-12 py-3">
							<h3 className="section-title text-center">Get interactive</h3>
							<div className="pt-3">
								<a
									href="https://facebook.com/thecolonylogistics"
									target="_blank"
									rel="noreferrer">
									<i className="fab fa-facebook-f fa-2x pr-4"></i>
								</a>
								<i className="fab fa-instagram  fa-2x pr-4 color-primary-dark"></i>
								<a
									href="https://www.linkedin.com/company/the-colony-logistics"
									target="_blank"
									rel="noreferrer">
									<i className="fab fa-linkedin fa-2x pr-4"></i>
								</a>
								<a
									href="https://twitter.com/colony_logistic"
									target="_blank"
									rel="noreferrer">
									<i className="fab fa-twitter  fa-2x pr-4"></i>
								</a>

								<a
									href="https://wa.me/233507183456"
									target="_blank"
									rel="noreferrer">
									<i className="fab fa-whatsapp fa-2x"></i>
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export { HomeView };
