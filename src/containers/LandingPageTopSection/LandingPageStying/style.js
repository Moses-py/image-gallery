import styled from "styled-components";

export const LandingPageTopBackground = styled.div`
    position: relative;
    right: 0;
    width: 100%;
    color: white;
    transition:all ease 0.3s;
    @media (max-width: 768px) {
        padding-bottom: 10%; 
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
    background: transparent;

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
    color: #fff;
    font-family: 'Montserrat', sans-serif;
`

export const Heading = styled(LogoName)`
font-size: 3.5rem;
text-transform: uppercase;
font-family: 'Montserrat', sans-serif;
line-height: 1.4;
`

export const LandingDetails = styled.div`
    display: flex;
    flex-wrap: wrap;
    div {
        flex: 1;
    }
 }
    @media (max-width: 991px) {
        flex-direction: column;
    }
`
export const CardContainer = styled.div`
position: relative;
padding: 20% 0;
.absoluteImage {
    position: absolute;
    width: 300px;
    object-fit: contain;
    border-radius: 10px;
    opacity: .9;
}
.imageOne {
    top: 100px;
    left: 300px;
    opacity: 1 !important;
}

.imageTwo {
    left: 120px;
    top: 0;
    width: 300px;
    z-index: -1
}

.imageThree {
    bottom: 120px;
    right: 80px;
    z-index: -1;
}

.imageFour {
    top: 0;
    right: 80px;
    z-index: -1;
}

.imageFive {
    bottom: 120px;
    left: 120px;
    z-index: -1;
}

.imageSix {
    right: 20px;
    top: 30%;
    z-index: -1;
}

.imageSeven {
    top: 30%;
    left: 40px;
    z-index: -1;
}

@media (min-width: 992px) and (max-width: 1440px) {
    padding: 0;
}

@media (max-width: 1024px) {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 0;
        padding: 0;
        .imageArray {
            display: none;
        }
    }
`

export const LandingText = styled.div`
    margin: 10% auto;
    padding: 10%;
    h4 {
        font-size: 1.2rem;
        font-family: 'Poppins', sans-serif;
        line-height: 1.5;
        color: #fff;
        margin-top: 5%;
        font-weight: 400;
    }

    @media (max-width: 767px) {
        margin: 10% auto;
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

    @media (min-width: 768px) and (max-width: 991px) {
        h1 {
            font-size: 3.2rem;
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