import React, {useContext} from 'react'
import ImageResultsContext from '../../context/ImageResults'
import { GalleryImage } from './GalleryImage'
import { GalleryContainer, GallerySection, FootNote } from './GalleryStyles/style'
import { Interest } from './Interest'
export const Gallery = () => {
    const {imageData} = useContext(ImageResultsContext)

    return (
        <>
            <GallerySection>
                <Interest />
                <GalleryContainer>
                    <GalleryImage />
                </GalleryContainer>
                {imageData.length !== 0 && <FootNote>That's all folks!</FootNote>}
            </GallerySection>
        </>
    )
}

export default Gallery
