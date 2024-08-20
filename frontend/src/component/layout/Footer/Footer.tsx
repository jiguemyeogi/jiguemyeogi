import { Col, Container, Row } from "react-bootstrap";
import { Github, EnvelopeAt } from "react-bootstrap-icons";
import imgLogo from "../../../assets/png/jiguemyeogi2.png";

const Footer = () => {
    return (
        <footer>
            <Container>
                <Row>
                    <Col className="text-center py-3">
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <div>
                                <a href="/">
                                    <img alt="로고 이미지" src={imgLogo} width={120} />
                                </a>
                            </div>
                            <div>
                                <small>&copy; Dev, 2024. All rights reserved.</small>
                            </div>
                            <div>
                                <ul className="list-unstyled d-flex">
                                    <li className="ms-3">
                                        <a className="link-dark" href="@">
                                            <EnvelopeAt size={25} />
                                        </a>
                                    </li>
                                    <li className="ms-3">
                                        <a className="link-dark" href="@">
                                            <Github size={25} />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
