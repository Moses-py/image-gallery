import styled from "styled-components";

export const Thumb = styled.div`
    height: 100px;
    width: 100px;
    background: linear-gradient(180deg, rgba(0,0,0,.5) 0%, rgba(0,0,0,.5) 100%), url(${props => props.link});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    margin: 5% 3%;
    border-radius: 10px;
    transition: all ease .3s;
    font-family: 'Montserrat', sans-serif; 
    font-size: .8rem;
    font-weight: 500;
    &:hover {
        transform: scale(1.1);
        opacity: .8;
    }
`