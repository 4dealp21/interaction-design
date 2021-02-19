import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import header from "./Assets/modal_image.jpg";
import rocket from "./Assets/rocket.svg";
import CloseIcon from "./Assets/close_icon.svg"; 
import logo from "./Assets/logo.svg"; 


const SlideIn = keyframes`
  0% {
    opacity: 0;
    top: 2000px;
  }
  100% {
    opacity: 1;
  }
`;

const background = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const StyledModalWrapper = styled.div`
    font-family: "Segoe UI", sans-serif;
    width: 100vw;
    height: 100vh;
    color: #fff;
    position: fixed;
    top: 0;
    z-index: 1;
    background: rgb(0,0,0,0.37);
    display: flex;
    justify-content: center;
    align-items: center;
    animation: 0.8s ${background} ease-out;
`;

const StyledTrigger = styled.button`
    width: 200px;
    height: 50px;
    border: none;
    border-radius: 10px;
    background-color: #3CB46E;
    color: #fff;
    font-weight: 600;
    cursor: pointer;
`;

const StyledModalWrapperL = styled.div`
    font-family: "Segoe UI", sans-serif;
    width: 100vw;
    height: 100vh;
    color: #fff;
    position: fixed;
    top: 0;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: 1s ${SlideIn} ease-out;
`;


const StyledCloseContainer = styled.div`
    position: fixed;
    z-index: 3px:
    width: 30px;
    height: 30px;
    margin-top: -618px;
    margin-left: 490px;
    cursor: pointer;
`;

const StyledCloseIcon = styled.img`
    width: 20px;
    height: 20px;
`;

const StyledModal = styled.div`
    position: fixed;
    z-index: 2;
    width: 464px;
    height: 597px;
    color: #fff;
    background-color: #fff;
`;

const StyledHeader = styled.div`
    position: fixed;
    z-index: 2;
    width: 464px;
    height: 294px; 
`;

const StyledImg = styled.img`
    object-fit: cover;
    position: fixed;
    z-index: 2;
    width: 464px;
    height: 294px; 
`;

const StyledLogo = styled.img`
    position: absolute;
    width: 67px;
    height: 47px;
    z-index: 3;
    margin-top: 20px;
    margin-left: 20px;
`;

const StyledTextWrapper = styled.div`
    position: relative;
    z-index: 2;
    width: 464px;
    height: 219px;
    top: 300px;
    justify-content: center;
    text-align: left;
`;

const StyledRocket = styled.img`
    position: absolute;
    width: 20px;
    height: 20px;
    top: 65px;
    margin-left: 30px;
`;

const StyledRocket2 = styled.img`
    position: absolute;
    width: 20px;
    height: 20px;
    top: 105px;
    margin-left: 30px;
`;

const StyledRocket3 = styled.img`
    position: absolute;
    width: 20px;
    height: 20px;
    top: 145px;
    margin-left: 30px;
`;

const StyledH1 = styled.h1`
    position: absolute;
    font-size: 22px;
    font-weight: 600;
    color: #414141;
    margin-left: 30px;
    margin-top: 5px;
`;
const StyledH2 = styled.h2`
    position: relative;
    top: 60px;
    font-size: 18px;
    font-weight: 400;
    color: #393939;
    margin-left: 60px;
    margin-top: 17px;
`;

const StyledButtonContainer = styled.div`
    position: relative;
    z-index: 2;
    justify-content: center;
    text-align: left;
`;

const StyledButton = styled.button`
    position: absolute;
    top: 280px;
    color: #fff;
    background-color: #3CB46E;
    padding: 20px 160px 20px 160px;
    font-size: 20px;
    font-weight: 600;
    cursor: pointer;
    border: 0;
    margin-left 30px;
    &:hover {
        background-color: #2EA35F;
    }
    &:active {
        background-color: #0B7436;
    }
`;


const Modal = (props) => {

    const { show, onClose, children } = props;

    const blockClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
    }

    return (
        <>
            {show && (<StyledModalWrapper onClick={onClose}>
                <StyledModalWrapperL>
                    <StyledCloseContainer onClick={onClose}>
                        <StyledCloseIcon src={ CloseIcon } />
                    </StyledCloseContainer>
                    <StyledModal onClick={blockClick}>
                            
                        {children}
                    </StyledModal>
                </StyledModalWrapperL>
                
            </StyledModalWrapper>)}
        </>
    )
}


const ModalTab = () => {

    const [showModal, setShowModal] = useState(false);
    const handleClose = () => setShowModal(false);
    const handleClick = () => setShowModal(true);

    return <>

        <Modal show={showModal} onClose={handleClose}>
            <StyledHeader>
                <StyledImg src = { header } ></StyledImg>
                <StyledLogo src = { logo } ></StyledLogo>
            </StyledHeader>
            <StyledTextWrapper>
                <StyledRocket src = { rocket } ></StyledRocket>
                <StyledRocket2 src = { rocket } ></StyledRocket2>
                <StyledRocket3 src = { rocket } ></StyledRocket3>
                <StyledH1>Beautiful Free Images & Pictures</StyledH1>
                <StyledH2> - Better than any royalty free or stock photos.</StyledH2>
                <StyledH2> - Copyright free pictures for everyone!</StyledH2>
                <StyledH2> - Wide collection of images!</StyledH2>
            </StyledTextWrapper>
            <StyledButtonContainer>
                <StyledButton>Join Free</StyledButton>
            </StyledButtonContainer>
    
        </Modal>

        <StyledTrigger onClick={handleClick} >Click me!</StyledTrigger>

        </>
}

export default ModalTab;