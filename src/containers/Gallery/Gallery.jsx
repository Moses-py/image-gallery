import React from 'react'
import { GalleryImage } from './GalleryImage'
import { GalleryContainer, GallerySection } from './GalleryStyles/style'
import { Interest } from './Interest'
export const Gallery = () => {
    return (
        <>
            <GallerySection>
                <Interest />
                <GalleryContainer>
                    <GalleryImage />
                </GalleryContainer>
            </GallerySection>
        </>
    )
}

export default Gallery
