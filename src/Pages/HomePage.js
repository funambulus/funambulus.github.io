import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import { Card, SlickCard, SlickHeader, SlickPara, SlickItem, SlickRow, FlexContainer, FlexRow, FlexCol } from '../Styles';
import FeatherIcon from 'feather-icons-react';
import dianaFernandes from "./../assets/diana-fernandes.webp";
import slideOneImage from "./../assets/dylan-gillis.webp";
import testimonalHead from "./../assets/niver-vega.webp";
import testimonalImage from "./../assets/ben-parker.webp";
import "./style.css";
import { useHistory } from 'react-router';

const HomePage = () => {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: false
    };

    const data = [
        // {
        //     header: 'Synergence',
        //     quote: "“join us to work together and  to make difference in your field”",
        //     icon: '',
        //     link: ''
        // }, 
        {
            header: 'Attract more recruiters',
            quote: 'Get a powerful resume and make your connect with recruiter',
            icon: '',
            link: ''
        }, {
            header: 'Improve Personal Branding',
            quote: 'Learn how to build an all-star profile on job portals & increase your network',
            icon: '',
            link: ''
        }, {
            header: 'Career Counseling',
            quote: 'Understand your value proposition, your strengths and areas of development',
            icon: '',
            link: ''
        }, {
            header: 'Accelerate your job search ',
            quote: 'Be market ready, look good on paper, feel good at interviews',
            icon: '',
            link: ''
        }
    ]

    const [slideData, setSlideData] = useState(data);

    const history = useHistory();

    return (
        <FlexContainer>
            <SlickRow>
                <Slider {...settings} style={{ minHeight: '70vh' }}>
                    {
                        slideData.map((obj, i) => {
                            return (
                                <div key={i}>
                                    <div style={{
                                        backgroundImage: 'url(' + slideOneImage + ')',
                                        backgroundSize: 'cover',
                                        backgroundRepeat: 'no-repeat',
                                        backgroundPositionY: 'top'
                                    }}>
                                        <SlickCard>
                                            <SlickHeader size="3.8vw" data-aos="fade-right" data-aos-delay="100" data-aos-duration="1000">
                                                {obj.header}
                                            </SlickHeader>
                                            <SlickPara size="1.2vw" data-aos="fade-right" data-aos-delay="300" data-aos-duration="1000">
                                                {obj.quote}
                                                {/* “join us to work together and  to make difference in your field” */}
                                            </SlickPara>
                                            <SlickItem size="1.2vw">
                                                <FeatherIcon className="cursorOnHover" style={{ stroke: '#FFFFFF' }} icon="arrow-right" size="40" onClick={() => history.push("/service")} />
                                            </SlickItem>
                                        </SlickCard>
                                    </div>
                                </div>
                            )
                        })
                    }

                </Slider>
            </SlickRow>

            <FlexRow style={{ minHeight: '50vh' }}>
                <FlexCol style={{
                    background: `url(${testimonalHead})`,
                    backgroundSize: 'cover',
                    height: 200,
                    backgroundPosition: '0 45%',
                    backgroundAttachment: 'fixed'
                }}>
                    <div
                        style={{
                            color: 'white',
                            fontSize: 36,
                            fontWeight: 'bold',
                            padding: '78px 0px',
                            textAlign: 'center',
                            backdropFilter: 'brightness(0.5)'
                        }}
                    >
                        Our Satisfied Customers
                        </div>
                </FlexCol>
            </FlexRow>
            <Card data-aos="fade-in">
                <FlexRow style={{ minHeight: '16vh' }}>
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
            <Card data-aos="fade-in">
                <FlexRow style={{ minHeight: '16vh' }}>
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
        </FlexContainer >
    );
}

export default HomePage;