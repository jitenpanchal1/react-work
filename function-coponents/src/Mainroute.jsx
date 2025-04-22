import { createBrowserRouter } from "react-router";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Example from "./Example";
import Functionscompo from "./Functionscompo";

const Mainroute = createBrowserRouter(
    [
        {
            path: "/",
            element:
                <>
                    <Header />
                    <Home />
                </>
        }, {
            path: "/home",
            element:
                <>
                    <Header />
                    <Home />
                </>
        }, {
            path: "/about",
            element:
                <>
                    <Header />
                    <About />
                </>
        }, {
            path: "/contact",
            element:
                <>
                    <Header />
                    <Contact />
                </>
        }, {
            path: "/example",
            element:
                <>
                    <Header />
                    <Example />
                </>,

            children: [
                {
                    path: "function/*",
                    element:
                        <>
                            <Functionscompo />
                        </>
                }
            ]
        }
    ]
)

export default Mainroute