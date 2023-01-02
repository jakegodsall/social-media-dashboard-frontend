import React from 'react';

import Header from './components/Layout/Header';
import MainDashboard from './components/Layout/MainDashboard/MainDashboard';
import TodayDashboard from './components/Layout/TodayDashboard/TodayDashboard';

import styles from './App.module.css';

const DUMMY_DATA = {
    facebook: {
        handle: '@nathanf',
        followers: 1987,
        dailyData: {
            dailyFollowers: 12,
            dailyViews: 87,
            dailyLikes: 52,
        },
    },
    twitter: {
        handle: '@nathanf',
        followers: 1044,
        dailyData: {
            dailyFollowers: 99,
            dailyRetweets: 117,
            dailyLikes: 507,
        },
    },
    instagram: {
        handle: '@realnathanf',
        followers: 11234,
        dailyData: {
            dailyFollowers: 1099,
            dailyLikes: 5462,
            dailyViews: 52343,
        },
    },
    youtube: {
        handle: 'Nathan F.',
        followers: 8239,
        dailyData: {
            dailyFollowers: -144,
            dailyLikes: 107,
            dailyViews: 1407,
        },
    },
};

const App = () => {

    const totalFollowers = 
    
    return (
        <div className={styles.container}>
            <Header></Header>
            <MainDashboard></MainDashboard>
            <TodayDashboard></TodayDashboard>
        </div>
    );
};

export default App;
