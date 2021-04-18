import React, { Component, useState } from 'react';
import sendNodeMail from '../Constant/Email/sendEmailJS';
import { FlexCol, FlexContainer, FlexRow } from '../Styles';
import contactTopImage from "./../assets/damian-zaleski.webp";
import contactTopImage2 from "./../assets/tamas-tuzes-katai.webp";

const ContactPage = () => {

    const [form, setform] = useState({
        name: '',
        phone: '',
        email: '',
        message: ''
    });
    const handleChange = (e) => {
        e.preventDefault();
        var temp1 = {
            ...form,
            [e.target.name]: e.target.value
        }
        setform(temp1)
        console.log(form)
    }
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
                        <div className="contactInfo">We are glad you’re taking this important step towards accelerating your job search. Our team will be happy to get in touch with you</div>
                    </div>
                </FlexCol>
            </FlexRow>
            <FlexRow style={{ minHeight: '30vh' }}>
                <FlexCol>
                    <p className="contactFormTitle"> We look forward to hearing from you.</p>
                </FlexCol>
            </FlexRow>
            <FlexRow className="formContainer" style={{ alignItems: 'flex-start' }}>
                <FlexCol size="2" className="formInputs">
                    <label id="l1">Name:</label>
                    <input id="n1" name="name" type="text" className="contactInputs" value={form.name} onChange={(e) => handleChange(e)} placeholder="Enter Name" />
                    <label>Mobile Number:</label>
                    <input name="phone" type="text" className="contactInputs" value={form.phone} onChange={(e) => handleChange(e)} placeholder="Enter Phone" />
                    <label>Email:</label>
                    <input name="email" type="text" className="contactInputs" value={form.email} onChange={(e) => handleChange(e)} placeholder="Enter Email" />
                    <label>Message</label>
                    <input name="message" type="text" className="contactInputs" value={form.message} onChange={(e) => handleChange(e)} placeholder="Enter Message" />
                    <button
                        onClick={() => {
                            // console.log(form.name, form.email, 'A New Message from the ' + form.name, form.message)
                            if (form && form.name && form.email && form.phone && form.message) {
                                sendNodeMail(form.name, form.email, form.phone, form.message);
                                alert("Successfully sent");
                            } else {
                                alert("Fill all required fields");
                            }
                        }}
                    >
                        SUBMIT
                    </button>
                </FlexCol>
                <FlexCol size="2" className="formImageContainer">
                    <img src={contactTopImage2} className="contactImage2" />
                </FlexCol>
            </FlexRow>
        </FlexContainer>
    );
}

export default ContactPage;