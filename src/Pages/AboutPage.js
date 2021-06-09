import React from 'react';
import { Card, FlexCol, FlexContainer, FlexRow } from '../Styles';
import dianaFernandes from "./../assets/customers/diana-fernandes.webp";
import aboutTopImage from "./../assets/about-us/pexels-rodnae-productions-7581127.jpg";
import testimonalHead from "./../assets/services/bram-naus-customers.jpg";
import testimonalImage from "./../assets/ben-parker.webp";

const AboutPage = () => {
  return (
    <FlexContainer>
      <FlexRow>
        <FlexCol
          style={{
            maxHeight: '84vh',
            overflow: 'hidden',
          }}>
          <img src={aboutTopImage} className="aboutTopImage" alt="Photo by annie-spratt" loading="eager" />
          <div className="aboutTopCard">
            <div className="heading-1">Who We Are?</div>
            <div className="divider"></div>
            <p className="para-1">
              Synergence is a team of Career experts passionate about helping professionals pan-India
              in their job search journey. We have over 400 years of collective experience across our
              Career Coaches spanning over 16 industries.
                        </p>
          </div>
        </FlexCol>
      </FlexRow>
      <br />
      {/* <br />
      <br />
      <br />
      <br /> */}
      <Card noshadow style={{ marginRight: '20%', marginTop: 50, padding: 0, overflow: 'hidden' }}>
        <FlexRow style={{ minHeight: '20vh', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
          <FlexCol size="1" className="sectionImage">
            {/* <img src={aboutTopImage} className="leftSectionImage" /> */}
            <div className="serialNo">1</div>
          </FlexCol>
          <FlexCol size="2" className="sectionDesc">
            <p style={{ margin: 0, fontSize: 18 }}>
              We have helped professionals identify their strengths, target A-List employers,
              get their profiles shortlisted and ace interviews to get offered on the terms
              they desire.</p>
          </FlexCol>
        </FlexRow>
      </Card>
      <Card noshadow style={{ marginRight: '20%', marginTop: 50, padding: 0, overflow: 'hidden' }}>
        <FlexRow style={{ minHeight: '20vh', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
          <FlexCol size="1" className="sectionImage">
            {/* <img src={sectionImage} className="leftSectionImage" /> */}
            <div className="serialNo">2</div>
          </FlexCol>
          <FlexCol size="2" className="sectionDesc">
            <p style={{ margin: 0, fontSize: 18 }}>
              We have a large list of companies empanelled with us to receive the talent we represent.
              We leverage our relationships to ensure Talent Acquisition leaders consider our
              candidate’s applications on priority.
                        </p>
          </FlexCol>
        </FlexRow>
      </Card>
      <FlexRow style={{ minHeight: '50vh' }}>
        <FlexCol style={{
          background: `url(${testimonalHead})`,
          backgroundSize: 'cover',
          backgroundPosition: '0 45%',
          backgroundAttachment: 'fixed',
          height: 200
        }}>
          <div
            style={{
              color: 'white',
              fontSize: 36,
              fontWeight: 'bold',
              textAlign: 'center',
              backdropFilter: `brightness(0.5)`,
              height: '100%',
              lineHeight: '5'
            }}
          >
            Our Satisfied Customers
                        </div>
        </FlexCol>
      </FlexRow>
      <Card>
        <FlexRow style={{ minHeight: '20vh' }}>
          <FlexCol size="10" className="testimonials_desc">
            <p>
              “What makes the experience with Synergence completely worth it is the level of
              personalization that helps you present yourself better to recruiters.”
            </p>
            <p>
              ~ Akash Kotian
            </p>
          </FlexCol>
          <FlexCol size="2">
            <img src={testimonalImage} alt="profile" className="testimonials_image" />
          </FlexCol>
        </FlexRow>
      </Card>
      <Card>
        <FlexRow style={{ minHeight: '20vh', justifyContent: 'center' }}>
          <FlexCol size="10" className="testimonials_desc">
            <p>
              “Thanks to the team at Synergence & especially my Coach
              who assisted me at every step of getting to my dream role.”
            </p>
            <p>
              ~ Diana Fernandes
            </p>
          </FlexCol>
          <FlexCol size="2">
            <img src={dianaFernandes} alt="profile" className="testimonials_image" />
          </FlexCol>
        </FlexRow>
      </Card>
    </FlexContainer>
  );
};

export default AboutPage;
