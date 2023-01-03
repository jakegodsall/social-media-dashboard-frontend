import React from 'react';

import styles from './TodayDashboard.module.css';

const TodayDashboard = (props) => {
    return (
        <React.Fragment>
            <h2>Overview - Today</h2>
            <div className={styles.todayGrid}></div>
        </React.Fragment>
    );
};

export default TodayDashboard;
