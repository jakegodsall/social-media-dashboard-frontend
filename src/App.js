import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Layout/Header';
import MainDashboard from './components/Layout/MainDashboard/MainDashboard';
import TodayDashboard from './components/Layout/TodayDashboard/TodayDashboard';

import styles from './App.module.css';
import { ThemeContext } from './context/theme-context';

const DUMMY_DATA = [
    {
        social: 'facebook',
        handle: '@nathanf',
        followers: 1987,
        dailyData: {
            dailyFollowers: 12,
            dailyViews: 87,
            dailyViewsChange: 3,
            dailyLikes: 52,
            dailyLikesChange: -2,
        },
    },
    {
        social: 'twitter',
        handle: '@nathanf',
        followers: 1044,
        dailyData: {
            dailyFollowers: 99,
            dailyRetweets: 117,
            dailyRetweetsChange: 303,
            dailyLikes: 507,
            dailyLikesChange: 553,
        },
    },

    {
        social: 'instagram',
        handle: '@realnathanf',
        followers: 11234,
        dailyData: {
            dailyFollowers: 1099,
            dailyLikes: 5462,
            dailyLikesChange: 2257,
            dailyViews: 52343,
            dailyViewsChange: 1365,
        },
    },

    {
        social: 'youtube',
        handle: 'Nathan F.',
        followers: 8239,
        dailyData: {
            dailyFollowers: -144,
            dailyLikes: 107,
            dailyLikesChange: -19,
            dailyViews: 1407,
            dailyViewsChange: -12,
        },
    },
];

const totalFollowers = Object.values(DUMMY_DATA).reduce((total, el) => {
    return (total += el.followers);
}, 0);

const App = () => {
    const [darkMode, setDarkMode] = useState(true);

    const mainBackgroundClasses = darkMode
        ? `${styles.mainBackground}`
        : `${styles.mainBackground} ${styles.mainBackgroundLightMode}`;

    const partialBackgroundClasses = darkMode
        ? `${styles.partialBackground}`
        : `${styles.partialBackground} ${styles.partialBackgroundLightMode}`;

    return (
        <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
            {ReactDOM.createPortal(
                <React.Fragment>
                    <div className={mainBackgroundClasses}></div>
                    <div className={partialBackgroundClasses}></div>
                </React.Fragment>,

                document.getElementById('background')
            )}

            <div className={styles.container}>
                <Header totalFollowers={totalFollowers}></Header>
                <main>
                    <MainDashboard data={DUMMY_DATA}></MainDashboard>
                    <TodayDashboard data={DUMMY_DATA}></TodayDashboard>
                </main>
            </div>
        </ThemeContext.Provider>
    );
};

export default App;
