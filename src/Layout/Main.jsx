import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <h2>Navbar</h2>
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
