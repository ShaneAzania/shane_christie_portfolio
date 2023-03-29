import './navigation-bar.styles.scss';
import { Navbar, Nav, /* NavDropdown,*/ Container } from 'react-bootstrap';

// resumé file
import resumé from '../../assets/0.ShaneChristie-resume.pdf';

// react
import React, { Fragment } from 'react';
import { Outlet } from 'react-router-dom';

// import { ReactComponent as Logo } from '../../assets/logo.svg';

const NavigationBar = ({ links }) => {
	return (
		<Fragment>
			<Navbar id='nav' className='' bg='black' expand='lg' fixed='top' variant='dark'>
				<Container>
					<Navbar.Brand href={links[0].to}>ShaneChristie</Navbar.Brand>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav className='m-auto'>
							{links.map(({ text, to, type }, index) => (
								<Nav.Link href={to}> {text.toLowerCase()}</Nav.Link>
							))}

							{/*}
							<NavDropdown title='Dropdown' id='basic-nav-dropdown'>
								<NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
								<NavDropdown.Item href='#action/3.2'>Another action</NavDropdown.Item>
								<NavDropdown.Item href='#action/3.3'>Something</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item href='#action/3.4'>Separated link</NavDropdown.Item>
							</NavDropdown>
							{*/}
						</Nav>
						<Nav.Link className='ms-auto' href={resumé} target='_blank' rel='noreferrer'>
							RESUMÉ
						</Nav.Link>
					</Navbar.Collapse>
				</Container>
			</Navbar>

			<Outlet />
		</Fragment>
	);
};

export default NavigationBar;
