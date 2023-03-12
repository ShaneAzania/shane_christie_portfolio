import React from 'react';
import './hero.styles.scss';

const Hero = () => {
	return (
		<section id='hero' className='hero'>
			<div className='text-box'>
				<h1 className='name'>SHANE</h1>
				<h1 className='name'>AZANIA</h1>
				<h1 className='name'>CHRISTIE</h1>
				<p className='headliner'>
					Hey. Welcome to my online portfolio, where you can view some of my front-end and
					full-stack web application projects, and see a bit of my visual art projects as well.
				</p>
				<hr />
				<p>Websites / Web Applications • Photo • Video • Graphic Design</p>
			</div>
		</section>
	);
};

export default Hero;
