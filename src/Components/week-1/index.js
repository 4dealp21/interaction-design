import React from 'react';
import loading from "./Assets/loading.gif";
import styled from "styled-components";

const StyledWrapper = styled.div`
  background: #f9f9f9
  font-family: Helvetica;
  display: flex;
  justify-content: center;
  flex-direction: row-reverse;
  `;

const StyledDescrip = styled.h1`
  color: #1A2227;
  font-size: 22px;
  text-align: center;
  `;

const Week1 = () => (
  <>
    <StyledWrapper>
      <div>
        <img src={loading} />
        <StyledDescrip> Loading </StyledDescrip>
      </div>
    </StyledWrapper>
  </>
);

export default Week1;