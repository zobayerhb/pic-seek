import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

const Root = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <Outlet />
    </>
  );
};

export default Root;
