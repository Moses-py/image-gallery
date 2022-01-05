import styled from "styled-components";


export const GallerySection = styled.section`
    background: #fff;
    padding-bottom: 3rem;
`
export const GalleryContainer = styled.div`
    margin-top: 0;
    padding: 0 2rem;
    margin-right: 10%;
    margin-left: 10%;
    background: white;
    border-radius: 30px;
    @media (max-width: 767px ) {
        margin: .5rem;
        padding: 1rem
    }

    @media only screen and (min-width: 768px) and (max-width: 1440px) {
        margin: 1rem;
    }
`

export const ImageHolder = styled.div`
    columns: 1;
    column-gap: 20px;
    overflow: hidden;

    .imageContainer {
        overflow: hidden;
        position: relative;
    }
    .imageList {
        width: 100%;
        margin-bottom: 15px;
        margin-top: 1.5%;
        transition: all ease .5s !important;
        &:hover {
            transform: scale(1.1);
            opacity: .8;
        }
    }
    @media only screen and (min-width: 500px) and (max-width: 767px) {
        columns: 2;
  }
    @media only screen and (max-width: 1023px) and (min-width: 768px) {  
        columns: 3;
    }
    @media only screen and (min-width: 1024px) {
          columns: 4;
    }
`

export const InterestContainer = styled.div`
    margin: 0 ;
    padding: 0 ;
    @media (max-width: 425px) {
        padding: 0;
        margin: 0 0;

    }
`

export const PreferenceRow = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3% 2%;
    @media (max-width: 650px) {
        flex-wrap: wrap;
    }
`
export const PreferenceHolder = styled.div`
    border: .5px solid #fff;
    background: #111;
    color: #fff;
    padding: .5rem 2rem; 
    border-radius: 25px;
    font-size: .8rem;
    margin: 3%;
    cursor: pointer;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    &:hover {
        background: #fff;
        border: .5px solid #111;
        color: #111;
    }
`

export const Error = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ErrorImage = styled.img`
    width: 300px;
    object-fit: contain;
`

export const ErrorText = styled.p`
    text-align: center;
    font-size: 1.1rem;
    font-weight: lighter;
    color: light-grey;
    margin-top: 2rem;
`
export const FootNote = styled.p`
    text-align: center;
    font-size: .9rem;
    color: grey;
`