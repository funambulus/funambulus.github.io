import React, { Suspense } from 'react';
import { FlexCol, FlexContainer, FlexRow, ServiceContainer, ServiceLink, ServicesInfo, ServiceInfoHead, Divider, ServiceInfoBody } from '../Styles';
import serviceTopImage from "./../assets/markus-spiske.webp"
import serviceIndImage from "./../assets/gabrielle-henderson.webp";
import FeatherIcon from 'feather-icons-react';

const ServicePage = () => {
    const scrollTo = (id) => {
        document.querySelector('#' + id).scrollIntoView({ behavior: 'smooth' });
    }

    const service = [
        {
            name: "Resume Development",
            desc: <>
                The Resume Screening round is the first and most critical step in getting your application to the
                next level. <br /><br /> What you can expect from us:<br />
                <ul>
                    <li>Your resume will be written by a team of seasoned experts</li>
                    <li>They will make sure that your Resume presents your strong points, achievements & key skills in a recruiter-friendly format</li>
                </ul>
            </>
        },
        {
            name: "Application Assistance",
            desc: <>
                Ensure your application stands out and travels well within the recruiter company. <br />
                <br />
                What you can expect from us:<br />
                <ul>
                    <li>Pre-research before applying</li>
                    <li>Assistance with cover notes</li>
                    <li>How to match your cover note with the job description</li>
                </ul>
            </>
        },
        {
            name: "LinkedIn Profile & Network Building",
            desc: <>
                Job portals are a great way to stay connected and relevant to recruiters. Many recruiters check LinkedIn to see recommendations, etc. that are not on your Resume. <br />
                <br />
            What you can expect from us:<br />
                <ul>
                    <li>Guidance on how to build a LinkedIn profile that makes an impact on recruiters & your network</li>
                    <li>Keywords that match your role</li>
                </ul>
            </>
        },
        {
            name: "Interview Preparation",
            desc: <>
                Interviews are the best opportunity to showcase your individuality and influence a recruiter into making you an offer. <br />
                <br />
                What you can expect from us:<br />
                <ul>
                    <li>Pre-research guidance on the interviewer & company</li>
                    <li>Complete information about the role</li>
                    <li>Dos & Don’ts including body language, articulation, standard FAQs & responses</li>
                    <li>How to get a video interview right </li>
                </ul>
            </>
        },
        {
            name: "Offer Negotiation",
            desc: <>
                How to negotiate the best terms are one of the biggest challenges faced by candidates. <br />
                <br />
                What you can expect from us:<br />
                <ul>
                    <li>Advice on how to be compensated fairly?</li>
                    <li>How to understand the perspective of an employer to get the best terms</li>
                    <li>How to read an offer – ESOPs, Flexi Benefits, etc</li>
                    <li>What questions to ask to be 100% clear on what you sign on</li>
                </ul>
            </>
        },
        {
            name: "Coaching",
            desc: <>
                We help you become the best version of yourself.<br />
                <br />
                <ul>
                    <li>
                        Deep understanding of your career path, decisions, strengths, areas of development to build a strong value proposition for recruiters
                    </li>
                </ul>
            </>
        },
        {
            name: "Expert on Call",
            desc: <>
                Perfect for candidates who do not need extensive services and have only a few questions with regard to their job search.
                Book a telephonic or video call with a Career Coach to get expert advice.<br />
                <div style={{ textAlign: 'center', paddingRight: 20 }}>
                    <button className="buttonStyled">Know More</button>
                </div>
            </>
        },
    ];

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <FlexContainer>
                <FlexRow>
                    <FlexCol
                        style={{
                            maxHeight: '84vh',
                            overflow: 'hidden',
                        }}>
                        <img src={serviceTopImage} className="aboutTopImage" alt='Markus Spiske' loading="eager" />
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
                    service.map((v, i) => {
                        return (
                            <ServicesInfo id={"service" + (i + 1)} style={{ marginTop: '80px' }} key={i}>
                                <ServiceInfoHead>{v.name}</ServiceInfoHead>
                                <Divider></Divider>
                                <ServiceInfoBody>
                                    <ServicesInfo>
                                        <FlexCol size="2" style={{ maxWidth: '60%', paddingRight: 40, fontSize: 18 }}>
                                            {v.desc}
                                        </FlexCol>
                                        <FlexCol size="1" style={{ maxWidth: '40%', position: 'relative' }}>
                                            <img src={serviceIndImage} className="serviceIndImage" alt="by gabrielle-henderson" />
                                            <div className="serviceIndShade"></div>
                                        </FlexCol>
                                    </ServicesInfo>
                                </ServiceInfoBody>
                            </ServicesInfo>

                        )
                    })
                }
            </FlexContainer>
        </Suspense>
    );
}

export default ServicePage;