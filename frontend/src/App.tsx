import "./App.css";
import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";

const App = () => {
    return (
        <>
            <header></header>
            <main>
                <Container>
                    <Outlet />
                </Container>
            </main>
            <footer></footer>
        </>
    );
};

export default App;
