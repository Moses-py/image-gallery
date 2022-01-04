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
                        <LandingText>
                           <Heading>Best Photo gallery Collection</Heading> 
                            <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur magnam nisi illo optio quibusdam dicta molestias voluptatibus quia rerum culpa.</h4>
                            <SearchBar />
                        </LandingText>
                </LandingDetails>
            </LandingPageTopBackground>
        </>
    )
}

