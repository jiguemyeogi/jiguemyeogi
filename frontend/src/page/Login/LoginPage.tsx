import { Button, Col, Form, FormGroup, Row } from "react-bootstrap";

const LoginPage = () => {
    return (
        <Row>
            <Col className="mt-5">
                <div className="d-flex justify-content-center mb-2">
                    <img src="https://github.com/user-attachments/assets/6259fa1f-d911-4992-8bed-20357c80be9e" style={{width: '200px'}}></img>
                </div>
                <Form>
                    <Form.Group className="d-flex justify-content-center">
                        <Form.Control type="email" placeholder="이메일" style={{width: '400px', height: '50px'}}></Form.Control>
                    </Form.Group>
                    <Form.Group className="d-flex justify-content-center">
                        <Form.Control type="password" placeholder="비밀번호" style={{width: '400px', height: '50px'}}></Form.Control>
                    </Form.Group>
                    <div className="d-flex justify-content-center">
                        <Button type="submit" className="text-center mt-3 mb-3" style={{width: '400px', height: '40px'}}>로그인</Button>
                    </div>
                </Form>
                <div className="d-flex justify-content-center">
                    <a href="#" className="link-underline link-underline-opacity-0 text-dark me-3">비밀번호 재설정</a>
                    <a href="#" className="link-underline link-underline-opacity-0 text-dark me-3">회원가입</a>
                </div>
            </Col>
        </Row>
    );
}

export default LoginPage;