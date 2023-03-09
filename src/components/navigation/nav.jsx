import './nav.styles.scss';

// react
import React, { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';

// import { ReactComponent as Logo } from '../../assets/logo.svg';

const Nav = ({ links }) => {
	return (
		<Fragment>
			<nav className='nav'>
				<div className='logo'>
					<Link className='nav-links' to={links[0].to}>
						SHANE AZANIA CHRISTIE
					</Link>
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
				<Link to={'#'} className='resumé-link'>
					RESUMÉ
				</Link>
			</nav>

			<Outlet />
		</Fragment>
	);
};

export default Nav;
