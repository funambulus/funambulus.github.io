import React, { useState } from 'react';
import Slider from "react-slick";
import { SlickCard, SlickHeader, SlickPara, SlickItem, SlickRow, FlexContainer } from '../Styles';
import FeatherIcon from 'feather-icons-react';
import slideOneImage from "./../assets/dylan-gillis.jpg";
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

                    {/* <div>
                        <div style={{
                            backgroundImage: 'url(' + slideOneImage + ')',
                            backgroundSize: 'contain'
                        }}>
                            <SlickCard>
                                <SlickHeader size="70px">
                                    Attract more recruiters
                                </SlickHeader>
                                <SlickPara size="22px">
                                    “join us to work together and  to make difference in your field”
                                </SlickPara>
                                <SlickItem size="24px">
                                    <FeatherIcon icon="arrow-right" size="40" />
                                </SlickItem>
                            </SlickCard>
                        </div>
                    </div>
                    <div>
                        <h3>2</h3>
                    </div>
                    <div>
                        <h3>3</h3>
                    </div>
                    <div>
                        <h3>4</h3>
                    </div>
                    <div>
                        <h3>5</h3>
                    </div>
                    <div>
                        <h3>6</h3>
                    </div> */}
                </Slider>
            </SlickRow>
        </FlexContainer >
    );
}

export default HomePage;