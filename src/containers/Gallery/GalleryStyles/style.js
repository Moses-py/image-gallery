import styled from "styled-components";


export const GallerySection = styled.section`
    background: #fff;
    padding-bottom: 3rem;
`
export const GalleryContainer = styled.div`
    max-width: 1024px;
    margin-top: 0;
    padding: 0 2rem;
    margin-right: auto;
    margin-left: auto;
    background: white;
    border-radius: 30px;
    @media (max-width: 424px ) {
        margin: .5rem;
        border-radius: 10px;
        padding: 1rem
    }
`

export const ImageHolder = styled.div`
    columns: 1;
    column-gap: 10px;
    padding: 5;
    overflow: hidden;

    .imageContainer {
        overflow: hidden;
        border-radius: 10px;
    }
    @media only screen and (max-width: 1023px) and (min-width: 768px) {  
        columns: 2;
    }
    @media only screen and (min-width: 1024px) {
          columns: 4;
      }
`

export const Image = styled.img`
    width: 100%;
    display: inline-block;
    vertical-align: top;
    margin-bottom: 10px;
    margin-top: 1.5%;
    border-radius: 10px;
    transition: all linear .4s;
    &:hover {
        transform: scale(1.1);
        border-radius: 10px;
    }
`

export const InterestContainer = styled.div`
    margin: 0 auto;
    padding: 0 auto;
    @media (max-width: 425px) {
        padding: 1.5rem .5rem;
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