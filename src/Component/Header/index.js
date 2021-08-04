import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FlexCol, FlexContainer, FlexRowHeader } from "../../Styles";
import "./style.css";

const Header = () => {
  const location = useLocation();
  return (
    <FlexContainer className="px-5">
      <FlexRowHeader>
        <FlexCol size="6" className="companyName">
          SYNERGENCE
          <span>Consultants</span>
        </FlexCol>
        <FlexCol size="1" className="headerLink">
          <Link
            to="/"
            className={
              location.pathname === "/home" ? "color-grey active" : "color-grey"
            }
          >
            HOME
          </Link>
        </FlexCol>
        <FlexCol size="1" className="headerLink">
          <Link
            to="/service"
            className={
              location.pathname === "/service"
                ? "color-grey active"
                : "color-grey"
            }
          >
            SERVICES
          </Link>
        </FlexCol>
        <FlexCol size="1" className="headerLink">
          <Link
            to="/about"
            className={
              location.pathname === "/about"
                ? "color-grey active"
                : "color-grey"
            }
          >
            ABOUT US
          </Link>
        </FlexCol>
        <FlexCol size="1" className="headerLink">
          <Link
            to="/contact"
            className={
              location.pathname === "/contact"
                ? "color-grey active"
                : "color-grey"
            }
          >
            CONTACT US
          </Link>
        </FlexCol>
      </FlexRowHeader>
    </FlexContainer>
  );
};

export default Header;
