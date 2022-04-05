import "./Header.css";

const Header = () => {
  return (
    <span onClick={() => window.scroll(0, 0)} className="header">
      🎬 KNOW YOUR MOVIE 🎥
    </span>
  );
};

export default Header;