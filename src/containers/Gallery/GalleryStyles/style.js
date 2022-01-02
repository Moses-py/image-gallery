import styled from "styled-components";


export const GallerySection = styled.section`
    margin-top: -3rem;
    background: black;
    padding-bottom: 3rem;
`
export const GalleryContainer = styled.div`
    padding: 4% 4%;
    break-inside: avoid;
    column-count: 3;
    gap: 10px;
    background: white;
    border-radius: 30px;
    margin: 2rem 3rem;
    @media (max-width: 991px) and (min-width: 425px) {
        column-count: 2;
    }

    @media (max-width: 424px ) {
        column-count: 1;
        margin: .5rem 1rem;
        border-radius: 10px;
    }
`

export const Image = styled.img`
    display: flex;
    width: 100%;
    margin-top: 1.5%;
    border-radius: 10px;
    opacity: .9;
    transition: all ease .4s;
    &:hover {
        transform: scale(.9);
        border-radius: 10px;
        opacity: 1;
    }
`

export const Heading = styled.h1`
    font-size: 2.5rem;
    font-weight: 700;
    text-align: center;
    text-transform: uppercase;
    margin: 3rem;
`

export const InterestContainer = styled.div`
    margin: 2rem 4rem;
    padding: 3rem;
`

export const PreferenceRow = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    column-count: 5;
    gap: 10px;
    background: white;
`
export const PreferenceHolder = styled.div`
    border: .5px solid #fff;
    background: #111;
    color: #fff;
    padding: .5rem 2rem; 
    border-radius: 25px;
    font-size: .8rem;
    margin: 3% 2%;
    cursor: pointer;
    &:hover {
        background: #fff;
        border: .5px solid #111;
        color: #111;
    }
`