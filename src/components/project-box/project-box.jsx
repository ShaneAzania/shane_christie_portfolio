import React from 'react';
import './project-box.styles.scss'

const ProjectBox = ({ projects }) => {
	return (
		<div className='projects-box'>
			{projects.map(({ name, img, link }) => (
				<div key={name} className='project' style={{ background: `none`, border: 'red solid 1px' }}>
					<img src='' alt={`${name} project`} />
					<h3 className='name'>{name}</h3>
				</div>
			))}
		</div>
	);
};

export default ProjectBox;
