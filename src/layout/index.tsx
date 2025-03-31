import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/header";

const Layout = () => {
  const [expandHeader, setExpandHeader] = useState(false);

  const handleScroll = (e: Event): void => {
    e.preventDefault();
    if(window.scrollY > 20) setExpandHeader(true);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <Header />
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default Layout;