import logo from "../images/logo.png";
import telegramLogo from "../images/telegram-logo.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <container className="footer__container">
        <img className="logo" src={logo} alt="logo" />
        <nav className="footer__nav">
          <ul className="footer__ul">
            <li className="footer__li">Проекты</li>
            <li className="footer__li">Цифровой паспорт</li>
            <li className="footer__li">Личный кабинет</li>
          </ul>
          <ul className="footer__ul">
            <li className="footer__li">Контакты</li>
            <li className="footer__li">Статьи</li>
            <li className="footer__li">Лицензионное соглашение</li>
            <li className="footer__li">Персональные данные</li>
          </ul>
          <div className="footer__info">
            <p className="footer__p">ask@cloveri.org</p>
            <div className="footer__logos">
              <img src="" alt="" />
              <a className="myLink" href="https://t.me/WolandvonMunt">
                <img
                  className="miniLogo"
                  src={telegramLogo}
                  alt="logo telegram"
                />
              </a>
            </div>
          </div>
        </nav>
      </container>
      <a className="myLink" href="https://t.me/WolandvonMunt">
        <p className="footer__p-contacts">
          тестовое задание Мышинский Егор 24/02/2023
        </p>
      </a>
    </footer>
  );
};

export default Footer;
