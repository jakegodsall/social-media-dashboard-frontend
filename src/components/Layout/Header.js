import React, { useContext } from 'react';

import { ThemeContext } from '../../context/theme-context';

import Switch from '../UI/Switch';
import styles from './Header.module.css';

const Header = (props) => {
    const { darkMode } = useContext(ThemeContext);

    return (
        <header
            className={darkMode ? `${styles.header}` : `${styles.header} ${styles.headerLightMode}`}
        >
            <div className={styles.headerLeft}>
                <h1>Social Media Dashboard</h1>
                <p>{'Total Followers: ' + props.totalFollowers.toLocaleString('en-US')}</p>
            </div>

            <div className={styles.headerRight}>
                <h3>{darkMode ? 'Light Mode' : 'Dark Mode'}</h3>
                <Switch />
            </div>
        </header>
    );
};

export default Header;
