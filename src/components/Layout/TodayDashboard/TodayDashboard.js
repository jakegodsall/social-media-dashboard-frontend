import React from 'react';

import styles from './TodayDashboard.module.css';

const TodayDashboard = (props) => {
    return (
        <div className={styles.todayDashboard}>
            <h2>Overview - Today</h2>
            <div className={styles.todayGrid}></div>
        </div>
    );
};

export default TodayDashboard;
