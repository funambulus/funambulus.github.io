import React, { Component } from 'react';
import { FlexCol, FlexContainer, FlexRow } from '../Styles';
import contactTopImage from "./../assets/damian-zaleski.jpg";
import contactTopImage2 from "./../assets/tamas-tuzes-katai.jpg";

const ContactPage = () => {
    return (
        <FlexContainer>
            <FlexRow>
                <FlexCol
                    style={{
                        maxHeight: '84vh',
                        overflow: 'hidden',
                        position: 'relative'
                    }}>
                    <img src={contactTopImage} className="contactImage" alt="Photo by damian-zaleski" />
                    <div className="extralayer"></div>
                    <div className="contactTextContainer">
                        <div className="contactTitle">Contact Synergence</div>
                        <div className="contactInfo">We look forward hearing from you</div>
                    </div>
                </FlexCol>
            </FlexRow>
            <FlexRow style={{ minHeight: '30vh' }}>
                <FlexCol>
                    <p className="contactFormTitle">We are glad you’re taking this important step towards accelerating your job search. Our team will be happy to get in touch with you.</p>
                </FlexCol>
            </FlexRow>
            <FlexRow className="formContainer" style={{ alignItems: 'flex-start' }}>
                <FlexCol size="2" className="formInputs">
                    <label>Name:</label>
                    <input id="name" type="text" className="contactInputs" />
                    <label>Mobile Number:</label>
                    <input id="phone" type="text" className="contactInputs" />
                    <label>Email:</label>
                    <input id="email" type="text" className="contactInputs" />
                    <label>Message</label>
                    <input id="message" type="text" className="contactInputs" />
                    <button>SUBMIT</button>
                </FlexCol>
                <FlexCol size="2" className="formImageContainer">
                    <img src={contactTopImage2} className="contactImage2" />
                </FlexCol>
            </FlexRow>
        </FlexContainer>
    );
}

export default ContactPage;