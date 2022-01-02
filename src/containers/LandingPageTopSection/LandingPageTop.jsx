import React from 'react'
import {Card} from './Card'
import { useWindowDimensions } from '../../windowsDimension'
import { LandingDetails, LandingPageTopBackground, LandingText, LogoImageContainer, Navbar, Image, LogoName, Heading, CardContainer, Overlay } from './LandingPageStying/style'
import { SearchBar } from './SearchBar'

export const LandingPageTop = () => {
    const { width } = useWindowDimensions()
    return (
        <>
            <LandingPageTopBackground>
                <Image src="\images\john-towner-JgOeRuGD_Y4-unsplash.jpg" alt="backgroundImage" />
                <Overlay />
                <Navbar>
                    <LogoImageContainer>
                        <LogoName>
                            FotoSearch
                        </LogoName>
                    </LogoImageContainer>
                </Navbar>
                <LandingDetails>
                    <div>
                        <LandingText>
                           <Heading>Best Photo gallery Collection</Heading> 
                            <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur magnam nisi illo optio quibusdam dicta molestias voluptatibus quia rerum culpa.</h4>
                            <SearchBar />
                        </LandingText>
                    </div>
                    <CardContainer>
                        <div className='imageArray'>
                            <img className=' absoluteImage imageOne' src="\images\landingImages\dhiva-krishna-YApS6TjKJ9c-unsplash.jpg" alt="" />
                            <img className=' absoluteImage imageTwo' src="\images\landingImages\zdenek-machacek-UxHol6SwLyM-unsplash.jpg" alt="" />
                            <img className=' absoluteImage imageThree' src="\images\landingImages\rachel-park-hrlvr2ZlUNk-unsplash.jpg" alt="" />
                            <img className=' absoluteImage imageFour' src="\images\landingImages\christopher-campbell-kFCdfLbu6zA-unsplash.jpg" alt="" />
                            <img className=' absoluteImage imageFive' src="\images\landingImages\c-d-x-PDX_a_82obo-unsplash.jpg" alt="" />
                            <img className=' absoluteImage imageSix' src="\images\landingImages\hans-reniers-lQGJCMY5qcM-unsplash.jpg" alt="" />
                            <img className=' absoluteImage imageSeven' src="\images\landingImages\anna-kolosyuk-D5nh6mCW52c-unsplash (1).jpg" alt="" />
                        </div>
                        { width < "768" && <Card /> } 
                    </CardContainer>
                </LandingDetails>
            </LandingPageTopBackground>
        </>
    )
}

