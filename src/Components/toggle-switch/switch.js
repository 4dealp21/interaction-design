import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

const time = '0.2s';
const setAnimation = (from, to) => keyframes({from: from, to: to});


const StyledWrapper = styled.div`
    animation: ${time}  ${({showBackground}) => showBackground && setAnimation({background: '#f3f3f3'}, {background: '#202020'})} linear;
    animation-fill-mode: forwards;
    display: flex;
    width: 100vw;
    height: 100vh;
    background-color: #f3f3f3;
    justify-content: center;
    align-items: center;
`;

const StyledButton = styled.div`
    animation: ${time}  ${({ active }) => active && setAnimation({background: 'rgb(164, 141, 255, 0.4)'}, {background: 'rgb(117, 83, 232)'})} linear;
    animation-fill-mode: forwards;
    background: rgb(164, 141, 255, 0.4);
    border-radius: 2rem;
    color: #fff;
    width: 8.25rem;
    height: 4rem;
`;

const StyledSwitch = styled.div`
    animation: ${time}  ${({ active }) => active && setAnimation({marginLeft: 0}, {marginLeft: '4.5rem'})} linear;
    animation-fill-mode: forwards;
    border-radius: 100%;
    width: 3.5rem;
    height: 3.5rem;
    margin: 0.25rem;
    background: #fff;
    cursor: pointer;
`;

const Toggle = (props) => {

    const [active, setActive] = useState(false);
    const {onActive, onNotActive} = props;

    useEffect(() => {
        if (!active) {
            onNotActive();
            return;
        }

        onActive();

    }, [active])


    const handleClick = () => setActive(!active);

    return (

        <StyledButton active={active} onClick={handleClick}>
            <StyledSwitch active={active} onClick={handleClick} /> 
        </StyledButton>
        
        )
}

const ToggleSwitch = () => {

    const [showBackground, setShowBackground] = useState(false);
    const handleNotActive = () => setShowBackground(false);
    const handleActive = () => setShowBackground(true);

    return (
    <StyledWrapper showBackground={showBackground}>

         <Toggle onNotActive={handleNotActive} onActive={handleActive} />
         
     </StyledWrapper>
    )
};

export default ToggleSwitch;