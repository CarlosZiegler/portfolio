import React from 'react'
import Lottie from 'react-lottie';

import Menu from '../../components/menu'

import { Container, LottieContainer, PrimayText, SecundaryText } from './style'

import animationData from '../../assets/designer.json'

export default function Home() {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,

    };

    return (
        <>
            <Container>
                <Menu />
            </Container >
            <Container>
                <LottieContainer>
                    <Lottie options={defaultOptions}
                        height={"70vh"}
                        width={"100%"}
                    />
                </LottieContainer>
            </Container>
            <Container>
                <PrimayText>Hello!</PrimayText>
                <SecundaryText>I`m Carlos Ziegler.</SecundaryText>
            </Container>
        </>
    )
}
