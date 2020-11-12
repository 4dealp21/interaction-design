import React, { useState } from 'react';
import styled from 'styled-components';
import window from './Assets/window.svg';
import eye from './Assets/eye.svg';
import openeye from './Assets/openeye.svg';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object().shape({
    email: yup.string().required('Email is required').email('Not a valid email'),
    password: yup.string().required('Password is required'),
  });

const StyledWrapper = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const StyledHeader = styled.h1`
    color: #1e57f1;
    margin-left: 2rem;
`;

const StyledInput = styled.input`
    background: #ffffff;
    border: 1px solid #c7c7c7;
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
    border: 0;
    cursor: pointer;
    &:hover {
        background: #1C63FF;
    }
`;

const Week4 = () => {

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
            <img src={window} />
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
        </StyledWrapper>
    );
};


export default Week4;