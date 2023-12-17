import React from 'react'
import { Link } from 'react-router-dom'
import Carousel from '../components/Carousel'
import SearchByCategories from '../components/SearchByCategories'
import men_image from '../images/men_image.png'
import women_image from '../images/women_image.png'
import collab_shop from '../images/collab_shop.png'
import payment_type from '../images/payment_type.png'

export default function Homepage(){
    return (
        <>
            <Carousel/>
            <div className="attractiveImage">
                <Link to={'women'}><img src={women_image} alt="" className='men_image'/></Link>
                <Link to={'men'}><img src={men_image} alt="" className='women_image'/></Link>
            </div>
            <SearchByCategories/>
            <div className="collabShop">
                <h1 className='collabShop-title'>The Collab Shop</h1>
                <Link to={''}><img src={collab_shop} className='collabShop-image'/></Link>
            </div>

            <footer className='footer'>
                <div className="footer-shop">
                    <h1 className="footer-title">Shop</h1>
                    <Link to={'/women'}><div className="footer-item">Women</div></Link>
                    <Link to={'/men'}><div className="footer-item">Men</div></Link>
                    <Link to={'/kids'}><div className="footer-item">Kids</div></Link>
                </div>
                <div className="footer-corporateInfo">
                    <h1 className="footer-title">Corporate Info</h1>
                    <Link to={''}><div className="footer-item">Career at High Tide</div></Link>
                    <Link to={''}><div className="footer-item">About High Tide</div></Link>
                    <Link to={''}><div className="footer-item">Press</div></Link>
                    <Link to={''}><div className="footer-item">Investor relation</div></Link>
                    <Link to={''}><div className="footer-item">Corporate gorvernance</div></Link>
                </div>
                <div className="footer-help">
                <h1 className="footer-title">Help</h1>
                    <Link to={''}><div className="footer-item">Customer Service</div></Link>
                    <Link to={''}><div className="footer-item">My Account</div></Link>
                    <Link to={''}><div className="footer-item">Legal & Privacy</div></Link>
                    <Link to={''}><div className="footer-item">Contact Us</div></Link>
                </div>
                <div className="footer-securePayment">
                    <h1 className="footer-title">Secure Payment</h1>
                    <img src={payment_type} alt="" />
                </div>
            </footer>
        </>
    )
}