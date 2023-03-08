import './nav.styles.scss';

// react
import React, { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';

// import { ReactComponent as Logo } from '../../assets/logo.svg';

const Nav = ({ links }) => {
	return (
		<Fragment>
			<nav className='nav'>
				<div className='logo'>SHANE AZANIA CHRISTIE</div>
				<div className='link-box'>
					{links.map(({ text, to }, index) => (
						<Link className='nav-links' key={index + text} to={to}>
							{text.toLowerCase()}
						</Link>
					))}
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
