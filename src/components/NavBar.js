import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/logo.PNG'
import '../../src/'

function ColorSchemesExample() {
  return (
      <Navbar bg="primary" data-bs-theme="dark" id="navBar">
        <Container>
          <Navbar.Brand href="/"><img src={logo} width={60} height={60}></img></Navbar.Brand>
          {/* <Navbar.Brand href="/">LOGO</Navbar.Brand> */}
          <Nav className="me-right">
          {/* <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/">Contact Us</Nav.Link>
          <Nav.Link href="/">Our Services</Nav.Link>
          <Nav.Link href="/">FAQ</Nav.Link> */}
            <Nav.Link href="/login">
              <button className='customBtn loginBtn'>Login</button>
            </Nav.Link>
            <Nav.Link href="/signup">
              <button className='customBtn signUpBtn'>SignUp</button>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  );
}

export default ColorSchemesExample;