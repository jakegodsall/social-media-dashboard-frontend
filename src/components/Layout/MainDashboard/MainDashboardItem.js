import React from 'react';

import UpIcon from '../../../assets/images/icon-up.svg';
import DownIcon from '../../../assets/images/icon-down.svg';

import FacebookIcon from '../../../assets/images/icon-facebook.svg';
import TwitterIcon from '../../../assets/images/icon-twitter.svg';
import InstaIcon from '../../../assets/images/icon-instagram.svg';
import YoutubeIcon from '../../../assets/images/icon-youtube.svg';

import styles from './MainDashboardItem.module.css';

const MainDashboardItem = (props) => {
    const handle = props.socialData.handle;
    const followers = props.socialData.followers;
    const change = props.socialData.dailyData.dailyFollowers;
    const changeClass = change >= 0 ? styles.increase : styles.decrease;

    const followerFormat = (followers, decPlaces) => {
        // letters for representing orders of magnitude
        const letters = ['k', 'm', 'b', 't'];

        if (followers <= 10000) {
            return followers;
        }

        // loop through the array backwards
        for (let i = letters.length - 1; i >= 0; i--) {
            // convert array indices to 1000, 1000000 etc
            let size = Math.pow(10, (i + 1) * 3);

            // if the number is bigger or equal to the value calculated above

            if (size <= followers) {
                // multiply by decPlaces, round, and divide by decPlaces.
                console.log(followers);

                followers = Math.round((followers * decPlaces) / size) / decPlaces;

                console.log('test');
                console.log(followers);

                // Handle special case where we roudn up to the next letter
                if (followers === 1000 && i < letters.length - 1) {
                    followers = 1;
                    i++;
                }

                // add the letter to the number
                followers += letters[i];

                break;
            }
        }

        return followers;
    };

    return (
        <div className={styles.mainDashboardItem}>
            <div className={styles.headerLine}>
                <p>{handle}</p>
            </div>
            <h3>{followerFormat(followers, 1)}</h3>
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
