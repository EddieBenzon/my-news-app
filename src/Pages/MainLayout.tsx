import { Outlet } from "react-router-dom";
import Banner from "../Components/Banner";
import MobileModal from "../Components/MobileModal";
import MobileNavbar from "../Components/MobileNavbar";
import Navbar from "../Components/Navbar";
import SearchBar from "../Components/SearchBar";
import { useGlobalContext } from "../context";

const RootLayout = () => {
  const { state } = useGlobalContext();

  return (
    <>
      {state.modalOpen && <MobileModal />}
      <header>
        <Banner />
        <SearchBar />
        <MobileNavbar />
      </header>

      <main className="main-page">
        <div className="nav-displayer">
          <Navbar />
        </div>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
