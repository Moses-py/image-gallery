import React from 'react'
import { Error, ErrorImage, ErrorText } from './GalleryStyles/style'

export const ErrorDisplay = () => {
    return (
        <>
            <Error>
                <ErrorImage src="\images\undraw_Page_not_found_re_e9o6 (1).png" alt="error Image" />
            </Error>
            <ErrorText>Ooops! Requested resource not available at the moment</ErrorText>
        </>

    )
}

