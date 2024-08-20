import "./App.css";
import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./component/layout/Header/Header";
import Footer from "./component/layout/Footer/Footer";

const App = () => {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    );
};

export default App;
