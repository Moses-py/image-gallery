import React, {useState, useContext} from "react"
import ImageResultsContext from "../../context/ImageResults"
import { SearchBarContainer } from "./SearchBarStyles/style"

export const SearchBar = () => {
    const ctx = useContext(ImageResultsContext)
    const [input, setInput] = useState("")
    const inputChangeHandlder = (e) => {
        const inputValue = e.target.value;
        setInput(inputValue)
    }

    const formSubmitHandler = (e) => {
        e.preventDefault();
        ctx.inputImageSearch(input)
        setInput("");

    }
    return (
        <>
           <SearchBarContainer>
               <form onSubmit={formSubmitHandler}>
                    <input type="text" onChange={inputChangeHandlder} value={input} placeholder="Search anything..." />
               </form> 
            </SearchBarContainer> 
        </>
    )
}

