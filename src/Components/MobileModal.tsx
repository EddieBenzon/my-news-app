import HamburgerMenu from "./HamburgerMenu";
import InputField from "./InputField";
import Navbar from "./Navbar";

const MobileModal = () => {
  return (
    <div className="modal">
      <div className="burger-positioner">
        <HamburgerMenu />
      </div>
      <section className="modal-title">
        <span className="span-my">My</span>
        <span className="span-news">News</span>
      </section>
      <InputField />
      <div className="navbox">
        <Navbar />
      </div>
    </div>
  );
};

export default MobileModal;
