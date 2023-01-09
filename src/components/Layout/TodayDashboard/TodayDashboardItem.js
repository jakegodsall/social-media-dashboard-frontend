import React, { useContext } from 'react';

import numberFormat from '../../../Utils';

import styles from './TodayDashboardItem.module.css';

import UpIcon from '../../../assets/images/icon-up.svg';
import DownIcon from '../../../assets/images/icon-down.svg';

import FacebookIcon from '../../../assets/images/icon-facebook.svg';
import TwitterIcon from '../../../assets/images/icon-twitter.svg';
import InstaIcon from '../../../assets/images/icon-instagram.svg';
import YoutubeIcon from '../../../assets/images/icon-youtube.svg';

import { ThemeContext } from '../../../context/theme-context';

const TodayDashboardItem = (props) => {
    const { darkMode } = useContext(ThemeContext);

    const iconMap = {
        facebook: FacebookIcon,
        twitter: TwitterIcon,
        instagram: InstaIcon,
        youtube: YoutubeIcon,
    };

    const icon = iconMap[props.social];
    const changeClass = props.change >= 0 ? styles.increase : styles.decrease;

    const value = numberFormat(props.value, 1);

    const dailyCardClasses = darkMode
        ? `${styles.dailyCard}`
        : `${styles.dailyCard} ${styles.dailyCardLightMode}`;

    return (
        <div className={dailyCardClasses}>
            <div className={styles.topRow}>
                <p className={`${styles.metric}`}>{props.metric}</p>
                <img src={icon} alt={`${props.social} logo`} />
            </div>
            <div className={styles.bottomRow}>
                <p className={styles.count}>{value}</p>
                <div className={styles.changeIcon}>
                    {props.change >= 0 ? (
                        <img src={UpIcon} alt='Increase' />
                    ) : (
                        <img src={DownIcon} alt='Decrease' />
                    )}
                    <p className={changeClass}>{`${Math.abs(props.change)}%`}</p>
                </div>
            </div>
        </div>
    );
};

export default TodayDashboardItem;
