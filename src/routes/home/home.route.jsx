import React, { Fragment } from 'react';
import './home.style.scss';

// components
import Hero from '../../components/hero/hero';
import About from '../../components/about/about';
import Services from '../../components/services_/services';

const Home = () => {
	return (
		<Fragment>
			<Hero />
			<About />
			<Services />
		</Fragment>
	);
};

export default Home;
