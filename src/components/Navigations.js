import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from './../assets/logo.png';
import Button from 'react-bootstrap/Button';

const Navigations = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary shadow-sm" style={{
            fontSize: '11pt',
            fontWeight: 'w600'
        }}>
            <Container>
                <Navbar.Brand href="#">
                    <img
                        src={logo}
                        // width="30"
                        // height="30"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#" className='active'><i className="bi bi-house-door"></i>Home</Nav.Link>
                        <Nav.Link href="#action1"><i className="bi bi-compass"></i>Eksplor</Nav.Link>
                        <Nav.Link href="#action1"><i className="bi bi-graph-up-arrow"></i>Trending</Nav.Link>
                        <Nav.Link href="#action1"><i className="bi bi-people"></i>Cookpage</Nav.Link>
                        <Nav.Link href="#action1"><i className="bi bi-egg-fried"></i>Recipes</Nav.Link>
                        {/* <Nav.Link href="#action2">Categories</Nav.Link> */}
                        <NavDropdown title="Categories" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">Categories</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                                Something else here
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <div className="d-flex align-items-center">
                        <Button variant="primary" className='btn-sm rounded-pill' style={{marginRight: '12px'}}>Login</Button>
                        <Button variant="outline-secondary" className='btn-sm rounded-pill'>Daftar Akun</Button>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigations;