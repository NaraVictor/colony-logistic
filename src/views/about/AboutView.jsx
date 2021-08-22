import Card from "../../components/Card";
import {
	ImgBox,
	ImgContainerLeft,
	ImgContainerRight,
} from "../../components/imgs";
import img from "../../static/img/img.png";
import visionImg from "../../static/img/img-17.jpg";
import missionImg from "../../static/img/img-16.jpg";
import valuesImg from "../../static/img/img-8.jpg";
import profilePic from "../../static/img/profile-pic-placeholder.jpg";

const AboutView = (props) => {
	return (
		<>
			<section className="about-hero hero-mini py-5 p-md-5">
				<div className="container">
					<div className="row hero-content">
						<div className="col text-light">
							<h1 className="section-title text-light">
								<span>About</span> Us
							</h1>
						</div>
					</div>
				</div>
			</section>
			<section className="section" data-aos="fade-up">
				<div className="container">
					<div className="row py-5">
						<div className="col-12">
							<h3 className="section-title">
								The Colony <span>Logistics Services</span>
							</h3>
							<div>
								<p>
									The Colony Logistics is registered as a company by the
									Registrar General’s Department and licensed to provide
									cleaning and logistics services in Ghana. We are a company
									with many years of experience in providing excellent logistics
									solutions around the globe. Our state of the art facilities
									and formidable human resource set the most rigorous
									performance standards known in the logistics and cleaning
									industry by promoting quality standards. We provide reliable,
									specific solutions to all your needs with service performance
									beyond your expectations. We ensure confidentiality and
									topmost protection to all assets and people.
								</p>
								<p>
									Colony Logistics partners with clients to develop strategies
									that focus on reducing costs, increasing safety standards, and
									providing high-quality service per the client’s set goals and
									needs. We implore the appropriate technology and processes to
									improve upon our service delivery at the best. Our hallmark is
									to provide convenient, need-oriented and target driven
									logistics services to our client.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="section section-vision">
				<div className="divider"></div>
				<div className="row pt-5">
					<div className="col-md-5 col-12">
						<ImgContainerLeft imgUrl={visionImg} alt="vision illustration" />
					</div>
					<div className="col-md-6 col-12 px-5">
						<h3 className="section-title">
							Our <span>Vision</span>
						</h3>
						<p>
							We aspire to become the leading cleaning services provider through
							sustainable quality management.
						</p>
					</div>
				</div>
			</section>
			<section className="section section-vision">
				<div className="divider"></div>
				<div className="row py-5">
					<div className="col-md-6 offset-md-1 col-12 px-5 order-1">
						<h3 className="section-title">
							Our <span>Mission</span>
						</h3>
						<p>
							To provide specialized and efficient integrated cleaning solutions
							using the most effective equipment to our clients.
						</p>
					</div>
					<div className="col-md-5 col-12 order-md-2 order-0">
						<ImgContainerRight imgUrl={missionImg} alt="mission illustration" />
					</div>
				</div>
			</section>
			<section className="section section-core-values py-5">
				<div className="container">
					<div className="row">
						<div className="col-md-6 col-12">
							<ImgBox imgUrl={valuesImg} alt="Values of our company" />
						</div>
						<div className="col-md-4 col-12">
							<h3 className="section-title">
								Core <span className="d-inline">Values</span>
							</h3>
							<p>Our values are centered on;</p>
							<ul>
								<li>Loyalty</li>
								<li>Reliability </li>
								<li>Integrity </li>
								<li>Commitment to Objectives</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
			<section className="section section-message py-5">
				<div className="container">
					<div className="row py-5">
						<div className="col-md-5 col-12 d-flex justify-content-center mb-4">
							<Card
								imgUrl={profilePic}
								name="Michael A. Saforo"
								position="Chief Operating Officer"
							/>
						</div>
						<div className="col-md-7 col-12  px-4">
							<h3 className="section-title">
								Message
								<span>from the COO</span>
							</h3>
							<p>meet the heroes behind our quality service provision</p>
						</div>
					</div>
				</div>
			</section>

			<section className="section section-summary">
				<div className="container px-5">
					<div className="summary-content">
						<p>We are listed amongst the top logistics firms in the nation</p>
						<ol>
							<li>We deliver on only the best standards</li>
							<li>We ensure the highest form of satisfaction</li>
							<li>We are skilled and expert contractors</li>
						</ol>
						<p>
							Our topmost priority is the absolute satisfaction of our clients.
							We provide quality solutions at all levels
						</p>
					</div>
				</div>
			</section>
		</>
	);
};

export { AboutView };
