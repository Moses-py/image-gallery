/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from "react";

import { unsplash } from "../service/unsplash";

const ImageResultsContext = React.createContext({
    imageList: [],
    imagePreference: () => {},
    inputImageSearch: () => {},
    setImageData: () => {}
})

export const ImageResultsContextProvider = ({children}) => {

    const [imageData, setImageData] = useState([]);

    const [singleImageData, setSingleImageData] = useState({})

    let randomPage = Math.floor(Math.random() * 5) + 1

    const processResult = (res) => res.type === "success" ? setImageData(res.response.results): console.log("Unsuccessfull request");

    const imageListReq = (query) => unsplash.search.getPhotos({ query, page: randomPage, perPage: 100}).then(res => processResult(res))

    const getImages = () => unsplash.photos.list({ page: randomPage, perPage: 100 }).then(res => processResult(res))

    useEffect(() => { getImages() }, [] )

    const imagePreferenceHandler = (title) => imageListReq(title)  

    const searchBarHandler = (inputVal) => imageListReq(inputVal)

    const setSingleImageDataHandler = (image) => setSingleImageData(image)

    return (
    <ImageResultsContext.Provider value={{imageData, imagePreference: imagePreferenceHandler, inputImageSearch: searchBarHandler, singleImageData, setImageData: setSingleImageDataHandler}}>
        {children}
    </ImageResultsContext.Provider>
    )
}

export const ModalContext = React.createContext({
    modal: '',

    setModal: () => {}
}) 

export const ModalContextProvider = ({children}) => {

    const [modal, setModal] = useState(false)

    return <ModalContext.Provider value={{modal: modal, showModal: setModal}}>{children}</ModalContext.Provider>
}

export default ImageResultsContext