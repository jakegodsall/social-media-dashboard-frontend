import React from 'react';

import Header from './components/Layout/Header';
import MainDashboard from './components/Layout/MainDashboard/MainDashboard';
import TodayDashboard from './components/Layout/TodayDashboard/TodayDashboard';

import styles from './App.module.css';

const DUMMY_DATA = [
    {
        social: 'facebook',
        handle: '@nathanf',
        followers: 1987,
        dailyData: {
            dailyFollowers: 12,
            dailyViews: 87,
            dailyLikes: 52,
        },
    },
    {
        social: 'twitter',
        handle: '@nathanf',
        followers: 1044,
        dailyData: {
            dailyFollowers: 99,
            dailyRetweets: 117,
            dailyLikes: 507,
        },
    },

    {
        social: 'instagram',
        handle: '@realnathanf',
        followers: 11234,
        dailyData: {
            dailyFollowers: 1099,
            dailyLikes: 5462,
            dailyViews: 52343,
        },
    },

    {
        social: 'youtube',
        handle: 'Nathan F.',
        followers: 8239,
        dailyData: {
            dailyFollowers: -144,
            dailyLikes: 107,
            dailyViews: 1407,
        },
    },
];

const App = () => {
    const totalFollowers = Object.values(DUMMY_DATA).reduce((total, el) => {
        return (total += el.followers);
    }, 0);

    return (
        <div className={styles.container}>
            <Header totalFollowers={totalFollowers}></Header>
            <MainDashboard data={DUMMY_DATA}></MainDashboard>
            <TodayDashboard data={DUMMY_DATA}></TodayDashboard>
        </div>
    );
};

export default App;
