import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer"

const Layout = () => {
  return (
    <>
        <NavBar />
        <nav>
        </nav>
        <Outlet />
        <Footer />
    </>
  )
};

export default Layout;