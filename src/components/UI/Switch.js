import React, { useContext } from 'react';

import styles from './Switch.module.css';

import { ThemeContext } from '../../context/theme-context';

const Switch = (props) => {
    const onClickHandler = () => {
        setDarkMode((mode) => {
            return !mode;
        });
    };

    const { darkMode, setDarkMode } = useContext(ThemeContext);

    return (
        <div
            className={
                darkMode
                    ? `${styles.outerSwitch}`
                    : `${styles.outerSwitch} ${styles.outerSwitchLightMode}`
            }
            onClick={onClickHandler}
        >
            <div
                className={
                    darkMode
                        ? `${styles.innerSwitch}`
                        : `${styles.innerSwitch} ${styles.innerSwitchLightMode}`
                }
            ></div>
        </div>
    );
};

export default Switch;
