import React, { Component } from 'react';

import './LandingPage.scss';

import Header from '../../components/Header/Header.js';
import Cta from '../../components/LandingComponents/CTA/Cta.js';
import Services from '../../components/LandingComponents/Services/Services.js';

class LandingPage extends Component {
	render() {
		return (
			<div className="main-wrapper">
				<section className="main-header-wrapper">
					<Header />
				</section>
				<section className="main-hero-wrapper">
					<div className="main-cta-wrapper">
						<Cta />
					</div>
					<div className="main-testimonial-wrapper">
						<Services />
					</div>
				</section>
			</div>
		);
	}
}

export default LandingPage;
