import { Outlet, Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer"

const Layout = () => {
  return (
    <>
        <NavBar />
        <nav>
            
                {/* <Link to="/">Home</Link> */}
            
                {/* <Link to="/page1">Page 1</Link> */}
            
        </nav>
        <Outlet />
        <Footer />
    </>
  )
};

export default Layout;