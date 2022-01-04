import React from 'react'
import {PreferenceRow, InterestContainer } from './GalleryStyles/style'
import { Preference } from './Preference'
export const Interest = () => {
    return (
        <InterestContainer>
                <PreferenceRow>
                    <Preference title='Nature' />
                    <Preference title='Food' />
                    <Preference title='Art' />
                    <Preference title='Music' />
                    <Preference title='Sports' />
                </PreferenceRow>
        </InterestContainer>
    )
}
