import React from 'react'
import { Thumb } from './PreferenceThumbStyles/style'

export const PreferenceThumb = ({url, category}) => {
    var path = url;
    var path2 = path.replace(/\\/g, "/");
    return (
        <>
            <Thumb link ={path2}>{category}</Thumb>
        </>
    )
}

