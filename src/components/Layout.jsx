import { Outlet } from "react-router-dom";
import Header from "./Header";
import Title from "./Title";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <Header />
      <Title />
      <main className="App">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
