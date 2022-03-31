import React from 'react'
import {Link} from 'react-router-dom'

function MainNavigation() {

  return <header>
    <div>WhiteBoard App</div>
    <nav>
      <ul>
        <li>
          <Link to='/'>Vote</Link>
        </li>
        <li>
          <Link to='/upload'>Upload</Link>
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

}

export default MainNavigation