import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Homepage from './pages/Homepage'
import WomenPage from './pages/WomenPage'
import MenPage from './pages/MenPage'
import KidsPage from './pages/KidsPage'
import AddToCart from './pages/AddToCart'
import './index.css'
import './homepage.css'

export default function App(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<NavBar/>} >
                    <Route index element={<Homepage/>} />
                    <Route path='women' element={<WomenPage/>}/>
                    <Route path='men' element={<MenPage/>}/>
                    <Route path='kids' element={<KidsPage/>}/>
                </Route>
                <Route path='add_to_cart' element={<AddToCart/>}/>
            </Routes>
        </BrowserRouter>
    )
}