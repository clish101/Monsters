import React from 'react'
import '../Search-box/Search-box.styles.css'

export const Search = ({ Placeholder, Handlechange }) => {
    return (

        <input className='search' type="text" onChange={Handlechange} placeholder={Placeholder} />

    )
}
