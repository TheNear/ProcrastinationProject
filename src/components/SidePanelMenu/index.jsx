import React, { useState, useEffect, useMemo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTasks,
  faClipboardList,
  faAward,
  faComments,
  faHome,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import CONST from "../../assets/js/constants";
import HamburgerButton from "../../componentHelpers/HamburgerButton";
import { signOut } from "../../redux/firebaseAuth/action";

const navigation = [
  {
    id: 0,
    icon: faHome,
    title: "Домашняя",
    to: "/",
  },
  {
    id: 1,
    icon: faClipboardList,
    title: "Доступные задачи",
    to: "/taskshop",
  },
  {
    id: 2,
    icon: faTasks,
    title: "Мои задачи",
    to: "/mytask",
  },
  {
    id: 3,
    icon: faAward,
    title: "Таблица лидеров",
    to: "/scoreboard",
  },
  {
    id: 4,
    icon: faAward,
    title: "Достижения",
    to: "/achievements",
  },
  {
    icon: faComments,
    title: "Доска сообщений",
    to: "/messagesboard",
  },
];

export default function SidePanelMenu() {
  const [menuActive, toggleMenu] = useState(false);
  const dispatch = useDispatch();
  const onClickHandler = (evt) => {
    evt.preventDefault();
    dispatch(signOut());
  };

  const toggleMenuHandler = () => {
    toggleMenu(!menuActive);
  };

  const onClickCloseMenu = () => {
    setTimeout(() => {
      toggleMenu(false);
    }, 0);
  };

  const onEscCloseMenu = ({ keyCode }) => {
    if (keyCode === CONST.ESC_CODE) {
      toggleMenu(false);
    }
  };

  useEffect(() => {
    if (menuActive) {
      document.addEventListener("mouseup", onClickCloseMenu);
      document.addEventListener("keydown", onEscCloseMenu);
    }
    return () => {
      document.removeEventListener("mouseup", onClickCloseMenu);
      document.removeEventListener("keydown", onEscCloseMenu);
    };
  }, [menuActive]);

  const menuList = useMemo(() => {
    return navigation.map((link) => (
      <li key={`${link.id}key`} className="side-menu__item">
        <div className="side-menu__icon">
          <FontAwesomeIcon icon={link.icon} />
        </div>
        <NavLink exact to={link.to} className="side-menu__link">
          {link.title}
        </NavLink>
      </li>
    ));
  }, []);

  return (
    <>
      <HamburgerButton
        isActive={menuActive}
        clickHandler={toggleMenuHandler}
        className="side-menu__hamburger"
        height="100px"
        width="100px"
      />
      <nav className={`side-menu ${menuActive ? "active" : ""}`}>
        <ul className="side-menu__list">
          {menuList}
          <li className="side-menu__item side-menu__item-exit">
            <div className="side-menu__icon">
              <FontAwesomeIcon icon={faSignOutAlt} />
            </div>
            <a
              href="/"
              alt="loggout button"
              onClick={onClickHandler}
              className="side-menu__link"
            >
              Выйти из аккаунта
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
