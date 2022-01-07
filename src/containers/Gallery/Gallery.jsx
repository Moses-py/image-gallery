import React, {useContext} from 'react'
import ImageResultsContext from '../../context/ImageResults'
import { GalleryImage } from './GalleryImage'
import { GalleryContainer, GallerySection, PaginateButton, PaginateButtonContainer } from './GalleryStyles/style'
import { Interest } from './Interest'

export const Gallery = () => {

    const {imageData, query, paginate} = useContext(ImageResultsContext)
    const paginateLeft = () => paginate(query, "previous")
    const paginateRight = () => paginate(query, "next")
    
    return (
        <>
            <GallerySection id='gallery'>
                <Interest />
                <GalleryContainer>
                    <GalleryImage />
                </GalleryContainer>
                {imageData.length !== 0 && query != null &&
                    <PaginateButtonContainer>
                        <PaginateButton href='#gallery' onClick={paginateLeft} >Prev </PaginateButton>
                        <PaginateButton href='#gallery' onClick={paginateRight} >Next </PaginateButton>
                    </PaginateButtonContainer>
                }
            </GallerySection>
        </>
    ) 
}

export default Gallery
