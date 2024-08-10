import { lazy, Suspense } from "react";
import { createBrowserRouter, RouteObject } from "react-router-dom";

const Loading = <div>Loading...</div>
const Main = lazy(() => import("../page/Main"))

const routes: RouteObject[] = [

    {
        path: "",
        element: (
            <Suspense fallback={Loading}>
                <Main/>
            </Suspense>
        ),
    },

];

const root = createBrowserRouter(routes);

export default root;