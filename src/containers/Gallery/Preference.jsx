import React, {useContext} from 'react'
import ImageResultsContext from '../../context/ImageResults'
import {PreferenceHolder} from "./GalleryStyles/style"

export const Preference = ({title}) => {
    const { imagePreference } = useContext(ImageResultsContext)
    
    return (
        <div>
            <PreferenceHolder onClick={() => imagePreference(title)} >{title}</PreferenceHolder>
        </div>
    )
}
