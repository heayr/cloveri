import logo from "../images/logo.png";

const Header = () => {
  return (
    <header className="header">
      <img className="logo" src={logo} alt="logo" />
      <button className="btn">Задать вопрос</button>
    </header>
  );
};

export default Header;
