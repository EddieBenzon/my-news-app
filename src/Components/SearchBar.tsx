import HamburgerMenu from "./HamburgerMenu";
import InputField from "./InputField";
import MyNewsLogo from "./MyNewsLogo";

const SearchBar = () => {
  return (
    <div className="search-bar">
      <div className="main-input-wrapper">
        <MyNewsLogo />
        <HamburgerMenu />
        <InputField />
      </div>
    </div>
  );
};

export default SearchBar;
