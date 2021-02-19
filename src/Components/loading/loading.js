import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import meditation from "./Assets/meditation.gif";

const LoadingOpacity = keyframes`
    0%, 100% {
        opacity: 1;
    }
    25%, 75% {
        opacity: .5;
    }
    50% {
        opacity: .1;
    }
`;

const StyledWrapper = styled.div`
    font-family: "Segoe UI", sans-serif;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f3f3f3;
    box-sizing: border-box;
    z-index: 1;
`;

const StyledMeditation = styled.img`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 400px;
    height: 400px;
`;

const StyledText = styled.h1`
    position: absolute;
    margin-top: 450px;
    text-align: center;
    animation: 3s ${LoadingOpacity} ease-in-out infinite;
    font-size: 2em;
`;

const Loading = () => {


    return (

        <StyledWrapper>
            <StyledMeditation src={meditation} />
            <StyledText>Loading</StyledText>
        </StyledWrapper>

    )
}

export default Loading;