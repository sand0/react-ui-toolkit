import {Outlet} from "react-router-dom";

import Header from "../components/Layout/Header";
import Navigation from "../components/Layout/Navigation";

const RootLayout = (props) => {
    return (
        <div>
            <Header />
            <Navigation />
            <Outlet />
        </div>
    )
}

export default RootLayout;
