import React from 'react'
import { PreferenceHolder, PreferenceRow, InterestContainer } from './GalleryStyles/style'
import { useWindowDimensions } from '../../windowsDimension'
export const Interest = () => {
    const {width} = useWindowDimensions()
    return (
        <InterestContainer>
            {width >= "768" ? 
                <PreferenceRow>
                    <PreferenceHolder>Nature</PreferenceHolder>
                    <PreferenceHolder>Music</PreferenceHolder>
                    <PreferenceHolder>Science</PreferenceHolder>
                    <PreferenceHolder>Food</PreferenceHolder>
                    <PreferenceHolder>Art</PreferenceHolder>
                </PreferenceRow>: null }
        </InterestContainer>
    )
}

