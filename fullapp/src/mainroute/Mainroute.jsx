import { createBrowserRouter } from "react-router";
import Register from "../component/Register";
import Header from "../component/Header";
import Loginpage from "../component/Loginpage";
import Userdetail from "../component/userdetail";
import Addproduct from "../component/Addproduct";
import Home from "../component/Home";
import Productdetail from "../component/Productdetail";
import Myproduct from "../component/Myproduct";


const Mainroute = createBrowserRouter([
    {
        path: "/",
        element:
            <>
                <Register />
            </>
    },
    {
        path: "/login",
        element:
            <>
                <Loginpage />
            </>
    },
    {
        path: "/header",
        element:
            <>
                <Header />
            </>,

        children: [
            {
                index: true,
                element:
                    <>
                        <Home />
                    </>
            },
            {
                path: "home",
                element:
                    <>
                        <Home />
                    </>
            },
            {
                path: "addprodust",
                element:
                    <>
                        <Addproduct />
                    </>
            },
            {
                path: "myprodust",
                element:
                    <>
                        <Myproduct />
                    </>
            }
        ]
    },
    {
        path: "/userdetail/:id",
        element:
            <>
                <Userdetail />
            </>
    },
    {
        path: "/productdetail/:id",
        element:
            <>
                <Productdetail />
            </>
    }
])

export default Mainroute;