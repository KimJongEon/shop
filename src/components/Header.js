import { Navbar, Container, Nav } from 'react-bootstrap';
import '../css/Header.css';

function Header() {
    return (
        <>
            {/* 상단 Header*/}
            {/* <Button variant="primary">Primary</Button> */}
            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Cart</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            {/* 메인 사진 */}
            <div>
                <img alt="메인사진" className="main-bg" src={process.env.PUBLIC_URL + './img/bg.png'} ></img>
            </div>
        </>
    )
}

export default Header;