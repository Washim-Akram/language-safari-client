import { Outlet } from "react-router-dom";
import NavBar from "../pages/Shared/NavBar/NavBar";

const Main = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar></NavBar>
      <div className="flex-grow">
        <Outlet></Outlet>
      </div>
      <div className="mt-auto">
        <h2>Footer</h2>
      </div>
    </div>
  );
};

export default Main;
