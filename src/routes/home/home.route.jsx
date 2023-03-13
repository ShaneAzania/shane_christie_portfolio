import React, { Fragment } from 'react';
import './home.style.scss';

// components
import Hero from '../../components/sections/hero/hero';
import About from '../../components/sections/about/about';
import Services from '../../components/sections/services_/services';
import Portfolio from '../../components/sections/portfolio/portfolio';
import Contact from '../../components/sections/contact/contact';

const Home = () => {
	return (
		<Fragment>
			<Hero />
			<About />
			<Services />
			<Portfolio />
			<Contact />
		</Fragment>
	);
};

export default Home;
