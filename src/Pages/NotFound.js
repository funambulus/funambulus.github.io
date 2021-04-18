import React from 'react';
import { Link } from 'react-router-dom';
import { FlexCol, FlexRow } from '../Styles';

const NotFound = () => (
    <>
        <FlexRow>
            <FlexCol style={{ textAlign: 'center', minHeight: '60vh' }}>
                <h1 style={{ fontSize: 36 }}>404</h1>
                <p>This is not the page your looking for.</p>
                <p>Kindly click on the below link to go back.</p>
                <h4 style={{ fontSize: 28 }}><Link to="/"> Go home</Link></h4>

            </FlexCol>
        </FlexRow>

    </>
);

export default NotFound;