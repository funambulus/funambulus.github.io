import React, { useState } from 'react';
import Slider from "react-slick";
import { Card, SlickCard, SlickHeader, SlickPara, SlickItem, SlickRow, FlexContainer, FlexRow, FlexCol } from '../Styles';
import FeatherIcon from 'feather-icons-react';
import slideOneImage from "./../assets/dylan-gillis.jpg";
import testimonalHead from "./../assets/niver-vega.jpg";
import testimonalImage from "./../assets/ben-parker.jpg";
import "./style.css";

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
        {
            header: 'Synergence',
            quote: "“join us to work together and  to make difference in your field”",
            icon: '',
            link: ''
        }, {
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
                                            <SlickHeader size="70px">
                                                {obj.header}
                                            </SlickHeader>
                                            <SlickPara size="22px">
                                                {obj.quote}
                                                {/* “join us to work together and  to make difference in your field” */}
                                            </SlickPara>
                                            <SlickItem size="24px">
                                                <FeatherIcon className="cursorOnHover" icon="arrow-right" size="40" onclick={() => alert("click!!")} />
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
                }}>
                    <div
                        style={{
                            color: 'white',
                            fontSize: 36,
                            fontWeight: 'bold',
                            padding: '70px 0px',
                            textAlign: 'center'
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
                            “What makes the experience with Synergence completely worth it is the level
                            of personalization that helps you present yourself better to recruiters.”
                        </p>
                        <p>
                            ~ John Doe, Engineer
                        </p>
                    </FlexCol>
                    <FlexCol size="2">
                        <img src={testimonalImage} alt="profile" className="testimonials_image" />
                    </FlexCol>
                </FlexRow>
            </Card>
            <Card>
                <FlexRow style={{ minHeight: '20vh' }}>
                    <FlexCol size="10" className="testimonials_desc">
                        <p>
                            “What makes the experience with Synergence completely worth it is the level
                            of personalization that helps you present yourself better to recruiters.”
                        </p>
                        <p>
                            ~ John Doe, Engineer
                        </p>
                    </FlexCol>
                    <FlexCol size="2">
                        <img src={testimonalImage} alt="profile" className="testimonials_image" />
                    </FlexCol>
                </FlexRow>
            </Card>
        </FlexContainer >
    );
}

export default HomePage;