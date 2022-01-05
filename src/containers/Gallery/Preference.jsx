import React, {useContext} from 'react'
import ImageResultsContext from '../../context/ImageResults'
import {PreferenceHolder} from "./GalleryStyles/style"

export const Preference = ({title}) => {

    const ctx = useContext(ImageResultsContext)
    return (
        <div>
            <PreferenceHolder onClick={() => ctx.imagePreference(title)} >{title}</PreferenceHolder>
        </div>
    )
}
