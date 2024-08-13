import { Suspense } from "react";
import { createBrowserRouter, RouteObject } from "react-router-dom";
import App from "../App";
import * as Lazy from "./lazy";

const Loading = <div>Loading...</div>;

const routes: RouteObject[] = [
    {
        path: "",
        element: <App />,
        children: [
            {
                path: "/",
                element: (
                    <Suspense fallback={Loading}>
                        <Lazy.MainPage />
                    </Suspense>
                ),
            },
        ],
    },
];

/* 
    createBrowserRouter()
    - 라우팅 할 path와 element를 작성할 수 있다.
    - children 속성으로 배열에 중첩된 라우터(Nested Router)를 추가할 수 있다.
*/
const router = createBrowserRouter(routes);

export default router;
