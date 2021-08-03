import React, { Suspense } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import {
  SlickCard,
  SlickHeader,
  SlickPara,
  SlickItem,
  SlickRow,
  FlexContainer,
} from "../Styles";
import "slick-carousel/slick/slick.css";
import FeatherIcon from "feather-icons-react";

import slideOne from "./../assets/attractrecruiters/edmond-dantes.webp";
import slideTwo from "./../assets/improve-branding/austin-distel.webp";
import slideThird from "./../assets/career-counseling/pexels-mentatdgt.webp";
import slideFour from "./../assets/accelerate-your-job/pexels-andrea-piacquadio-selected.webp";

import "./style.css";

const Comments = React.lazy(() =>
  import("./../Component/ReusableComponents/Comments")
);

const HomePage = () => {
  const settings = {
    dots: true,
    infinite: true,
    lazyLoad: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
  };

  const data = [
    {
      header: "Attract more recruiters",
      quote: "Get a powerful resume and make your connect with more recruiters",
      icon: "",
      link: slideOne,
    },
    {
      header: "Improve Personal Branding",
      quote:
        "Learn how to build an all-star profile on job portals & increase your network",
      icon: "",
      link: slideTwo,
    },
    {
      header: "Career Counseling",
      quote:
        "Understand your value proposition, your strengths and areas of development",
      icon: "",
      link: slideThird,
    },
    {
      header: "Accelerate your job search ",
      quote: "Be market ready, look good on paper, feel good at interviews",
      icon: "",
      link: slideFour,
    },
  ];

  return (
    <FlexContainer>
      <SlickRow>
        <Slider {...settings} style={{ minHeight: "70vh" }}>
          {/* First Slide */}
          <div>
            <div
              style={{
                backgroundImage: `url(${slideOne})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPositionY: "center",
                cursor: "grab",
              }}
            >
              <SlickCard>
                <SlickHeader
                  size="3.8vw"
                  data-aos="fade-right"
                  data-aos-delay="100"
                  data-aos-duration="1000"
                >
                  {data[0].header}
                </SlickHeader>
                <SlickPara
                  size="1.2vw"
                  data-aos="fade-right"
                  data-aos-delay="300"
                  data-aos-duration="1000"
                >
                  {data[0].quote}
                </SlickPara>
                <SlickItem size="1.2vw">
                  <Link to="/service">
                    <span
                      style={{
                        color: "white",
                        position: "relative",
                        bottom: 12,
                      }}
                    >
                      See More
                    </span>
                    <FeatherIcon
                      style={{ stroke: "#FFF" }}
                      icon="chevron-right"
                      size="32"
                    />
                  </Link>
                </SlickItem>
              </SlickCard>
            </div>
          </div>
          {/* Second Slide */}
          <div>
            <div
              style={{
                backgroundImage: `url(${slideTwo})`,
                // backgroundImage: `url(${obj.link})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPositionY: "center",
                cursor: "grab",
              }}
            >
              <SlickCard>
                <SlickHeader
                  size="3.8vw"
                  data-aos="fade-right"
                  data-aos-delay="100"
                  data-aos-duration="1000"
                >
                  {data[1].header}
                </SlickHeader>
                <SlickPara
                  size="1.2vw"
                  data-aos="fade-right"
                  data-aos-delay="300"
                  data-aos-duration="1000"
                >
                  {data[1].quote}
                </SlickPara>
                <SlickItem size="1.2vw">
                  <Link to="/service">
                    <span
                      style={{
                        color: "white",
                        position: "relative",
                        bottom: 12,
                      }}
                    >
                      See More
                    </span>
                    <FeatherIcon
                      style={{ stroke: "#FFF" }}
                      icon="chevron-right"
                      size="32"
                    />
                  </Link>
                </SlickItem>
              </SlickCard>
            </div>
          </div>
          {/* Third Slide */}
          <div>
            <div
              style={{
                backgroundImage: `url(${slideThird})`,
                // backgroundImage: `url(${obj.link})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPositionY: "center",
                cursor: "grab",
              }}
            >
              <SlickCard>
                <SlickHeader
                  size="3.8vw"
                  data-aos="fade-right"
                  data-aos-delay="100"
                  data-aos-duration="1000"
                >
                  {data[2].header}
                </SlickHeader>
                <SlickPara
                  size="1.2vw"
                  data-aos="fade-right"
                  data-aos-delay="300"
                  data-aos-duration="1000"
                >
                  {data[2].quote}
                </SlickPara>
                <SlickItem size="1.2vw">
                  <Link to="/service">
                    <span
                      style={{
                        color: "white",
                        position: "relative",
                        bottom: 12,
                      }}
                    >
                      See More
                    </span>
                    <FeatherIcon
                      style={{ stroke: "#FFF" }}
                      icon="chevron-right"
                      size="32"
                    />
                  </Link>
                </SlickItem>
              </SlickCard>
            </div>
          </div>
          {/* Fourth Slide */}
          <div>
            <div
              style={{
                backgroundImage: `url(${slideFour})`,
                // backgroundImage: `url(${obj.link})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPositionY: "center",
                cursor: "grab",
              }}
            >
              <SlickCard>
                <SlickHeader
                  size="3.8vw"
                  data-aos="fade-right"
                  data-aos-delay="100"
                  data-aos-duration="1000"
                >
                  {data[3].header}
                </SlickHeader>
                <SlickPara
                  size="1.2vw"
                  data-aos="fade-right"
                  data-aos-delay="300"
                  data-aos-duration="1000"
                >
                  {data[3].quote}
                </SlickPara>
                <SlickItem size="1.2vw">
                  <Link to="/service">
                    <span
                      style={{
                        color: "white",
                        position: "relative",
                        bottom: 12,
                      }}
                    >
                      See More
                    </span>
                    <FeatherIcon
                      style={{ stroke: "#FFF" }}
                      icon="chevron-right"
                      size="32"
                    />
                  </Link>
                </SlickItem>
              </SlickCard>
            </div>
          </div>
        </Slider>
      </SlickRow>
      <Suspense fallback={<div>Loading...</div>}>
        <Comments />
      </Suspense>
    </FlexContainer>
  );
};

export default HomePage;
