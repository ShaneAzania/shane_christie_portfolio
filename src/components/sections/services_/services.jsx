import React from 'react';
import './services.styles.scss';

const Services = () => {
	return (
		<section id='services' className='container-fluid'>
			<div className='title-box row'>
				<h1 className='title'>Services</h1>
				<h2 className='sub-title'>Some of the services and products I provide</h2>
			</div>

			<div className='services-all-container row'>
				<div className='service row'>
					<div className='service-name col-12 col-md-6 p-0'>
						<span className='service-number'>01.</span> Web Developement
					</div>
					<div className='service-description col-12 col-md-6'>
						<p>
							Developing fully modern looking and responsive websites and applications tailored
							specifically to your needs
						</p>
						<hr />
						<h3>Coding languages, frameworks, libraries, and other skills:</h3>
						<p>
							Python • Django • RESTful API • Flask • React • Redux • Javascript • CSS • SASS •
							Bootstrap • HTML • MySQL
						</p>
					</div>

					<div className='service-skills col row'>
						<div className='skill col-12 col-sm-6 col-md-3 col-lg'>Front-End</div>
						<div className='skill col-12 col-sm-6 col-md-3 col-lg'>Back-End</div>
						<div className='skill col-12 col-sm-6 col-md-3 col-lg'>Ecommerce Stores</div>
						<div className='skill col-12 col-sm-6 col-md-3 col-lg'>Web Applications</div>
						<div className='skill col-12 col-sm-6 col-md-3 col-lg'>Portfolios</div>
					</div>
				</div>

				<div className='service row'>
					<div className='service-name col-12 col-md-6 p-0'>
						<span className='service-number'>02.</span> Content Creation
					</div>
					<div className='service-description col-12 col-md-6'>
						<p>
							Creating content in the form of photography, videography/cinematography, and some
							graphic design as well.
						</p>
					</div>

					<div className='service-skills col-12 row'>
						<div className='skill col-12 col-sm-6 col-md-3 col-lg'>Commercial</div>
						<div className='skill col-12 col-sm-6 col-md-3 col-lg'>E-commerce</div>
						<div className='skill col-12 col-sm-6 col-md-3 col-lg'>
							Professional
							<br />
							Headshots
						</div>
						<div className='skill col-12 col-sm-6 col-md-3 col-lg'>Lifestyle</div>
						<div className='skill col-12 col-sm-6 col-md-3 col-lg'>Lookbooks</div>
						<div className='skill col-12 col-sm-6 col-md-3 col-lg'>Portraits</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Services;
