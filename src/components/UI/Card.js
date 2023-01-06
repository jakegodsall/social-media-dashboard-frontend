import React, { useContext } from 'react';

import styles from './Card.module.css';

import { ThemeContext } from '../../context/theme-context';

const Card = (props) => {
    const { darkMode } = useContext(ThemeContext);

    const cardClasses = darkMode
        ? `${styles.UICard}`
        : `${styles.UICard} ${styles.UICardLightMode}`;

    return <div className={cardClasses}>{props.children}</div>;
};

export default Card;
