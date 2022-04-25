import React from 'react'
import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';


const NavBar = () => {
  return (
    <header className={styles.header}>
        <div className={styles.logo}>Whiteboard APP</div>
        <img src="/icon picture.png"></img>
        <div className={styles.logo}>White Board APP</div>
        <nav>
    <ul>
        <li>
            <Link to='/'>home</Link>
            <ul>
                <li>
                    <Link to='/new-WhiteBoard'>b</Link>
                </li>
                <li>
                    <Link to='/results'>c</Link>
                </li>
                <li>
                    <Link to='/about'>d</Link>
                </li>
            </ul>
        </li>
    </ul>
        </nav>
    </header>
  )
}

export default NavBar