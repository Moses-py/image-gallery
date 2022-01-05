import React, {useContext} from 'react'
import ReactDOM  from 'react-dom'
import { BsSuitHeartFill, BsFillEyeFill } from 'react-icons/bs';
import { MdCloseFullscreen } from "react-icons/md"
import ImageResultsContext, { ModalContext } from '../../context/ImageResults'

import { ImageContainer, ModalCard, ModalContainer, ModalContent, ModalImage, ModalDescription, UserImage, Username, ModalBottomContent, ImageSocialCount, UserDetails, Location, DownloadLink, CloseModal } from './ModalStyles/style'

const Modal = () => {

    const ctx = useContext(ModalContext)

    const singleImageCtx = useContext(ImageResultsContext)

    const processImageData = () => {
        return singleImageCtx.singleImageData;

    }
    
    return (
        <ModalContainer>
            <CloseModal>
                <MdCloseFullscreen  onClick={() => ctx.showModal(!ctx.modal)} style={{fontSize: "1.7rem", color: "#eef8ff"}} />
            </CloseModal>
            <ModalCard>
                <ImageContainer>
                    <ModalImage src={processImageData().urls.regular} alt="" />
                </ImageContainer>
                {processImageData().alt_description != null ? <ModalDescription> "{`${processImageData().alt_description}`}" </ModalDescription> : <ModalDescription>{processImageData().user.name}</ModalDescription>}
                <ModalContent>
                    <UserDetails>
                        <UserImage src={processImageData().user.profile_image.small} alt={processImageData().user.name} />
                        <div>
                            <Username>{processImageData().user.name}</Username>
                            <Location>{processImageData().user.location}</Location>
                        </div>
                    </UserDetails>
                    <ModalBottomContent className="lowerContent">
                        <ImageSocialCount className='socialCount'>
                            <p><BsSuitHeartFill style={{fontSize: "1.5rem", color: "red"}} /> <span>{processImageData().likes}</span> </p>
                            <DownloadLink href={`${processImageData().links.download}?client_id=${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}&force=true`} download  target="_blank" rel="noreferrer">
                                <BsFillEyeFill  style={{fontSize: "2rem", color: "#00a8e8"}} /> 
                            </DownloadLink>
                        </ImageSocialCount>
                    </ModalBottomContent>
                </ModalContent>
            </ModalCard>
        </ModalContainer>
    )
}
export const ImageModal = () => {
    return (
        <>
            { ReactDOM.createPortal(<Modal />, document.getElementById("modal")) }
        </>
    )
}

