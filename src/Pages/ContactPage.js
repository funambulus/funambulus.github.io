import React, { useState } from "react";
import sendNodeMail from "../Constant/Email/sendEmailJS";
import { FlexCol, FlexContainer, FlexRow } from "../Styles";
import contactTopImage from "./../assets/contacts/damian-zaleski.webp";
import contactTopImage2 from "./../assets/contacts/tamas-tuzes-katai.webp";

const ContactPage = () => {
  const [form, setform] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const handleChange = (e) => {
    e.preventDefault();
    var temp1 = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setform(temp1);
    console.log(form);
  };
  return (
    <FlexContainer>
      <FlexRow>
        <FlexCol
          style={{
            maxHeight: "84vh",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <img
            src={contactTopImage}
            className="contactImage"
            alt="damian-zaleski"
          />
          <div className="extralayer"></div>
          <div className="contactTextContainer">
            <div className="contactInfo">
              We are glad you’re taking this important step towards accelerating
              your job search. Our team will be happy to get in touch with you
            </div>
            <div className="contactTitle">Leave us your details below</div>
          </div>
        </FlexCol>
      </FlexRow>
      <FlexRow style={{ minHeight: "30vh" }}>
        <FlexCol>
          <p className="contactFormTitle">
            {" "}
            We look forward to hearing from you.
          </p>
        </FlexCol>
      </FlexRow>
      <FlexRow className="formContainer" style={{ alignItems: "flex-start" }}>
        <FlexCol size="2" className="formInputs">
          <label id="l1">Name:</label>
          <input
            name="name"
            type="text"
            className="contactInputs"
            value={form.name}
            onChange={(e) => handleChange(e)}
            placeholder="John Doe"
          />
          <label>Mobile Number:</label>
          <input
            name="phone"
            type="text"
            className="contactInputs"
            value={form.phone}
            onChange={(e) => handleChange(e)}
            placeholder="+91888777999"
          />
          <label>Email:</label>
          <input
            name="email"
            type="text"
            className="contactInputs"
            value={form.email}
            onChange={(e) => handleChange(e)}
            placeholder="johndoe@youremail.com"
          />
          <label>Message</label>
          <input
            name="message"
            type="text"
            className="contactInputs"
            value={form.message}
            onChange={(e) => handleChange(e)}
            placeholder="Any message..."
          />
          <button
            onClick={() => {
              if (
                form &&
                form.name &&
                form.email &&
                form.phone &&
                form.message
              ) {
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
          <img
            src={contactTopImage2}
            className="contactImage2"
            alt="second-contacts"
          />
        </FlexCol>
      </FlexRow>
    </FlexContainer>
  );
};

export default ContactPage;
