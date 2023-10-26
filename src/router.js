import {createBrowserRouter} from "react-router-dom";
import {LayoutPages} from "./Pages/LayoutPages";
import {AlbumsPage} from "./Pages/AlbumsPage";

const router = createBrowserRouter([
    {path:'', element:<LayoutPages/>, children:[

            {path:'/albums', element:<AlbumsPage/>}
        ]}
])

export {router}