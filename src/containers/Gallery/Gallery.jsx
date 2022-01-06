import React, {useContext, useState} from 'react'
import ImageResultsContext from '../../context/ImageResults'
import { GalleryImage } from './GalleryImage'
import { GalleryContainer, GallerySection, PaginateButton, PaginateButtonContainer } from './GalleryStyles/style'
import { Interest } from './Interest'
export const Gallery = () => {
    const {imageData, query, paginate} = useContext(ImageResultsContext)

    const [counter, setCounter] = useState(2)

    const paginateLeft = () => {
        if(counter === 1) {
            setCounter(1)
        } else {
            setCounter(counter - 1)
            paginate(query, counter)
        }
    }
  
    const paginateRight = () => {
        setCounter(counter + 1)
        paginate(query, counter)
    }

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
