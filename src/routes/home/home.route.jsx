import React, { Fragment } from 'react';
import './home.style.scss';

// components
import Hero from '../../components/hero/hero';
import About from '../../components/about/about';

const Home = () => {
	return (
		<Fragment>
			<Hero />
			<About/>
		</Fragment>
	);
};

export default Home;
