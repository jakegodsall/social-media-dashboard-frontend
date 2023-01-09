import React, { useContext } from 'react';

import styles from './Switch.module.css';

import { ThemeContext } from '../../context/theme-context';

const Switch = (props) => {
    const onChangeHandler = (props) => {
        setDarkMode((mode) => {
            return !mode;
        });
    };

    const { darkMode, setDarkMode } = useContext(ThemeContext);

    const switchStyles = darkMode
        ? `${styles.switch}`
        : `${styles.switch} ${styles.switchLightMode}`;

    return (
        <input
            id={props.labelID}
            className={switchStyles}
            type='range'
            min='0'
            max='1'
            value={darkMode ? 0 : 1}
            onChange={onChangeHandler}
        ></input>
    );
};

export default Switch;
