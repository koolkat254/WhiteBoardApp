import React from 'react'
import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';


const NavBar = () => {
  return (
    <header className={styles.header}>
        <div className={styles.logo}></div>
        <nav>
        <ul className={styles.menu}>
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