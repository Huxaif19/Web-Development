import React from 'react'
import { Container, Logo, LogoutButton} from '../index'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { logout } from '../../store/authSlice'
import { useNavigate } from 'react-router-dom'


function Header() {
    const authStatus = useSelector((state) => state.auth.status)
    const navigate = useNavigate(); 
    const navItems = [
        {
            name : 'home', 
            slug : '/', 
            active : true
        }, 
        {
            name : 'login', 
            slug : '/login', 
            active : !authStatus
        }, 
        {
            name : 'signup', 
            slug : '/signup', 
            active : !authStatus
        }, 
        {
            name : 'All posts', 
            slug : '/all-posts', 
            active : authStatus
        }, 
        {
            name : 'add post', 
            slug : '/add-post', 
            active : authStatus
        }, 
    ]
    return (
        <header className='py-3 shadow-md bg-gray-400'>
            <nav className='flex'>
                <div className='mr-4 '>
                    <Link to='/'>
                        <Logo width = '70px'/>
                    </Link>
                </div>
                <ul className='flex ml-auto'>
                    {navItems.map((itme)=>
                    itme.active ? (
                        <li key={itme.name}>
                            <button 
                            className='inline-block px-6 py-2 duration-200 hover: bg-blue-300 rounded-md'
                            onClick={()=>navigate(item.slug)}>
                                {itme.name}
                            </button>
                        </li>
                    ): null
                )}
                {
                    authStatus && (
                        <li>
                            <LogoutButton/>
                        </li>
                    )
                }
                </ul>
            </nav>
            <Container/>
        </header>
    )
}

export default Header
