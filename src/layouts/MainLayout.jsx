import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DarkModeToggle from "../components/DarkModeToggle";
import ScrollToTop from "../components/ScrollToTop";
import WhatsappButton from "../components/WhatsappButton";

function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col">

      <ScrollToTop />

      <WhatsappButton />

      <Navbar />

      <main className="flex-1 pt-20">
        <Outlet />
      </main>

      <Footer />

      <DarkModeToggle />

    </div>
  );
}

export default MainLayout;