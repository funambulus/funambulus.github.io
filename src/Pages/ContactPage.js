import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import sendNodeMail from "../Constant/Email/sendEmailJS";
import { FlexCol, FlexContainer, FlexRow } from "../Styles";
import contactTopImage from "./../assets/contacts/damian-zaleski.webp";
import contactTopImage2 from "./../assets/contacts/tamas-tuzes-katai.webp";
import "./style.css";

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

  useEffect(() => {
    window.scrollTo({
      top: 0, // could be negative value
      left: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <FlexContainer data-aos="fade-in" data-aos-duration="400">
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
          <div className="extraLayer"></div>
          <div className="contactTextContainer">
            <div className="contactInfo">
              We are glad you’re taking this important step towards accelerating
              your job search. Our team will be happy to get in touch with you
            </div>
            <div className="contactTitle">Leave us your details below</div>
          </div>
        </FlexCol>
      </FlexRow>
      <FlexRow style={{ minHeight: "30vh" }} className="contactForm">
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
            placeholder="e.g. John Doe"
          />
          <label>Mobile Number:</label>
          <input
            name="phone"
            type="text"
            className="contactInputs"
            value={form.phone}
            onChange={(e) => handleChange(e)}
            placeholder="e.g. (+91)888-777-999"
          />
          <label>Email:</label>
          <input
            name="email"
            type="text"
            className="contactInputs"
            value={form.email}
            onChange={(e) => handleChange(e)}
            placeholder="e.g. john.doe@example.com"
          />
          <label>Message:</label>
          <input
            name="message"
            type="text"
            className="contactInputs"
            value={form.message}
            onChange={(e) => handleChange(e)}
            placeholder="Write your message here"
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
                Swal.fire(
                  "Email Sent!",
                  "Thank you for sending us your details. Our team will contact you shortly.",
                  "success"
                );
              } else {
                Swal.fire("Oops!", "Some fields are looking empty :)", "error");
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
