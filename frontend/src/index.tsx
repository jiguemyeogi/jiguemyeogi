import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider } from "react-router-dom";
import router from "./router/AppRouter";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <StrictMode>
        {/* 
          RouterProvider
            - <App /> 컴포넌트가 들어갈 자리에 <RouterProvider />를 대입한다. 
            - router={} props는 필수로 넣어야 한다.   
        */}
        <RouterProvider router={router} />
    </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
