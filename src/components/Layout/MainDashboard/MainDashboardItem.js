import React from 'react';

import numberFormat from '../../../Utils';

import UpIcon from '../../../assets/images/icon-up.svg';
import DownIcon from '../../../assets/images/icon-down.svg';

import FacebookIcon from '../../../assets/images/icon-facebook.svg';
import TwitterIcon from '../../../assets/images/icon-twitter.svg';
import InstaIcon from '../../../assets/images/icon-instagram.svg';
import YoutubeIcon from '../../../assets/images/icon-youtube.svg';

import styles from './MainDashboardItem.module.css';

const MainDashboardItem = (props) => {
    const iconMap = {
        facebook: FacebookIcon,
        twitter: TwitterIcon,
        instagram: InstaIcon,
        youtube: YoutubeIcon,
    };

    const handle = props.socialData.handle;
    const icon = iconMap[props.socialData.social];
    const followers = props.socialData.followers;
    const change = props.socialData.dailyData.dailyFollowers;
    const changeClass = change >= 0 ? styles.increase : styles.decrease;

    return (
        <div className={styles.mainDashboardItem}>
            <div className={styles.headerLine}>
                <img src={icon} alt={`${props.socialData.social} logo`} />
                <p>{handle}</p>
            </div>
            <h3>{numberFormat(followers, 1)}</h3>
            <p className={styles.followers}>followers</p>
            <div className={styles.changeLine}>
                {change >= 0 ? (
                    <img src={UpIcon} alt='Increase' />
                ) : (
                    <img src={DownIcon} alt='Decrease' />
                )}
                <p className={changeClass}>{Math.abs(change)} Today</p>
            </div>
        </div>
    );
};

export default MainDashboardItem;
