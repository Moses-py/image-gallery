import React from 'react'
import { Error, ErrorImage, ErrorText } from './GalleryStyles/style'

export const ErrorDisplay = () => {
    return (
        <>
            <Error>
                <ErrorImage src="https://www.nicepng.com/png/detail/990-9903223_404-error-lettering-website-logo-flat-animation-web.png" alt="error Image" />
            </Error>
            <ErrorText>Ooops! Requested resource not available at the moment</ErrorText>
        </>

    )
}

