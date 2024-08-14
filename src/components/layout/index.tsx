import { Outlet } from "react-router-dom";

import Header from "./header";

const LayoutWrapper = () => {
  return (
    <main>
      <Header />
      <Outlet />
    </main>
  );
};

export default LayoutWrapper;
