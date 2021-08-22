import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import SiteRoutes from "./routes/SiteRoute";

// import "./node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";

// custom
import "./static/css/styles.css";

import AOS from "aos";

const App = () => {
	useEffect(() => {
		AOS.init(0);
	});

	return (
		<BrowserRouter>
			<SiteRoutes />
		</BrowserRouter>
	);
};

export default App;
