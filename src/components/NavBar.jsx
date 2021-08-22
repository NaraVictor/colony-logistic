import { Link, NavLink } from "react-router-dom";
import logo from "../static/img/logo.jpeg";

const NavBar = (props) => {
	return (
		<>
			<div className="site-mobile-menu site-navbar-target">
				<div className="site-mobile-menu-header">
					<div className="site-mobile-menu-close mt-3">
						<span className="icon-close2 js-menu-toggle"></span>
					</div>
				</div>
				<div className="site-mobile-menu-body"></div>
			</div>

			<header className="site-navbar site-navbar-target" role="banner">
				<div className="container">
					<div className="site-nav-content">
						<div>
							<Link to="/">
								<img
									src={logo}
									className="site-logo"
									alt="The Colony Logistics Logo"
								/>
								{/* <span className="site-name">The Colony Logistics</span> */}
							</Link>
						</div>
						<nav className="site-navigation" role="navigation">
							<ul className="site-menu main-menu js-clone-nav ml-auto d-none d-lg-block">
								<li>
									<NavLink
										activeClassName="active"
										to="/"
										exact
										className="nav-link">
										Home
									</NavLink>
								</li>
								<li>
									<NavLink
										activeClassName="active"
										to="/about"
										className="nav-link">
										About
									</NavLink>
								</li>
								<li>
									<NavLink
										activeClassName="active"
										to="/services"
										className="nav-link">
										Services
									</NavLink>
								</li>
								<li>
									<NavLink
										activeClassName="active"
										to="/contact"
										className="nav-link">
										Contact
									</NavLink>
								</li>
							</ul>
						</nav>
						<div className="ml-auto toggle-button d-inline-block d-lg-none">
							<Link
								to="#"
								className="site-menu-toggle py-5 js-menu-toggle text-black">
								{/* <span className="icon-menu h3 text-black"></span> */}
								<strong>MENU</strong>
							</Link>
						</div>

						<div className="col-lg-3"></div>
						<div className="col-lg-4">
							<nav className="site-navigation text-right" role="navigation">
								<ul className="site-menu main-menu js-clone-nav ml-auto d-none ">
									<li>
										<a href="https://wa.me/233507183456" className="nav-link">
											<i className="fab fa-whatsapp pr-2 fa-1x"></i>
											Whatsapp us
										</a>
									</li>
									<li>
										<a href="tel:+233507183456" className="nav-link">
											<i className="fas fa-phone-alt pr-2 fa-1x"></i>
											050 718 3456
										</a>
									</li>
								</ul>
							</nav>
						</div>
					</div>
				</div>
			</header>
		</>
	);
};

export default NavBar;
