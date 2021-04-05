import React from 'react';
import { Link } from 'react-router-dom';
import { FlexCol, FlexContainer, FlexRowHeader } from '../../Styles';
import './style.css'

const Header = () => {
    return (
        <FlexContainer className="px-5">
            <FlexRowHeader>
                <FlexCol style={{
                    flex: 4,
                    padding: '0px 20px',
                    fontWeight: 'bolder',
                    fontSize: 28
                }}>
                    SYNERGENCE
                </FlexCol>
                <FlexCol>
                    <Link to="/" className="color-grey">HOME</Link>
                </FlexCol>
                <FlexCol>
                    <Link to="/service" className="color-grey">SERVICE</Link>
                </FlexCol>
                <FlexCol>
                    <Link to="/about" className="color-grey">ABOUT</Link>
                </FlexCol>
                <FlexCol>
                    <Link to="/contact" className="color-grey">CONTACT</Link>
                </FlexCol>
            </FlexRowHeader>
        </FlexContainer >
    );
}

export default Header;