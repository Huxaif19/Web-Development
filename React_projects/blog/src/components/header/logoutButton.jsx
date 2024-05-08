import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/config'
import {logout} from '../../store/authSlice'
function LogoutButton() {
    const dispatch = useDispatch()
    const logoutHandler = ()=>{
        authService.logout()
        .then(()=>{
            dispatch(logout())
        })
    }
    return (
        <button className='bg-red rounded-sm hover:bg-blue-600'>
           Logout 
        </button>
    )
}

export default LogoutButton
