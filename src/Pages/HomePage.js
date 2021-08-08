import React, { Suspense, useEffect } from "react";
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

  useEffect(() => {
    window.scrollTo({
      top: 0, // could be negative value
      left: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <FlexContainer data-aos="fade-in" data-aos-duration="400">
      <SlickRow>
        <Slider {...settings} style={{ minHeight: "70vh" }}>
          {/* First Slide */}
          {data.map((v, i) => (
            <div key={i}>
              <div
                style={{
                  backgroundImage: `url(${v.link})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPositionY: "center",
                  cursor: "grab",
                }}
              >
                <SlickCard>
                  <SlickHeader
                    size="48px"
                    data-aos="fade-right"
                    data-aos-delay="100"
                    data-aos-duration="1000"
                  >
                    {v.header}
                  </SlickHeader>
                  <SlickPara
                    size="18px"
                    data-aos="fade-right"
                    data-aos-delay="300"
                    data-aos-duration="1000"
                  >
                    {v.quote}
                  </SlickPara>
                  <SlickItem size="1.2vw">
                    <Link to="/service" className="hover-icon">
                      <span
                        style={{
                          color: "white",
                          position: "relative",
                          bottom: 12,
                          fontSize: 19,
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
          ))}
        </Slider>
      </SlickRow>
      <Suspense fallback={<div className="loader">SYNERGENCE</div>}>
        <Comments />
      </Suspense>
    </FlexContainer>
  );
};

export default HomePage;
