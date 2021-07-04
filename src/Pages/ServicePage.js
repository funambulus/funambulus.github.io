import React, { Suspense } from "react";
import {
  FlexCol,
  FlexContainer,
  FlexRow,
  ServicesInfo,
  ServiceInfoHead,
  Divider,
  ServiceInfoBody,
} from "../Styles";

import service1 from "./../assets/application-assi/pexels-sora-shimazaki-5668858.webp";
import service2 from "./../assets/linkedIn-assi/souvik-banerjee-JLj_NbvlDDo-unsplash.webp";
import service3 from "./../assets/resume-development/markus-winkler-7iSEHWsxPLw-unsplash.webp";
import service4 from "./../assets/coaching/pexels-mentatdgt.webp";
import service5 from "./../assets/interview-tips/jonathan-francisca-YHbcum51JB0-unsplash.webp";
import service6 from "./../assets/offer-negotiation/markus-winkler-EX9QVVFtQxw-unsplash.webp";
import service7 from "./../assets/experts-on-Call/pexels-anna-shvets-4226256.webp";

import serviceTopImage from "./../assets/services/joao-ferrao-4YzrcDNcRVg-unsplash.webp";
// import FeatherIcon from 'feather-icons-react';
import { useHistory } from "react-router";

const ServicePage = () => {
  const scrollTo = (id) => {
    document.querySelector("#" + id).scrollIntoView({ behavior: "smooth" });
  };
  const history = useHistory();
  const service = [
    {
      name: "Application Assistance",
      desc: (
        <>
          Ensure your application stands out and travels well within the
          recruiter company. <br />
          <br />
          What you can expect from us:
          <br />
          <ul>
            <li>Pre-research before applying</li>
            <li>Assistance with cover notes</li>
            <li>How to match your cover note with the job description</li>
          </ul>
        </>
      ),
      image: service1,
    },
    {
      name: "Coaching",
      desc: (
        <>
          We help you become the best version of yourself.
          <br />
          <br />
          <ul>
            <li>
              Deep understanding of your career path, decisions, strengths,
              areas of development to build a strong value proposition for
              recruiters
            </li>
          </ul>
          <div style={{ textAlign: "center", paddingRight: 20 }}>
            <button
              className="buttonStyled"
              onClick={() => history.push("/contact")}
            >
              Know More
            </button>
          </div>
        </>
      ),
      image: service4,
    },
    {
      name: "LinkedIn Profile & Network Building",
      desc: (
        <>
          Job portals are a great way to stay connected and relevant to
          recruiters. Many recruiters check LinkedIn to see recommendations,
          etc. that are not on your Resume. <br />
          <br />
          What you can expect from us:
          <br />
          <ul>
            <li>
              Guidance on how to build a LinkedIn profile that makes an impact
              on recruiters & your network
            </li>
            <li>Keywords that match your role</li>
          </ul>
        </>
      ),
      image: service2,
    },
    {
      name: "Resume Development",
      desc: (
        <>
          The Resume Screening round is the first and most critical step in
          getting your application to the next level. <br />
          <br /> What you can expect from us:
          <br />
          <ul>
            <li>Your resume will be written by a team of seasoned experts</li>
            <li>
              They will make sure that your Resume presents your strong points,
              achievements & key skills in a recruiter-friendly format
            </li>
          </ul>
        </>
      ),
      image: service3,
    },
    {
      name: "Interview Preparation",
      desc: (
        <>
          Interviews are the best opportunity to showcase your individuality and
          influence a recruiter into making you an offer. <br />
          <br />
          What you can expect from us:
          <br />
          <ul>
            <li>Pre-research guidance on the interviewer & company</li>
            <li>Complete information about the role</li>
            <li>
              Dos & Don’ts including body language, articulation, standard FAQs
              & responses
            </li>
            <li>How to get a video interview right </li>
          </ul>
        </>
      ),
      image: service5,
    },
    {
      name: "Offer Negotiation",
      desc: (
        <>
          How to negotiate the best terms are one of the biggest challenges
          faced by candidates. <br />
          <br />
          What you can expect from us:
          <br />
          <ul>
            <li>Advice on how to be compensated fairly?</li>
            <li>
              How to understand the perspective of an employer to get the best
              terms
            </li>
            <li>How to read an offer – ESOPs, Flexi Benefits, etc</li>
            <li>What questions to ask to be 100% clear on what you sign on</li>
          </ul>
        </>
      ),
      image: service6,
    },
    {
      name: "Expert on Call",
      desc: (
        <>
          Perfect for candidates who do not need extensive services and have
          only a few questions with regard to their job search. Book a
          telephonic or video call with a Career Coach to get expert advice.
          <br />
          <div style={{ textAlign: "center", paddingRight: 20 }}>
            <button
              className="buttonStyled"
              onClick={() => history.push("/contact")}
            >
              Know More
            </button>
          </div>
        </>
      ),
      image: service7,
    },
  ];

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <FlexContainer>
        <FlexRow>
          <FlexCol
            style={{
              maxHeight: "84vh",
              overflow: "hidden",
            }}
          >
            <img
              src={serviceTopImage}
              className="aboutTopImage"
              alt="Markus Spiske"
              loading="eager"
            />
            <div className="aboutTopCard">
              <div className="heading-1">Our Services</div>
              <div className="divider"></div>
              <p className="para-1">
                A service business is a business model that offers intangible
                value beyond a physical product. Advanced economies have shifted
                towards a service-based economy whereby the total value of
                services may exceed the total value of products as a percentage
                of GDP.
              </p>
            </div>
          </FlexCol>
        </FlexRow>
        <br />

        {service.map((v, i) => {
          return (
            <ServicesInfo
              id={"service" + (i + 1)}
              style={{ marginTop: "80px" }}
              key={i}
            >
              <ServiceInfoHead>{v.name}</ServiceInfoHead>
              <Divider></Divider>
              <ServiceInfoBody>
                <ServicesInfo>
                  <FlexCol
                    size="2"
                    style={{ maxWidth: "60%", paddingRight: 40, fontSize: 18 }}
                  >
                    {v.desc}
                  </FlexCol>
                  <FlexCol
                    size="2"
                    style={{ maxWidth: "40%", position: "relative" }}
                  >
                    <img
                      src={v.image}
                      className="serviceIndImage"
                      alt="by gabrielle-henderson"
                    />
                    <div className="serviceIndShade"></div>
                  </FlexCol>
                </ServicesInfo>
              </ServiceInfoBody>
            </ServicesInfo>
          );
        })}
      </FlexContainer>
    </Suspense>
  );
};

export default ServicePage;
