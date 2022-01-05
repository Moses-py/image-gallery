import React, {useContext} from 'react'
import { ImageHolder } from './GalleryStyles/style'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css'; 
import ImageResultsContext, { ModalContext } from '../../context/ImageResults';
import { ErrorDisplay } from './ErrorDisplay';

export const GalleryImage = () => {
    const {setImageData, imageData} = useContext(ImageResultsContext)

    const {showModal } = useContext(ModalContext)

    const handleClickEvent = ( image ) => {
        showModal(true);
        setImageData(image)
    }

    return (
        <>  
            {imageData.length === 0 && <ErrorDisplay />}
            <ImageHolder>
                {imageData.length !== 0 && imageData.map((image) => {
                    const imageUrl = image.urls.small
                    return (
                    <div className='imageContainer' key={imageUrl} >
                        <LazyLoadImage className='imageList' onClick={() => handleClickEvent(image)} effect="blur" width="100%"  src={imageUrl} alt=""  />
                    </div> 
                )})}
            </ImageHolder>
        </>

    )
}

