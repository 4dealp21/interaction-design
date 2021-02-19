import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import window from "./Assets/window.svg";
import eye from "./Assets/eye.svg";
import openeye from "./Assets/openeye.svg";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
    email: yup.string().required('Email is required').email('Not a valid email'),
    password: yup.string().required('Password is required'),
  });

const StyledWrapper = styled.div`
    background-color: #f2f2f2; 
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const StyledContainer = styled.div`
    width: 500px;
    height: 650px;
    background-color: #fff;
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 0px 20px rgb(0, 0, 0, 0.05);
`;

const StyledWindow = styled.img`
    margin-top: -10px;
    margin-bottom: 30px;
`;

const StyledInput = styled.input`
    background: #ffffff;
    border: 1px solid #c7c7c7;
    border-radius: 7px;
    height: 63px;
    width: 337px;
    padding-left: 10px;
    font-size: 18px;
`;

const StyledIcon = styled.img`
    width: 24px;
    height: 24px;
    margin-left: -40px;
    margin-bottom: -10px;
`;

const StyledErrorText = styled.p`
    color: #6C63FF;
`;

const StyledButton = styled.button`
    width: 350px;
    height: 63px;
    background: #6C63FF;
    color: #ffff;
    text-align: center;
    font-size: 18px;
    margin-top: 20px;
    border: 0;
    border-radius: 7px;
    cursor: pointer;
    &:hover {
        background: #655BFC;
    }
    &:active {
        background: #4A3FFF;
    }
`;

const LoginForm = () => {

    const [showPassword, setShowPassword] = useState(false);

    const [submitted, setSubmitted] = useState(false);

    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema)
      });

    const onSubmit = data => console.log(data);

    const handleClick = (e) => {
        setShowPassword(!showPassword);
    };

    return(
        <StyledWrapper>
            <StyledContainer>
            <StyledWindow src={window} />
            <form onSubmit={handleSubmit(onSubmit)}>
                <p>
                    <StyledInput type="text" name="email" placeholder="Email" ref={register()} />
                </p>
                <StyledErrorText> {errors.email?.message}</StyledErrorText>

                <p>
                    <StyledInput type={showPassword ? "text" : "password"} name="password" placeholder="Password" ref={register()} />
                    <StyledIcon src={showPassword ? openeye : eye} onClick={handleClick}></StyledIcon>
                    <StyledErrorText> {errors.password?.message}</StyledErrorText>
                </p>
                <p>
                    <StyledButton> Login </StyledButton>
                </p>
            </form>
            </StyledContainer>
        </StyledWrapper>
    );
};


export default LoginForm;