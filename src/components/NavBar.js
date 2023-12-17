import {Outlet, Link} from 'react-router-dom'
import Header from './Header'

export default function NavBar(){
    return (
        <>
            <Header/>
            <nav className="NavBar-nav">
                <ul className="list-none NavBar-ul">
                    <Link to={'/women'}><li className='NavBar-ul-li'>Women's</li></Link>
                    <Link to={'/men'}><li className='NavBar-ul-li'>Men's</li></Link>
                    <Link to={'/kids'}><li className='NavBar-ul-li'>Kids</li></Link>
                </ul>
            </nav>

            <Outlet/>
        </>
    )
}