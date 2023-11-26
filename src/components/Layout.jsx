import { Outlet } from "react-router-dom";
import Header from "./Header";
import BottomNav from "./BottomNav";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <BottomNav/>
    </>
  );
};

export default Layout;
