import styled from "styled-components";

export const SearchBarContainer = styled.div`
    background: #fff;
    padding: 2% ;
    border-radius: 5px;
    margin-top: 5%;

    @media (max-width: 425px) {
        margin-top:10%;
    }
    input {
        padding: 2% 4%;
        border-radius: 5px;
        border: none;
        background: #111;
        width: 100%;
        color: white;
        outline: none;
    }

    input::placeholder {
        color: white;
        font-weight: 400;
    }
    @media (max-width: 425px) {
        padding: 3% 5%;
        input {
            padding: 4% 6%;
        }
    }
`
