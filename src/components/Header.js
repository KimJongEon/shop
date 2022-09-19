import { Navbar, Container, Nav } from 'react-bootstrap';
import '../css/Header.css';

function Header(props) {
    return (
        <>
            {/* 상단 Header*/}
            {/* <Button variant="primary">Primary</Button> */}
            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link onClick={()=>{ props.navigate('/') }}>Home</Nav.Link>
                        <Nav.Link onClick={()=>{ props.navigate('/detail') }}>Cart</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default Header;