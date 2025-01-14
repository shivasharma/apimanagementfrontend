import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { Nav } from "react-bootstrap";
import {Link} from "react-router-dom";
import "./header.css"
const Header=()=>{
    return(
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand to="/">Api Management</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/" className="nav-link">Employee</Nav.Link>
                        <Nav.Link as={Link} to= "/employee" className="nav-link">Post Employee</Nav.Link>
                     </Nav>
                    </Container>
                    </Navbar>
        </div>
    )
}
export default Header;