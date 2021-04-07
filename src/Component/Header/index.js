import React from 'react';
import { Link } from 'react-router-dom';
import { FlexCol, FlexContainer, FlexRowHeader } from '../../Styles';
import './style.css'

const Header = () => {
    return (
        <FlexContainer className="px-5">
            <FlexRowHeader>
                <FlexCol size="6" className="companyName">
                    SYNERGENCE
                </FlexCol>
                <FlexCol size="1" className="headerLink">
                    <Link to="/" className="color-grey">HOME</Link>
                </FlexCol>
                <FlexCol size="1" className="headerLink">
                    <Link to="/service" className="color-grey">SERVICE</Link>
                </FlexCol>
                <FlexCol size="1" className="headerLink">
                    <Link to="/about" className="color-grey">ABOUT</Link>
                </FlexCol>
                <FlexCol size="1" className="headerLink">
                    <Link to="/contact" className="color-grey">CONTACT</Link>
                </FlexCol>
            </FlexRowHeader>
        </FlexContainer >
    );
}

export default Header;