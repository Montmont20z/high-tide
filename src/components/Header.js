import {Link} from 'react-router-dom'
import search_icon from '../images/search_icon.png'
import add_to_cart from '../images/add_to_cart.png'

export default function Header(){
    return (
        <header className='Header'>
            <Link to={'/'}><h1 className='Header-title'>HIGH TIDE</h1></Link>
            <div className='Header-search'>
                <input className='Header-search-input' type="text" placeholder="Search" />
                <img src={search_icon} className='Header-search-search_icon' alt=""/>
            </div>
            <Link to={'/add_to_cart'}><img src={add_to_cart} className='Header-add_to_cart' alt=""/></Link>
        </header>
    )
}