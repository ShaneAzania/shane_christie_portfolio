import './nav.styles.scss';

// resumé file
import resumé from '../../assets/0.ShaneChristie-resume.pdf';

// react
import React, { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';

// import { ReactComponent as Logo } from '../../assets/logo.svg';

const Nav = ({ links }) => {
	return (
		<Fragment>
			<nav id='nav' className='nav' >
				<div className='logo'>
					<a className='nav-links' href={links[0].to}>
						SHANE AZANIA CHRISTIE
					</a>
				</div>
				<div className='link-box'>
					{links.map(({ text, to, type }, index) =>
						type !== 'a' ? (
							<Link className='nav-links' key={index + text} to={to}>
								{text.toLowerCase()}
							</Link>
						) : (
							<a className='nav-links' key={index + text} href={to}>
								{text.toLowerCase()}
							</a>
						)
					)}
				</div>
				<a className='resumé-link' href={resumé} target='_blank' rel='noreferrer'>
					RESUMÉ
				</a>
			</nav>

			<Outlet />
		</Fragment>
	);
};

export default Nav;
