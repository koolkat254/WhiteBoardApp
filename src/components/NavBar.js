import React from 'react'
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <header>
        <div>White Board APP</div>
        <nav>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/new-WhiteBoard'>Add Whiteboard</Link>
                </li>
                <li>
                    <Link to='/results'>View Results</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default NavBar