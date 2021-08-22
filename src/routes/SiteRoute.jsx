import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import SubNav from "../components/sub-nav";

// views
import {
	HomeView,
	AboutView,
	ContactView,
	ServicesView,
	NotFoundView,
} from "../views/index";

const SiteRoutes = (props) => {
	return (
		<div className="page-container">
			{/* <span className="navs"> */}
			<SubNav />
			<NavBar />
			{/* </span> */}
			<div>
				<Switch>
					<Route path="/about" exact component={AboutView} />
					<Route path="/services" exact component={ServicesView} />
					<Route path="/contact" exact component={ContactView} />
					<Route path="/" exact component={HomeView} />
					<Route path="/not-found" component={NotFoundView} />
					<Redirect to="/not-found" />
				</Switch>
			</div>
			<Footer />
		</div>
	);
};

export default SiteRoutes;
