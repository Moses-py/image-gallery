import styled from "styled-components";

export const LandingPageTopBackground = styled.div`
    right: 0;
    width: 100%;
    height: 70%;
    color: white;
    transition:all ease 0.3s;
    @media (max-width: 768px) {
        height: 60%;
    }
`
export const Image = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
    opacity: .5;
`

export const Overlay = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    z-index: -20;
    background: #111;
`
export const Navbar = styled.div`
    padding: 1rem 2rem;
    background: #fff;
    @media (max-width: 991px) {
        padding: .8rem 1.8rem;
    }
`
export const LogoImageContainer = styled.div`

    @media (max-width: 991px) {
        h1 {
            font-size: 1.5rem;
        }
    }
`
export const LogoName = styled.h1`
    color: #111;
    font-family: 'Montserrat', sans-serif;
`

export const Heading = styled(LogoName)`
    font-size: 3.5rem;
    text-transform: uppercase;
    font-family: 'Montserrat', sans-serif;
    line-height: 1.4;
    color: #fff;
    @media (min-width: 426px) and (max-width: 768px) {
        font-size: 2rem !important;
    }
    @media (max-width: 425px) {
        font-size: 2rem !important;
    }
`

export const LandingDetails = styled.div`

`

export const LandingText = styled.div`
    margin: 5% 22%;
    h4 {
        font-size: 1.2rem;
        font-family: 'Poppins', sans-serif;
        line-height: 1.5;
        color: #fff;
        font-weight: 400;
    }

    @media (max-width: 768px) {
        margin: 5% auto;
        padding: 8%;
        h1 {
            font-size: 2.5rem;
            line-height: 1.3;
        }
        h4 {
            font-size: 1rem;
            margin: 5% auto;
            line-height: 1.7
        }
    }

    @media (min-width: 769px) and (max-width: 1280px) {
        margin: 5% 15%;
        h1 {
            font-size: 2.5rem;
        }
         h4 {
             margin: 5% auto;
         }
    }
`

export const PreferenceRow = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 0 5%;
    flex-wrap: wrap;
`
export const PreferenceHolder = styled.div`
    border: .5px solid #fff;
    padding: .5rem 2rem; 
    border-radius: 25px;
    font-size: .8rem;
    margin: 3% 2%;
    &:hover {
        background: #fff;
        border: none;
        color: #111;
    }
`