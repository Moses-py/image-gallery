import React from "react"
import { SearchBarContainer } from "./SearchBarStyles/style"
export const SearchBar = () => {
    return (
        <>
           <SearchBarContainer>
               <input type="text" placeholder="Search anything..." />
            </SearchBarContainer> 
        </>
    )
}

