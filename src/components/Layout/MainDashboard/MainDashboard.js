import React from 'react';

import Card from '../../UI/Card';
import MainDashboardItem from './MainDashboardItem';

import styles from './MainDashboard.module.css';

const MainDashboard = (props) => {
    const mainCards = props.data.map((social, idx) => {
        return (
            <Card key={idx}>
                <MainDashboardItem socialData={social}></MainDashboardItem>
            </Card>
        );
    });

    return <div className={styles.mainDashboardGrid}>{mainCards}</div>;
};

export default MainDashboard;
