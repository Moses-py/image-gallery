import styled from "styled-components";

export const ModalContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 10;
    background: rgba(0, 0, 0, 0.75);
    display: flex;
    justify-content: center;
    align-items: center;
`

export const CloseModal = styled.span`
    position: absolute;
    top: 30px;
    right: 30px;
    color: #fff;
`

export const ModalCard = styled.div`
    padding: 2rem 1rem;
    margin: 2rem 10%;
    background: white;   
    @media (max-width: 425px) {
        margin: 1rem !important;
    } 
`

export const ModalContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    margin: 5rem auto .5rem auto;
    p {
        color: black;
    }
    @media (max-width: 650px) {
        padding: 0;
        margin: 0;
    }
`
export const ImageContainer = styled.div`
    width: 100%;
    height: 70vh;
    @media (max-width: 650px) {
        height: 100%;
    }
`

export const ModalImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
`

export const ModalDescription = styled.p`
    font-size: .8rem;
    margin: 2rem 1rem;
    text-align: center;
    @media (max-width: 650px) {
        margin-top: 1rem;
        margin-bottom: 5rem; 
    }
`
export const UserDetails = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex: 2;
    & div {
        margin-left: .4rem
    }
`

export const UserImage = styled.img`
    width: 50px;
    object-fit: contain;
`

export const Username = styled.p`
    font-size: 1rem;
    color: #fcfffd;
    @media (max-width: 425px) {
        font-size: .8rem;
    }
`
export const Location = styled(Username)`
    color: #d9f7fa;
`

export const ModalBottomContent = styled.div`
    display: flex;
    // justify-content: space-around;
    align-items: center;
    flex: 1;
`
export const ImageSocialCount = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin-right: 2rem;
    align-items: center;
    p {
        margin: 0 1.5rem;
        display: flex;
        align-items: center;

        & span {
            margin: 0 .5rem;
            font-size: .8rem;
        }
    }

    @media (max-width: 650px) {
        margin-right: 0;
        p {
            margin: 0 .5rem;
        }
    }
`

export const DownloadLink = styled.a``