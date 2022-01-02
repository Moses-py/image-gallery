import styled from "styled-components";

export const CardHolder = styled.div`
    background: #fff;
    border-radius: 15px;
    margin: 15%;
    box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
    padding: 5% 2%;
    width: 100%;
    max-width: 375px;
    div {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    h1 {
        text-align: center;
        color: black;
        font-family: 'Montserrat', sans-serif; 
        font-size: 1.5rem;
        margin-bottom: 7%;
    }

    @media (max-width: 991px) {
        margin: 0 5%;
        width: 100%;
        box-shadow: none;
    }

    @media (min-width: )
`