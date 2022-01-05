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
                <Image src="https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="backgroundImage" />
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

