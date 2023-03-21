import React from 'react';
import './portfolio.styles.scss';

// components
import ProjectBox from '../../project-box/project-box';

const dev_projects = [
		{
			name: 'Seviin Threads',
			img: '/assets/imgs/portfolio/dev/ScreenShot2023-03-18.png',
			link: 'https://dapper-melba-87d671.netlify.app/',
		},
	],
	visual_projects = [
		{
			name: 'Visual Art Portfolio',
			img: '/assets/imgs/portfolio/6C9634AA-FB43-46CE-9401-4A231B472885_1_105_c.jpeg',
			link: 'https://ShaneAzania.com/',
		},
	];

const Portfolio = () => {
	return (
		<section id='portfolio' className='container-fluid'>
			<div className='row'>
				<div className='title-box'>
					<h1>Portfolio</h1>
					<h2>Websites and Web Applications</h2>
				</div>

				<ProjectBox projects={dev_projects} />
				<p className='scroll-message'>Scroll→</p>
			</div>

			<div className='row'>
				<div className='title-box'>
					<h1>Portfolio</h1>
					<h2>Photo + Video</h2>
				</div>
				<ProjectBox projects={visual_projects} />
			</div>
		</section>
	);
};

export default Portfolio;
