import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FlexCol, FlexContainer, FlexRowHeader } from '../../Styles';
import './style.css'

const Header = (props) => {
    let currentPage = props.selected;
    return (
        <FlexContainer className="px-5">
            <FlexRowHeader>
                <FlexCol size="6" className="companyName">
                    SYNERGENCE
                    <span>Consultants</span>
                </FlexCol>
                <FlexCol size="1" className="headerLink">
                    <Link to="/"
                        className={currentPage == 'home' ? "color-grey active" : "color-grey"}
                    >HOME</Link>
                </FlexCol>
                <FlexCol size="1" className="headerLink">
                    <Link to="/service"
                        className={currentPage == 'service' ? "color-grey active" : "color-grey"}
                    >SERVICES</Link>
                </FlexCol>
                <FlexCol size="1" className="headerLink">
                    <Link to="/about"
                        className={currentPage == 'about' ? "color-grey active" : "color-grey"}
                    >ABOUT US</Link>
                </FlexCol>
                <FlexCol size="1" className="headerLink">
                    <Link to="/contact"
                        className={currentPage == 'contact' ? "color-grey active" : "color-grey"}
                    >CONTACT US</Link>
                </FlexCol>
            </FlexRowHeader>
        </FlexContainer >
    );
}

export default Header;
