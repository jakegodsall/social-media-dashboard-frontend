import React, { useState } from 'react';

import styles from './Switch.module.css';

const Switch = () => {
    const [darkMode, setDarkMode] = useState(true);

    const onClickHandler = () => {
        setDarkMode((mode) => {
            return !mode;
        });
        console.log(darkMode);
    };

    return (
        <div className={styles.outerSwitch} onClick={onClickHandler}>
            <div
                className={darkMode ? `styles.innerSwitch` : `styles.innerSwitch styles.lightMode`}
            ></div>
        </div>
    );
};

export default Switch;
