import styled from "styled-components";

export const SearchBarContainer = styled.div`
    background: #fff;
    padding: 5% 7%;
    border-radius: 5px;
    margin-top: 10%;
    input {
        padding: 5% 10%;
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

    @media (max-width: 991px) {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`