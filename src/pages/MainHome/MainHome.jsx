import { Outlet } from "react-router-dom";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";

const MainHome = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
           <Footer></Footer>
        </div>
    );
};

export default MainHome;