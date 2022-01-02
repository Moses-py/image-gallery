import React from 'react'
import { GalleryImage } from './GalleryImage'
import { images } from '../../thumbData'
import { GalleryContainer, GallerySection } from './GalleryStyles/style'
import { Interest } from './Interest'
export const Gallery = () => {
    return (
        <>
            <GallerySection>
                <Interest />
                <GalleryContainer>
                    <GalleryImage urls = {images} columnCount = "3" gap = "5" />
                </GalleryContainer>
            </GallerySection>
        </>
    )
}

export default Gallery
