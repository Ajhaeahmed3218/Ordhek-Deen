import { Outlet } from "react-router-dom";
import Navbar from "../Chomponents/Navbar";
import Footer from "../Chomponents/Footer";


const MainLayout = () => {
    return (
        <div className="fonts">
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayout;