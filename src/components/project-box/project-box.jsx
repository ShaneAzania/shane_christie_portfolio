import React from 'react';
import { Link } from 'react-router-dom';
import './project-box.styles.scss';

const ProjectBox = ({ projects }) => {
	return (
		<div className='projects-box'>
			{projects.map(({ name, img, link }) => (
				<Link key={name} className='project' style={{}}>
					<img src='' alt={`${name} project`} />
					<h3 className='name'>{name}</h3>
				</Link>
			))}
		</div>
	);
};

export default ProjectBox;
