import React, { Component } from 'react';
import { FlexCol, FlexContainer, FlexRow, ServiceContainer, ServiceLink, ServicesInfo, ServiceInfoHead, Divider, ServiceInfoBody } from '../Styles';
import serviceTopImage from "./../assets/markus-spiske.jpg";
import serviceIndImage from "./../assets/gabrielle-henderson.jpg";
import FeatherIcon from 'feather-icons-react';

const ServicePage = () => {
    const scrollTo = (id) => {
        document.querySelector('#' + id).scrollIntoView({ behavior: 'smooth' });
    }
    return (
        <FlexContainer>
            <FlexRow>
                <FlexCol
                    style={{
                        maxHeight: '84vh',
                        overflow: 'hidden',
                    }}>
                    <img src={serviceTopImage} className="aboutTopImage" alt='Photo by Markus Spiske' />
                    <div className="aboutTopCard">
                        <div className="heading-1">Our Service</div>
                        <div className="divider"></div>
                        <p className="para-1">
                            A service business is a business model that offers intangible value beyond a physical product.
                            Advanced economies have shifted towards a service-based economy whereby the total value of
                            services may exceed the total value of products as a percentage of GDP.
                        </p>
                    </div>
                </FlexCol>
            </FlexRow>
            <br />
            <br />
            <br />
            <br />
            <br />
            <ServiceContainer>
                <ServiceLink onClick={() => scrollTo("service1")}>
                    <FeatherIcon className="cursorOnHover customIcon" icon="file-text" size="60" />
                    <p className="para">Resume Development</p>
                </ServiceLink>
                <ServiceLink onClick={() => scrollTo("service2")}>
                    <FeatherIcon className="cursorOnHover customIcon" icon="help-circle" size="60" />
                    <p className="para">Application Assistance</p>
                </ServiceLink>
                <ServiceLink onClick={() => scrollTo("service3")}>
                    <FeatherIcon className="cursorOnHover customIcon" icon="trending-up" size="60" />
                    <p className="para">Network Building</p>
                </ServiceLink>
                <ServiceLink onClick={() => scrollTo("service4")}>
                    <FeatherIcon className="cursorOnHover customIcon" icon="file-text" size="60" />
                    <p className="para">Resume Development</p>
                </ServiceLink>
                <ServiceLink onClick={() => scrollTo("service5")}>
                    <FeatherIcon className="cursorOnHover customIcon" icon="alert-octagon" size="60" />
                    <p className="para">Offer Negotiation</p>
                </ServiceLink>
                <ServiceLink onClick={() => scrollTo("service6")}>
                    <FeatherIcon className="cursorOnHover customIcon" icon="monitor" size="60" />
                    <p className="para">Coaching</p>
                </ServiceLink>
                <ServiceLink onClick={() => scrollTo("service7")}>
                    <FeatherIcon className="cursorOnHover customIcon" icon="phone" size="60" />
                    <p className="para">Expert on Call</p>
                </ServiceLink>
                <ServiceLink onClick={() => scrollTo("service1")}>
                    <FeatherIcon className="cursorOnHover customIcon" icon="clock" size="60" />
                    <p className="para">24x7 Customer Care</p>
                </ServiceLink>
            </ServiceContainer>


            {
                [1, 2, 3, 4, 5, 6, 7, 8, 9].map((v, i) => {
                    return (
                        <ServicesInfo id={"service" + (i + 1)} style={{ marginTop: '80px' }} key={i}>
                            <ServiceInfoHead>Resume Development</ServiceInfoHead>
                            <Divider></Divider>
                            <ServiceInfoBody>
                                <ServicesInfo>
                                    <FlexCol size="2" style={{ maxWidth: '45%' }}>
                                        The Resume Screening round is the first and most critical step in getting your application to the next level.<br />
                                        <br />
                                What you can expect from us:<br />
                                -	Your resume will be written by a team of seasoned experts<br />
                                -	They will make sure that your Resume presents yourstrong points,  achievements & key skills in a recruiter-friendly format.<br />
                                    </FlexCol>
                                    <FlexCol size="1" style={{ maxWidth: '40%', position: 'relative' }}>
                                        <img src={serviceIndImage} className="serviceIndImage" />
                                        <div className="serviceIndShade"></div>
                                    </FlexCol>
                                </ServicesInfo>
                            </ServiceInfoBody>
                        </ServicesInfo>

                    )
                })
            }
        </FlexContainer>
    );
}

export default ServicePage;