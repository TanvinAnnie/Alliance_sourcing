import { Outlet } from "react-router";
import Navber from "../../../component/shared/Navber";
import Footer from "../../../component/shared/Footer";

export default function MainLayout() {
  return (
    <>
     
      <Outlet />
     
    </>
  );
}