import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Registration from "../Pages/Registration";
import JobDetails from "../Pages/JobDetails";
import AddJob from "../Pages/AddJob";
import ErrorPage from "../Pages/ErrorPage";
import MyPostedJobs from "../Pages/MyPostedJobs";
import UpdateJob from "../Pages/UpdateJob";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
            loader: ()=> fetch(`${import.meta.env.VITE_APP_URL}/jobs`)
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/registration',
            element:<Registration></Registration>
        },
        {
            path:'/job/:id',
            element:<JobDetails></JobDetails>,
            loader:({params})=> fetch(`${import.meta.env.VITE_APP_URL}/job/${params.id}`)
        },
        {
          path:'/add-job',
          element:<AddJob></AddJob>
        },
        {
          path:'/my-posted-jobs',
          element:<MyPostedJobs></MyPostedJobs>
        },
        {
          path:'/update/:id',
          element:<UpdateJob></UpdateJob>,
          loader:({params})=> fetch(`${import.meta.env.VITE_APP_URL}/job/${params.id}`)
        },
      ]
    },
  ]);

export default router;