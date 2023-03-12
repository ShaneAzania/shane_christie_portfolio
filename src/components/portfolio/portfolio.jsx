import React from 'react';
import './portfolio.styles.scss';

// components
import ProjectBox from '../project-box/project-box';

const projects = [
	{
		name: 'project 1',
		img: '',
		link: '',
	},
	{
		name: 'project 2',
		img: '',
		link: '',
	},
	{
		name: 'project 3',
		img: '',
		link: '',
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

				<ProjectBox projects={projects} />
			</div>

			<div className='row'>
				<div className='title-box'>
					<h1>Portfolio</h1>
					<h2>Visual Work</h2>
				</div>
			</div>

			<ProjectBox projects={projects} />
		</section>
	);
};

export default Portfolio;
