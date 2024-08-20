import { Row, Col, Card, Container } from "react-bootstrap";
import { GeoAlt, Heart, CashCoin, Bookmark } from "react-bootstrap-icons";

const MainPage = () => {
    return (
        <Container>
            {/* 인기 플래너 */}
            <Row className="my-3">
                <Col>
                    <div className="d-flex justify-content-between align-items-center">
                        <h5>📑 인기 플래너</h5>
                        <a href="@" className="text-muted text-decoration-none">
                            더보기
                        </a>
                    </div>
                </Col>
            </Row>
            <Row className="mt-2">
                <Col mb={2} className="mb-4">
                    <Card>
                        <Card.Body>
                            <Card.Title className="fw-bold" style={{ fontSize: 17, marginBottom: 15 }}>
                                홍길동의 가족여행
                            </Card.Title>

                            <div className="d-flex justify-content-start align-items-center mb-2">
                                <span>
                                    <GeoAlt size={17} style={{ padding: 2 }} /> 서울 서대문구
                                </span>
                            </div>
                            <div className="d-flex justify-content-start align-items-center mb-2">
                                <span>
                                    <CashCoin size={17} style={{ padding: 2 }} /> 300,000 원
                                </span>
                            </div>
                            <div className="d-flex justify-content-end align-items-center">
                                <button className="border-0 bg-white">
                                    <span>
                                        <Bookmark size={17} style={{ padding: 2 }} title="스크랩" /> 10
                                    </span>
                                </button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col mb={2} className="mb-4">
                    <Card>
                        <Card.Body>
                            <Card.Title className="fw-bold" style={{ fontSize: 17, marginBottom: 15 }}>
                                홍길동의 가족여행
                            </Card.Title>

                            <div className="d-flex justify-content-start align-items-center mb-2">
                                <span>
                                    <GeoAlt size={17} style={{ padding: 2 }} /> 서울 서대문구
                                </span>
                            </div>
                            <div className="d-flex justify-content-start align-items-center mb-2">
                                <span>
                                    <CashCoin size={17} style={{ padding: 2 }} /> 300,000 원
                                </span>
                            </div>
                            <div className="d-flex justify-content-end align-items-center">
                                <button className="border-0 bg-white">
                                    <span>
                                        <Bookmark size={17} style={{ padding: 2 }} title="스크랩" /> 10
                                    </span>
                                </button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col mb={2} className="mb-4">
                    <Card>
                        <Card.Body>
                            <Card.Title className="fw-bold" style={{ fontSize: 17, marginBottom: 15 }}>
                                홍길동의 가족여행
                            </Card.Title>

                            <div className="d-flex justify-content-start align-items-center mb-2">
                                <span>
                                    <GeoAlt size={17} style={{ padding: 2 }} /> 서울 서대문구
                                </span>
                            </div>
                            <div className="d-flex justify-content-start align-items-center mb-2">
                                <span>
                                    <CashCoin size={17} style={{ padding: 2 }} /> 300,000 원
                                </span>
                            </div>
                            <div className="d-flex justify-content-end align-items-center">
                                <button className="border-0 bg-white">
                                    <span>
                                        <Bookmark size={17} style={{ padding: 2 }} title="스크랩" /> 10
                                    </span>
                                </button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col mb={2} className="mb-4">
                    <Card>
                        <Card.Body>
                            <Card.Title className="fw-bold" style={{ fontSize: 17, marginBottom: 15 }}>
                                홍길동의 가족여행
                            </Card.Title>

                            <div className="d-flex justify-content-start align-items-center mb-2">
                                <span>
                                    <GeoAlt size={17} style={{ padding: 2 }} /> 서울 서대문구
                                </span>
                            </div>
                            <div className="d-flex justify-content-start align-items-center mb-2">
                                <span>
                                    <CashCoin size={17} style={{ padding: 2 }} /> 300,000 원
                                </span>
                            </div>
                            <div className="d-flex justify-content-end align-items-center">
                                <button className="border-0 bg-white">
                                    <span>
                                        <Bookmark size={17} style={{ padding: 2 }} title="스크랩" /> 10
                                    </span>
                                </button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col mb={2} className="mb-4">
                    <Card>
                        <Card.Body>
                            <Card.Title className="fw-bold" style={{ fontSize: 17, marginBottom: 15 }}>
                                홍길동의 가족여행
                            </Card.Title>

                            <div className="d-flex justify-content-start align-items-center mb-2">
                                <span>
                                    <GeoAlt size={17} style={{ padding: 2 }} /> 서울 서대문구
                                </span>
                            </div>
                            <div className="d-flex justify-content-start align-items-center mb-2">
                                <span>
                                    <CashCoin size={17} style={{ padding: 2 }} /> 300,000 원
                                </span>
                            </div>
                            <div className="d-flex justify-content-end align-items-center">
                                <button className="border-0 bg-white">
                                    <span>
                                        <Bookmark size={17} style={{ padding: 2 }} title="스크랩" /> 10
                                    </span>
                                </button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            {/* 추천 커뮤니티 */}
            <Row className="my-3">
                <Col>
                    <div className="d-flex justify-content-between align-items-center">
                        <h5>⭐ 추천 커뮤니티</h5>
                        <a href="@" className="text-muted text-decoration-none">
                            더보기
                        </a>
                    </div>
                </Col>
            </Row>
            <Row className="mt-2">
                <Col className="mb-4">
                    <Card>
                        <Card.Img
                            variant="top"
                            className="objectFit"
                            src="https://via.placeholder.com/150"
                            width={150}
                            height={180}
                        />
                        <Card.Body>
                            <Card.Title className="fw-bold" style={{ fontSize: 17 }}>
                                속초 여행 후기
                            </Card.Title>
                            <p style={{ fontSize: 15 }}>2022.07.01 - 2022.07.03</p>
                            <div className="d-flex justify-content-end align-items-center">
                                <button className="border-0 bg-white">
                                    <span>
                                        <Heart size={17} style={{ padding: 2 }} /> 10
                                    </span>
                                </button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="mb-4">
                    <Card>
                        <Card.Img
                            variant="top"
                            className="objectFit"
                            src="https://via.placeholder.com/150"
                            width={150}
                            height={180}
                        />
                        <Card.Body>
                            <Card.Title className="fw-bold" style={{ fontSize: 17 }}>
                                속초 여행 후기
                            </Card.Title>
                            <p style={{ fontSize: 15 }}>2022.07.01 - 2022.07.03</p>
                            <div className="d-flex justify-content-end align-items-center">
                                <button className="border-0 bg-white">
                                    <span>
                                        <Heart size={17} style={{ padding: 2 }} /> 10
                                    </span>
                                </button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="mb-4">
                    <Card>
                        <Card.Img
                            variant="top"
                            className="objectFit"
                            src="https://via.placeholder.com/150"
                            width={150}
                            height={180}
                        />
                        <Card.Body>
                            <Card.Title className="fw-bold" style={{ fontSize: 17 }}>
                                속초 여행 후기
                            </Card.Title>
                            <p style={{ fontSize: 15 }}>2022.07.01 - 2022.07.03</p>
                            <div className="d-flex justify-content-end align-items-center">
                                <button className="border-0 bg-white">
                                    <span>
                                        <Heart size={17} style={{ padding: 2 }} /> 10
                                    </span>
                                </button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="mb-4">
                    <Card>
                        <Card.Img
                            variant="top"
                            className="objectFit"
                            src="https://via.placeholder.com/150"
                            width={150}
                            height={180}
                        />
                        <Card.Body>
                            <Card.Title className="fw-bold" style={{ fontSize: 17 }}>
                                속초 여행 후기
                            </Card.Title>
                            <p style={{ fontSize: 15 }}>2022.07.01 - 2022.07.03</p>
                            <div className="d-flex justify-content-end align-items-center">
                                <button className="border-0 bg-white">
                                    <span>
                                        <Heart size={17} style={{ padding: 2 }} /> 10
                                    </span>
                                </button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="mb-4">
                    <Card>
                        <Card.Img
                            variant="top"
                            className="objectFit"
                            src="https://via.placeholder.com/150"
                            width={150}
                            height={180}
                        />
                        <Card.Body>
                            <Card.Title className="fw-bold" style={{ fontSize: 17 }}>
                                속초 여행 후기
                            </Card.Title>
                            <p style={{ fontSize: 15 }}>2022.07.01 - 2022.07.03</p>
                            <div className="d-flex justify-content-end align-items-center">
                                <button className="border-0 bg-white">
                                    <span>
                                        <Heart size={17} style={{ padding: 2 }} /> 10
                                    </span>
                                </button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default MainPage;
