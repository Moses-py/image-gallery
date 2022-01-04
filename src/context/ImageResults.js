/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from "react";

import { unsplash } from "../service/unsplash";

 const ImageResultsContext = React.createContext({

    imageList: [],
    imagePreference: () => {},
    inputImageSearch: () => {}

})

export default ImageResultsContext


export const ImageResultsContextProvider = ({children}) => {
    const [imageData, setImageData] = useState([]);

    const processResult = (res) => {

        const imageArray = res.response.results

        return setImageData(imageArray)
    }

    const imageListReq = (query) => {

        unsplash.search.getPhotos({
            query,
            page: 1,
            perPage: 50

            }).then(res => {
                processResult(res)
            })

        }

    const getImages = () => imageListReq("Art")

    useEffect(() => { getImages() }, [] )

    const imagePreferenceHandler = (title) => {
        imageListReq(title)  
    }

    const searchBarHandler = (inputVal) => {
        imageListReq(inputVal)
    }

    return <ImageResultsContext.Provider value={{imageData: imageData, imagePreference: imagePreferenceHandler, inputImageSearch: searchBarHandler}}>{children}</ImageResultsContext.Provider>
}