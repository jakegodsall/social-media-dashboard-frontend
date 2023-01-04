import React from 'react';

import Switch from '../UI/Switch';

import styles from './Header.module.css';

const Header = (props) => {
    return (
        <header className={styles.header}>
            <div className={styles.headerTopRow}>
                <h1>Social Media Dashboard</h1>
                <div>
                    <h3>Dark Mode</h3>
                    <Switch />
                </div>
            </div>
            <p>{'Total Followers: ' + props.totalFollowers.toLocaleString('en-US')}</p>
        </header>
    );
};

export default Header;
