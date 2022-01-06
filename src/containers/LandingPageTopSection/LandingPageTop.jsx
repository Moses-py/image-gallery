import React from 'react'
import { LandingDetails, LandingPageTopBackground, LandingText, LogoImageContainer, Navbar, Image, LogoName, Heading, Overlay } from './LandingPageStying/style'
import { SearchBar } from './SearchBar'

export const LandingPageTop = () => {
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
                            <h4>The World's Largest Library for clear, high quality resolution photos.</h4>
                            <SearchBar />
                        </LandingText>
                </LandingDetails>
            </LandingPageTopBackground>
        </>
    )
}

