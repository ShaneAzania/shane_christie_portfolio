import React, { Fragment } from 'react';
import './home.style.scss';

// components
import Hero from '../../components/hero/hero';
import About from '../../components/about/about';
import Services from '../../components/services_/services';
import Portfolio from '../../components/portfolio/portfolio';

const Home = () => {
	return (
		<Fragment>
			<Hero />
			<About />
			<Services />
			<Portfolio />
		</Fragment>
	);
};

export default Home;
