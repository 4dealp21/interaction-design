import React, { useState } from "react";
import styled, { keyframes } from "styled-components";


const StyledWrapper = styled.div`
    font-family: "Segoe UI", sans-serif;
    width: 100vw;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    text-align: center;
    align-items: center;
    min-height: 100vh;
    background-color: #f3f3f3;
`;

const StyledButton = styled.div`
    width: 300px;
    height: 70px;
    border: none;
    color: #fff;
    background-color: #7553E8;
    border-radius: 20px;
    box-shadow: inset 0 0 0 0 #ECAB55;
    transition: ease-out 0.3s;
    font-size: 2rem;
    outline: none;
    cursor: pointer;
    padding-top: 20px;

    &:hover {
        box-shadow: inset -360px 0 0 0 #ECAB55;
        color: #000;
    }
    &:active {
        box-shadow: inset -360px 0 0 0 #DE9C45;
        color: #fff;
    }
`;


const Button = () => {

    return (

        <StyledWrapper>
            <StyledButton>BUTTON</StyledButton>
        </StyledWrapper>

    )
}

export default Button;