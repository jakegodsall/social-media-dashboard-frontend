import React from 'react';

import Card from '../../UI/Card';
import MainDashboardItem from './MainDashboardItem';

import styles from './MainDashboard.module.css';

const MainDashboard = () => {
    return (
        <div className={styles.mainDashboard}>
            <Card>
                <MainDashboardItem></MainDashboardItem>
            </Card>
            <Card>
                <MainDashboardItem></MainDashboardItem>
            </Card>
            <Card>
                <MainDashboardItem></MainDashboardItem>
            </Card>
            <Card>
                <MainDashboardItem></MainDashboardItem>
            </Card>
        </div>
    );
};

export default MainDashboard;
