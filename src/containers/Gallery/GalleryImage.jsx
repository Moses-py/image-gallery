import React, {useContext} from 'react'
import { ImageHolder } from './GalleryStyles/style'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css'; 
import ImageResultsContext from '../../context/ImageResults';

export const GalleryImage = () => {
    const ctx = useContext(ImageResultsContext)
    return (
        <ImageHolder>
            {ctx.imageData.length !== 0 && ctx.imageData.map((image) => {
                const imageUrl = image.urls.small
                return (
                <div className='imageContainer' key={imageUrl}>
                    <LazyLoadImage effect="blur" width="100%"  src={imageUrl} alt=""  />
                </div> 
            )})}
        </ImageHolder>
    )
}

