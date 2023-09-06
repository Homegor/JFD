import React from 'react'
import { Link } from 'react-router-dom'
import NavProfile from './navProfile'
import { useSelector } from 'react-redux'
import { getIsLoggedIn } from '../../store/users'

const NavBar = () => {
  const isLoggedIn = useSelector(getIsLoggedIn())
  return (
    <nav className={'navbar bg-light m-3'}>
      <div className='container-fluid'>
        <ul className='nav'>
          {isLoggedIn && (
            <li className='nav-item'>
              <Link className='nav-link' to='/users'>
                Users
              </Link>
            </li>
          )}
          <li className='nav-item'>
            <Link className='nav-link active' aria-current='page' to='/'>
              Main
            </Link>
          </li>
        </ul>
        <div className='d-flex'>
          {isLoggedIn ? (
            <NavProfile />
          ) : (
            <Link className='nav-link' to='/login'>
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  )
}

export default NavBar
