import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";
import Home from "../pages/Home";
import About from "../pages/About";
import Producat from "../pages/Producat";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children:[
        {
            path:'/',
            element:<Home/>
        },
        {
            // path:'about',
            // element:<About/>
            path:'/about',
            Component:About
        },
        {
          path:"/producat",
          element:<Producat/>
        }
    ]
  },
]);
export default router;