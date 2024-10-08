import React from 'react'
import {  useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'
import { logout } from '../../store/authSlice'

function LogOutBtn() {

    const dispatch = useDispatch()
    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout())
        }).catch(() => {
            if (dispatch) {
                return true
            } else {
                return error
            }
        })
    }
  return (
    <button 
    onClick={logoutHandler}
    className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'>LogOUT</button>
  )
}

export default LogOutBtn
