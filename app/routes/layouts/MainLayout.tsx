import { Outlet } from "react-router";
import Navbar from "../../../component/shared/Navber";
import Footer from "../../../component/shared/Footer";

export default function MainLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}