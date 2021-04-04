import React from 'react';
import { Link } from 'react-router-dom';
import { FlexCol, FlexContainer, FlexRowHeader } from '../../Styles';
import './style.css'

const Header = () => {
    return (
        <FlexContainer>
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
                    <Link to="/">HOME</Link>
                </FlexCol>
                <FlexCol>
                    <Link to="/service">SERVICE</Link>
                </FlexCol>
                <FlexCol>
                    <Link to="/about">ABOUT</Link>
                </FlexCol>
                <FlexCol>
                    <Link to="/contact">CONTACT</Link>
                </FlexCol>
            </FlexRowHeader>
        </FlexContainer >
    );
}

export default Header;