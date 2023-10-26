import {createBrowserRouter} from "react-router-dom";

import {MainLayout} from "./layouts/MainLayout";
import {TodosPage} from "./Pages/TodosPage";

 const router = createBrowserRouter([
     {
         path:'', element: <MainLayout/>, children: [
             {
                 path:'todos' , element:<TodosPage/>
             },
         ]
     },


 ])

export {router}