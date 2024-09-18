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
import PrivateRoute from "./PrivateRoute";
import MyBids from "../Pages/MyBids";
import BidRequests from "../Pages/BidRequests";

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
            element:<PrivateRoute><JobDetails></JobDetails></PrivateRoute>,
            loader:({params})=> fetch(`${import.meta.env.VITE_APP_URL}/job/${params.id}`)
        },
        {
          path:'/add-job',
          element:<PrivateRoute><AddJob></AddJob></PrivateRoute>
        },
        {
          path:'/my-posted-jobs',
          element:<PrivateRoute><MyPostedJobs></MyPostedJobs></PrivateRoute>
        },
        {
          path:'/update/:id',
          element:<PrivateRoute><UpdateJob></UpdateJob></PrivateRoute>,
          loader:({params})=> fetch(`${import.meta.env.VITE_APP_URL}/job/${params.id}`)
        },
        {
          path:'/my-bids',
          element:<PrivateRoute><MyBids></MyBids></PrivateRoute>
        },
        {
          path:'/bid-request',
          element:<PrivateRoute><BidRequests></BidRequests></PrivateRoute>
        },
      ]
    },
  ]);

export default router;