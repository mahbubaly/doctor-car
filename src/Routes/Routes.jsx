
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Main/Main';
import Home from './../Pages/Home';
import Navbar from '../Pages/Navbar/Navbar';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import LogIn from '../Pages/Login/LogIn';

const router = createBrowserRouter([

    {
        path: "/",
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />


            },
            {
                path: '/logIn',
                element: <LogIn />
            }
        ]
    },
]);
export default router;