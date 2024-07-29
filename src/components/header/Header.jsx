import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styles from "./header.module.css";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  const [showNavbar, setShowNavbar] = React.useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <div className={styles.navWrapper}>
      <nav className={styles.navbar}>
        <div className={styles.container}>
          <div className={styles.logoContainer}>
            <div className={styles.menuIcon} onClick={handleShowNavbar}>
              <FontAwesomeIcon
                icon={faBars}
                style={{ width: " 18px", height: "18px", color: "#ffffff" }}
              />
            </div>
            <div onClick={handleClick} className={styles.logo}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 112 32"
                width="90px"
                height="100%"
                fill="#FFF"
              >
                <path
                  fill="currentColor"
                  d="M6.08 24.096V7.904c0-.288.16-.48.448-.48h2.064c.304 0 .48.16.48.48v16.16c0 .352-.144.496-.48.496H6.528c-.304.016-.448-.16-.448-.464"
                ></path>
                <path
                  fill="currentColor"
                  d="m12.192 16.016 6.768-7.872a.46.46 0 0 0 .144-.336c0-.24-.144-.384-.4-.384h-1.808c-.496 0-.912.16-1.312.544L9.456 15.12c-.272.288-.368.512-.384.88.016.368.112.592.384.88l6.128 7.136c.4.384.816.544 1.312.544h1.808c.256 0 .4-.144.4-.384a.5.5 0 0 0-.144-.336zM21.008 18.16V7.776c0-.256.112-.48.448-.48h2.096c.304 0 .448.208.448.48V18.16c0 2.976 1.264 3.888 3.76 3.888 2.432 0 3.744-.864 3.744-3.904V7.776c0-.256.144-.48.448-.48h2.096c.304 0 .48.208.48.48v10.48c0 2.976-.928 6.448-6.784 6.448-4.992 0-6.736-2.528-6.736-6.544M51.728 18.16V7.776c0-.256.112-.48.448-.48h2.096c.304 0 .448.208.448.48V18.16c0 2.976 1.264 3.888 3.76 3.888 2.432 0 3.744-.864 3.744-3.904V7.776c0-.256.144-.48.448-.48h2.096c.304 0 .48.208.48.48v10.48c0 2.976-.928 6.448-6.784 6.448-4.992 0-6.736-2.528-6.736-6.544M103.648 1.904H71.552a2.29 2.29 0 0 0-2.288 2.288v23.616a2.29 2.29 0 0 0 2.288 2.288h32.096a2.29 2.29 0 0 0 2.288-2.288V4.192c-.016-1.264-1.04-2.288-2.288-2.288M82.464 9.552c0 .256-.112.48-.48.48h-6.528v4.688h6.192c.384 0 .48.208.48.48v1.568c0 .256-.064.496-.48.496h-6.192v6.784c0 .304-.112.528-.48.528h-2.048c-.336 0-.48-.192-.48-.48V9.568c0-1.808 1.136-2.144 2.064-2.144h7.456c.336 0 .48.192.48.448v1.68zm20.256 14.592c-.016.304-.16.432-.432.432h-2.096c-.304 0-.432-.16-.448-.448v-12.56l-3.792 10.208c-.144.384-.688 1.472-2.048 1.472h-.48c-1.28 0-1.84-1.088-1.984-1.52L87.696 11.52v12.592c-.016.288-.144.448-.48.448H85.12c-.256 0-.4-.112-.4-.432V9.312c0-.976.592-1.888 2.288-1.888h.496c.496 0 1.648.16 2.096 1.408l4.112 11.312 4.112-11.312c.624-1.28 1.424-1.408 2.16-1.408h.448c1.648 0 2.256.928 2.256 1.888v14.832zM36.8 24.096V7.904c0-.288.16-.48.448-.48h2.064c.304 0 .48.16.48.48v16.16c0 .352-.144.496-.48.496h-2.064c-.304.016-.448-.16-.448-.464M42.912 16.016l6.768-7.872a.46.46 0 0 0 .144-.336c0-.24-.144-.384-.4-.384h-1.808c-.496 0-.912.16-1.312.544l-6.128 7.152c-.272.288-.368.512-.384.88.016.368.112.592.384.88l6.128 7.136c.4.384.816.544 1.312.544h1.808c.256 0 .4-.144.4-.384a.5.5 0 0 0-.144-.336z"
                ></path>
              </svg>
            </div>
          </div>
          {showNavbar ? (
            <div
              className={styles.transparentDiv}
              onClick={() => setShowNavbar(false)}
            ></div>
          ) : null}
          <div
            className={`${styles.navElements}  ${showNavbar && styles.active}`}
          >
            <ul onClick={showNavbar && styles.active ? handleShowNavbar : null}>
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? styles.ActiveNav : null
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/FDpage"
                  className={({ isActive }) =>
                    isActive ? styles.ActiveNav : null
                  }
                >
                  Fixed Deposits
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/savings"
                  className={({ isActive }) =>
                    isActive ? styles.ActiveNav : null
                  }
                >
                  Savings Deposits
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contactUs"
                  className={({ isActive }) =>
                    isActive ? styles.ActiveNav : null
                  }
                >
                  Feedback
                </NavLink>
              </li>
              {/* <li>
                <NavLink
                  to="/test"
                  className={({ isActive }) =>
                    isActive ? styles.ActiveNav : null
                  }
                >
                  Test Page
                </NavLink>
              </li> */}
              <li>
                <NavLink
                  to="/content"
                  className={({ isActive }) =>
                    isActive ? styles.ActiveNav : null
                  }
                >
                  Learning Centre
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
