import { Col, Container, Nav, Navbar, Row, Badge } from "react-bootstrap";
import imgLogo from "../../../assets/png/jiguemyeogi2.png";
import { BellFill, PersonCircle } from "react-bootstrap-icons";

const Header = () => {
    return (
        <header className="m-3">
            <Container>
                <Row>
                    <Col className="d-flex justify-content-end">
                        <div className="d-flex align-items-center">
                            <a href="@" className="link-dark text-decoration-none" style={{ fontSize: 15, padding: 5 }}>
                                로그인
                            </a>

                            <a href="@" className="link-dark text-decoration-none" style={{ fontSize: 15, padding: 5 }}>
                                회원가입
                            </a>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Navbar expand="lg" collapseOnSelect>
                            <Navbar.Brand href="/">
                                <img alt="로고이미지" src={imgLogo} width={130} />
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />

                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="ms-auto">
                                    <Nav.Link href="@" className="link-dark position-relative me-2">
                                        <BellFill size={25} />
                                        <Badge
                                            bg="danger"
                                            pill
                                            className="position-absolute top-10 start-90 translate-middle"
                                            style={{ margin: 0 }}
                                        >
                                            5
                                        </Badge>
                                    </Nav.Link>

                                    <Nav.Link href="@" className="link-dark">
                                        <PersonCircle size={25} />
                                    </Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Navbar expand="lg" collapseOnSelect>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />

                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto">
                                    <Nav.Link href="@">플래너</Nav.Link>
                                    <Nav.Link href="@">커뮤니티</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                    </Col>
                </Row>
            </Container>
        </header>
    );
};

export default Header;
