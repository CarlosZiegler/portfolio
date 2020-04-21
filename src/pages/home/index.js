import React from 'react'
import Lottie from 'react-lottie';

import Menu from '../../components/menu'

import { Container, PrimayText, SecundaryText, SubTitleText, TitleText, Email, Footer } from './style'

import animationData from '../../assets/designer.json'
import siteDevelopmentData from '../../assets/testing.json'
import DeveloperData from '../../assets/developer.json'
import ResumeData from '../../assets/resume.json'
import EmailData from '../../assets/email.json'
import ServiceData from '../../assets/service.json'

import github from '../../assets/github.png'
import instagram from '../../assets/insta.png'
import linkedin from '../../assets/in.png'

import ResumePDF from '../../assets/Carlos_Ziegler-German.pdf'


export default function Home() {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,

    };
    const defaultOptionsDevelopment = {
        loop: true,
        autoplay: true,
        animationData: siteDevelopmentData,

    };
    const OptionsDeveloper = {
        loop: true,
        autoplay: true,
        animationData: DeveloperData,

    };
    const OptionsResume = {
        loop: true,
        autoplay: true,
        animationData: ResumeData,

    };
    const OptionsEmail = {
        loop: true,
        autoplay: true,
        animationData: EmailData,

    };
    const OptionsAPI = {
        loop: true,
        autoplay: true,
        animationData: ServiceData,

    };

    return (
        <>
            <header>
                <Container>
                    <Menu />
                </Container >
            </header>
            <main>
                <PrimayText >Hello! I'm Carlos Ziegler</PrimayText>

                <Container>
                    <Lottie className="lottieFile" options={defaultOptions}
                        height={"auto"}
                        width={"800px"}
                    />
                </Container>

                <Container>
                    <SecundaryText >
                        I'm a web developer with a focus on Reactjs and its ecosystem. Passionate about technology and its development tools. I'm a nice guy.
                </SecundaryText>
                </Container>


                <TitleText> My services</TitleText>
                <SubTitleText > Ways I can help you</SubTitleText>


                <Container>
                    <session className="column-2" >
                        <div className="tag">
                            <h4 className="bg-color" > Web Development </h4>
                            <h4 className="bg-color" > Design</h4>

                        </div>
                        <div className="tag">
                            <h4 className="bg-color" >  PWA </h4>
                            <h4 className="bg-color" > Frontend</h4>
                        </div>
                        <div>
                            <Lottie options={defaultOptionsDevelopment}
                                height={"auto"}
                                width={"300px"}
                            />
                        </div>

                    </session>

                </Container>
                <TitleText> My skills</TitleText>
                <Container>
                    <session className="column-2" >
                        <div>
                            <Lottie options={OptionsDeveloper}
                                height={"auto"}
                                width={"300px"}
                            />
                        </div>
                        <div className="tag">
                            <h4 className="bg-color" > HTML </h4>
                            <h4 className="bg-color" > CSS</h4>
                            <h4 className="bg-color" > Javascript</h4>
                        </div>
                        <div className="tag">
                            <h4 className="bg-color" >  ReactJs </h4>
                            <h4 className="bg-color" > GatsbyJs</h4>
                            <h4 className="bg-color" > Cypress</h4>
                        </div>
                        <div className="tag">
                            <h4 className="bg-color" >  NodeJs </h4>
                            <h4 className="bg-color" > ES6</h4>
                            <h4 className="bg-color" > Bootstrap</h4>
                        </div>
                    </session>
                </Container>
                <TitleText> More about me</TitleText>
                <SubTitleText > Look at my resume</SubTitleText>

                <Container>
                    <session className="column-2" >
                        <div>
                            <Lottie options={OptionsResume}
                                height={"auto"}
                                width={"300px"}
                            />
                        </div>
                        <div className="tag">
                            <a href={ResumePDF} target="_blank" rel="noopener noreferrer"><h4 className="bg-color" > Open my Resume </h4></a>
                        </div>

                    </session>
                </Container>
                <TitleText> Don't like PDF</TitleText>
                <SubTitleText > Get my CV in Json</SubTitleText>
                <Container>
                    <session className="column-2" >

                        <div className="tag">
                            <a href={"/api/resume"} target="_blank" rel="noopener noreferrer"><h4 className="bg-color" > Go to API  </h4></a>
                        </div>
                        <div>
                            <Lottie options={OptionsAPI}
                                height={"auto"}
                                width={"300px"}
                            />
                        </div>

                    </session>
                </Container>

                <TitleText> Get in touch</TitleText>
                <SubTitleText > Should we work together?
Contact me! If you want to start working with me then don’t be shy to write me an email .</SubTitleText>

                <Container>
                    <session className="column-2" >
                        <div >
                            <a href="mailto:carlos.ziegler@gmail.com" target="_blank" rel="noopener noreferrer"><Email >carlos.ziegler@gmail.com</Email></a>
                            <Container >
                                <a href="https://www.linkedin.com/in/carlos-ziegler/" target="_blank" rel="noopener noreferrer"  ><img className="contactLogo" src={linkedin} alt="" /></a>
                                <a href="https://github.com/CarlosZiegler" target="_blank" rel="noopener noreferrer"><img className="contactLogo" src={github} alt="" /></a>
                                <a href="https://www.instagram.com/carloszieglerbjj/" target="_blank" rel="noopener noreferrer"><img className="contactLogo" src={instagram} alt="" /></a>
                            </Container>
                        </div>
                        <div>
                            <Lottie options={OptionsEmail}
                                height={"auto"}
                                width={"300px"}
                            />
                        </div>

                    </session>
                </Container>
            </main>
            <Footer>
                <Container>
                    <SecundaryText>2020 ©. All Rights Reserved. Website Design by Ziegler</SecundaryText>
                </Container>
            </Footer>
        </>
    )
}
