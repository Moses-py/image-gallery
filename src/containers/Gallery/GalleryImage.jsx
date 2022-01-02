import React from 'react'
import { Image } from './GalleryStyles/style'
export const GalleryImage = ({urls, columnCount, gap}) => {
    return (
        <div>
            {urls.map((url) => {
                return <Image src={url} alt="" />
            })}
        </div>
    )
}

