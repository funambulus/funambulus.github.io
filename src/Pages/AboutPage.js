import React, { Suspense } from "react";
import { Card, FlexCol, FlexContainer, FlexRow } from "../Styles";
import aboutTopImage from "./../assets/about-us/pexels-rodnae-productions-7581127.webp";

const Comments = React.lazy(() =>
  import("./../Component/ReusableComponents/Comments")
);

const AboutPage = () => {
  return (
    <FlexContainer>
      <FlexRow>
        <FlexCol
          style={{
            maxHeight: "84vh",
            overflow: "hidden",
          }}
        >
          <img
            src={aboutTopImage}
            className="aboutTopImage"
            alt="annie-spratt"
            loading="eager"
          />
          <div className="aboutTopCard">
            <div className="heading-1">Who We Are?</div>
            <div className="divider"></div>
            <p className="para-1">
              Synergence Consultants is a team of Career Experts who are deeply
              passionate about helping professionals and job seekers across
              India in their job search journey.
            </p>
          </div>
        </FlexCol>
      </FlexRow>
      <br />
      {/* <br />
      <br />
      <br />
      <br /> */}
      <Card
        noshadow
        style={{
          marginRight: "20%",
          marginTop: 50,
          padding: 0,
          overflow: "hidden",
        }}
      >
        <FlexRow
          style={{
            minHeight: "20vh",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <FlexCol size="1" className="sectionImage">
            {/* <img src={aboutTopImage} className="leftSectionImage" /> */}
            <div className="serialNo">1</div>
          </FlexCol>
          <FlexCol size="2" className="sectionDesc">
            <p style={{ margin: 0, fontSize: 18 }}>
              Our Experts come with 20+ years of experience in their industry
              domain and have guided hundreds of professionals in finding the
              right job. Our Process is fine tuned to cater to every step and
              detail that helps professionals achieve their career goals.
            </p>
          </FlexCol>
        </FlexRow>
      </Card>
      <Card
        noshadow
        style={{
          marginRight: "20%",
          marginTop: 50,
          padding: 0,
          overflow: "hidden",
        }}
      >
        <FlexRow
          style={{
            minHeight: "20vh",
            justifyContent: "flex-start",
            alignItems: "flex-start",
          }}
        >
          <FlexCol size="1" className="sectionImage">
            {/* <img src={sectionImage} className="leftSectionImage" /> */}
            <div className="serialNo">2</div>
          </FlexCol>
          <FlexCol size="2" className="sectionDesc">
            <p style={{ margin: 0, fontSize: 18 }}>
              We have a large list of companies empanelled with us to receive
              the talent we represent. We leverage our relationships to ensure
              Talent Acquisition leaders consider our candidate’s applications
              on priority.
            </p>
          </FlexCol>
        </FlexRow>
      </Card>
      <Suspense fallback={<div>Loading...</div>}>
        <Comments />
      </Suspense>
    </FlexContainer>
  );
};

export default AboutPage;
