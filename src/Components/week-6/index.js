import React, {useState} from 'react';
import styled, {keyframes} from 'styled-components';


const StyledWrapper = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;
`;

const StyledMenu = styled.ul`
    animation: 0.5s ${keyframes({from: {opacity: 0}, to: {opacity: 1}})} linear;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 300px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    & li {

        &:hover {
            background: grey;
        }
        cursor: pointer;
        text-align: center;
        width: 80%;
        height: 10px;
        list-style: none;
        margin-top: 1rem;
        padding: 30px;
    }

`;


export const Menu = (props) => {

    const { open, onClick } = props;

    return (
    <>
        {
            open && (<StyledMenu>
                <li onClick={onClick}>Menu Item 1</li>
                <li onClick={onClick}>Menu Item 2</li>
                <li onClick={onClick}>Menu Item 3</li>
            </StyledMenu>)
        }
    </>
    )    
}


const Week6 = () => {

    const handleClick = () => {
        setOpen(!open);
    }

    const [open, setOpen] = useState(false);

    return (
        <StyledWrapper>
            <button onClick={handleClick}> Click me</button>
            <Menu open={open} onClick={handleClick} />
        </StyledWrapper>
    )
}

export default Week6