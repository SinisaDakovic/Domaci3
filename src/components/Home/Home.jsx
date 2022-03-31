import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Filmovi from '../Filmovi/Filmovi'
import Books from '../Knjige/Books'
import Navigation from '../Navigation/Navigation'
import People from '../Osobe/People'
import Add from '../AddItem/Add'
import Edit from '../Edit/Edit'

function Home() {

    return (
        <>

            <Navigation/>
            <Routes>

            <Route path="filmovi" element={<Filmovi/>}/>
            <Route path="knjige" element={<Books/>}/>
            <Route path="osobe" element={<People/>}/>
            <Route path=":list/add" element={<Add/>}/>
            <Route path=":list/edit" element={<Edit/>}/>
            </Routes>
        
        </>
    )
}

export default Home
