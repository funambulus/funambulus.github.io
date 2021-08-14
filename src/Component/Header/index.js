import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FlexCol, FlexContainer, FlexRow, FlexRowHeader } from "../../Styles";
import FeatherIcon from "feather-icons-react";
import { ShowWindowDimensions } from "../../Constant/Dimensions/showDimension";
import "./style.css";

const Header = () => {
  const location = useLocation();
  const [menu, setMenu] = useState(false);
  const [w] = ShowWindowDimensions();
  useEffect(() => {
    // used for closing open menu of mobile devices
    if (w > 768) {
      setMenu(false);
    }
  }, [w]);
  return (
    <FlexContainer className="px-5">
      <FlexRowHeader>
        <FlexCol size="6" className="companyName">
          SYNERGENCE
          <span>Consultants</span>
        </FlexCol>
        <FlexCol size="1" className="mobile-menu mobile-sm">
          <FeatherIcon
            style={{ stroke: "#000", cursor: "pointer" }}
            icon="menu"
            size="32"
            onClick={() => setMenu((x) => !x)}
          />
        </FlexCol>
        {menu && (
          <FlexCol size="100%" className="headerLink pt-5">
            <Link
              to="/"
              className={
                location.pathname === "/" ? "color-grey active" : "color-grey"
              }
              onClick={() => setMenu(false)}
            >
              HOME
            </Link>
            <Link
              to="/service"
              className={
                location.pathname === "/service"
                  ? "color-grey active"
                  : "color-grey"
              }
              onClick={() => setMenu(false)}
            >
              SERVICES
            </Link>
            <Link
              to="/about"
              className={
                location.pathname === "/about"
                  ? "color-grey active"
                  : "color-grey"
              }
              onClick={() => setMenu(false)}
            >
              ABOUT US
            </Link>
            <Link
              to="/contact"
              className={
                location.pathname === "/contact"
                  ? "color-grey active"
                  : "color-grey"
              }
              onClick={() => setMenu(false)}
            >
              CONTACT US
            </Link>
          </FlexCol>
        )}
        <FlexCol size="1" className="hide-mobile-sm">
          <FlexRow className="headerLink">
            <Link
              to="/"
              className={
                location.pathname === "/" ? "color-grey active" : "color-grey"
              }
            >
              HOME
            </Link>
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
          </FlexRow>
        </FlexCol>
      </FlexRowHeader>
    </FlexContainer>
  );
};

export default Header;
