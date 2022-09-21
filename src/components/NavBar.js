import { Container, Nav, Navbar } from "react-bootstrap";
import CartWidget from "./CartWidget";
import './CartWidget.css';
import './ItenListContainer.css'


const NavBar = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        alt="KD"
                        src="../public/Full-logo-removebg-preview.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    KeepDivng
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#Cursos">Cursos</Nav.Link>
                    <Nav.Link href="#Equipos">Equipos</Nav.Link>
                </Nav>
                <CartWidget/>
            </Container>
        </Navbar>
    )
}
export default NavBar;