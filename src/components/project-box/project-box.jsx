import React, { Fragment } from 'react';
import './project-box.styles.scss';

const ProjectBox = ({ projects }) => {
	return (
		<Fragment>
			<div className='projects-box'>
				{projects.map(({ name, img, link }) => (
					<a
						key={'portfolio' + name}
						className='project'
						href={link}
						target='_blank'
						rel='noreferrer'
					>
						<img src={img} alt={`${name} project`} />
						<h3 className='name'>{name}</h3>
					</a>
				))}
			</div>
		</Fragment>
	);
};

export default ProjectBox;
