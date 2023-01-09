import React, { useContext } from 'react';
import { ThemeContext } from '../../../context/theme-context';

import styles from './Footer.module.css';

const Footer = () => {
    const { darkMode } = useContext(ThemeContext);

    const footerStyles = darkMode
        ? `${styles.footer}`
        : `${styles.footer} ${styles.footerLightMode}`;

    console.log(footerStyles);

    const linkStyles = darkMode ? `${styles.link}` : `${styles.link} ${styles.linkLightMode}`;

    return (
        <footer className={footerStyles}>
            <p>
                Challenge by{' '}
                <a className={linkStyles} href='https://www.frontendmentor.io/'>
                    Frotend Mentor
                </a>
                . Coded by{' '}
                <a className={linkStyles} href='https://github.com/jakegodsall'>
                    Jake Godsall
                </a>
                .
            </p>
        </footer>
    );
};

export default Footer;
