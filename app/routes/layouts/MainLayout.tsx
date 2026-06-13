import { Outlet } from "react-router";
import Navbar from "../../../component/shared/Navbar";
import Footer from "../../../component/shared/Footer";    

export default function MainLayout() {
  return (
   <div>
     <Navbar />
    <Outlet />
    <Footer />
   </div>
  );
}