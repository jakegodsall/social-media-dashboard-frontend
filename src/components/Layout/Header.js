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
            <div className={styles.headerTopRow}>
                <h1>Social Media Dashboard</h1>
                <div>
                    <h3>Dark Mode</h3>
                    <Switch onDarkMode={onDarkModeHandler} />
                </div>
            </div>
            <p>{'Total Followers: ' + props.totalFollowers.toLocaleString('en-US')}</p>
        </header>
    );
};

export default Header;
