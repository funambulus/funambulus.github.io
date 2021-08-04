import React from "react";
import { Card, FlexCol, FlexRow } from "../../Styles";
import testimonalHead from "../../assets/services/bram-naus-customers.webp";
import dianaFernandes from "../../assets/customers/diana-fernandes.webp";
import varunKotian from "../../assets/customers/varun_kotian.webp";

import "../../Pages/style.css";

const Comments = () => {
  return (
    <>
      <FlexRow style={{ minHeight: "50vh" }}>
        <FlexCol
          style={{
            background: `url(${testimonalHead})`,
            backgroundSize: "cover",
            height: 200,
            backgroundPosition: "0 45%",
            backgroundAttachment: "fixed",
          }}
        >
          <div
            style={{
              color: "white",
              fontSize: 36,
              fontWeight: "bold",
              padding: "78px 0px",
              textAlign: "center",
              backdropFilter: "brightness(0.5)",
            }}
          >
            Our Satisfied Customers
          </div>
        </FlexCol>
      </FlexRow>
      <Card>
        <FlexRow style={{ minHeight: "16vh" }}>
          <FlexCol size="10" className="testimonials_desc">
            <p>
              “What makes the experience with Synergence completely worth it is
              the level of personalization that helps you present yourself
              better to recruiters.”
            </p>
            <p>~ Akash Kotian</p>
          </FlexCol>
          <FlexCol size="2">
            <img
              src={varunKotian}
              alt="profile"
              className="testimonials_image"
            />
          </FlexCol>
        </FlexRow>
      </Card>
      <Card>
        <FlexRow style={{ minHeight: "16vh" }}>
          <FlexCol size="10" className="testimonials_desc">
            <p>
              “Thanks to the team at Synergence & especially my Coach who
              assisted me at every step of getting to my dream role.”
            </p>
            <p>~ Diana Fernandes</p>
          </FlexCol>
          <FlexCol size="2">
            <img
              src={dianaFernandes}
              alt="profile"
              className="testimonials_image"
            />
          </FlexCol>
        </FlexRow>
      </Card>
    </>
  );
};

export default Comments;
