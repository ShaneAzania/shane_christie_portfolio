import React from 'react';
import { Link } from 'react-router-dom';
import './about.styles.scss';

const About = () => {
	return (
		<section id='about' className='about'>
			<div className='text-box'>
				<h1 className='title'>AboutMe</h1>
				<h2 className='headliner'>Helping you show your brand, image, or self to the world.</h2>
				<Link className='button-outline-color-3' to={'/#hero'}>
					Hire Me →
				</Link>
			</div>
			<div className='text-box'>
				<p className='pitch'>
					Providing solutions that allow businesses and and induviduals to present their brands,
					products, or selves to their communities and the world wide web through web applications,
					web sites, photo and video.
				</p>
				<hr />
				<p>
					Whether the project involves coding or visual content creation, each project is tailored
					to your needs and requirements through consulting, research, and revisions.
				</p>
			</div>
		</section>
	);
};

export default About;
