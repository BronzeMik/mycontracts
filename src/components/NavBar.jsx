import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../public/logo_mycontracts.png';



export default function NavBar() {
    const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) { // Adjust this value based on when you want the color to change
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    return(
        <>
            <Navbar expand='lg' className="bg-body-tertiar navbar-container" id='navbar'>
                <Container>
                    <Navbar.Brand><img src={logo} className='nav-logo'/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Features</Nav.Link>
                        <Nav.Link href="#link">Pricing</Nav.Link>
                        <Nav.Link href="#link">Contact Us</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
