import React from 'react';

import './LandingPage.scss';

import Cta from '../../components/LandingComponents/CTA/Cta.js';
import Services from '../../components/LandingComponents/Services/Services.js';

const LandingPage = () => {
	return (
		<div className="main-wrapper">
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
};

export default LandingPage;
