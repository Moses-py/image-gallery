import React, {useState, useContext} from "react"
import ImageResultsContext from "../../context/ImageResults"
import { SearchBarContainer } from "./SearchBarStyles/style"
import { BsSearch } from "react-icons/bs"

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
                    <button type="submit" className="searchIcon">
                        <BsSearch style={{color: "#fff", fontSize: "1rem"}} />
                    </button>
               </form> 
            </SearchBarContainer> 
        </>
    )
}

