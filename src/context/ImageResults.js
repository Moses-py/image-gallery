/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from "react";

import { unsplash } from "../service/unsplash";

const ImageResultsContext = React.createContext({
    imageList: [],
    imagePreference: () => {},
    inputImageSearch: () => {},
    setImageData: () => {},
    query: "",
    paginate: () => {}
})

export const ImageResultsContextProvider = ({children}) => {

    const [imageData, setImageData] = useState([]);

    const [singleImageData, setSingleImageData] = useState({})

    const [query, setQuery] = useState(null)

    const [randomPage, setRandomPage] = useState(1)

    const processResult = (res) => res.type === "success" ? setImageData(res.response.results): console.log(res);

    const imageListReq = (query, pageNumber) => unsplash.search.getPhotos({ query, page: `${pageNumber !== undefined ? pageNumber : 1}`, perPage: 100}).then(res => processResult(res)).then(() => setQuery(query))

    const getImages = () => unsplash.photos.list({ page: randomPage, perPage: 100 }).then(res => processResult(res))

    useEffect(() => { getImages() }, [] )

    const imagePreferenceHandler = (title) => imageListReq(title)  

    const searchBarHandler = (inputVal) => imageListReq(inputVal)

    const setSingleImageDataHandler = (image) => setSingleImageData(image) 

    const handlePaginate = (paginateQuery, paginateNumber) => {imageListReq(paginateQuery, paginateNumber); setRandomPage(paginateNumber); console.log(paginateNumber)}

    return (
    <ImageResultsContext.Provider value={{imageData, imagePreference: imagePreferenceHandler, inputImageSearch: searchBarHandler, singleImageData, setImageData: setSingleImageDataHandler, query, paginate:handlePaginate}}>
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