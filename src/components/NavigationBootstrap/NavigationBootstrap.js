import React from 'react';
import { Navbar, Container, Nav, NavDropdown, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const NavigationBootstrap = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">

                            <Nav.Link href="#features"><NavLink to="/" style={{ textDecoration: 'none', color: 'white', }}>
                                Home
                            </NavLink></Nav.Link>

                            <Nav.Link href="#features"><NavLink to="/exploreAllCars" style={{ textDecoration: 'none', color: 'white', }}>
                                ExploreAllCars
                            </NavLink></Nav.Link>

                            <Nav.Link href="#features"><NavLink to="/login" style={{ textDecoration: 'none', color: 'white', }}>
                                Login
                            </NavLink></Nav.Link>

                            {user.email && <Nav.Link href="#features"><NavLink to="/dashboard" style={{ textDecoration: 'none', color: 'white', }}>
                                DashBoard
                            </NavLink></Nav.Link>}

                            {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
                            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown> */}
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets" style={{color:'red'}}> {
                            user.email && <span>welcome {user.email}</span>
                        }</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                {
                                    user.email && <NavLink style={{ textDecoration: 'none', color: 'red' }} to=""> <Button style={{ fontSize: '1.1vw' }} onClick={logOut} color="danger" variant="danger">Logout</Button> </NavLink>
                                }
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavigationBootstrap;