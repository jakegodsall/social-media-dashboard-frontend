import React, { useContext } from 'react';

import ThemeContext from '../../context/theme-context';

import Switch from '../UI/Switch';
import styles from './Header.module.css';

const Header = (props) => {
    const ctx = useContext(ThemeContext);

    const onDarkModeHandler = (darkMode) => {
        props.onDarkMode(darkMode);
    };

    return (
        <header
            className={ctx.darkMode ? `${styles.header}` : `${styles.header} ${styles.lightMode}`}
        >
            <div className={styles.headerLeft}>
                <h1>Social Media Dashboard</h1>
                <p>{'Total Followers: ' + props.totalFollowers.toLocaleString('en-US')}</p>
            </div>

            <div className={styles.headerRight}>
                <h3>Dark Mode</h3>
                <Switch onDarkMode={onDarkModeHandler} />
            </div>
        </header>
    );
};

export default Header;
