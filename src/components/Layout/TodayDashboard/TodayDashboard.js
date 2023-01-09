import React from 'react';

import styles from './TodayDashboard.module.css';

import Card from '../../UI/Card';
import TodayDashboardItem from './TodayDashboardItem';

const TodayDashboard = (props) => {
    const [fb, twitter, insta, youtube] = props.data;

    return (
        <section className={styles.todayDashboard}>
            <h2>Overview - Today</h2>
            <div className={styles.todayGrid}>
                <Card>
                    <TodayDashboardItem
                        social={fb.social}
                        metric={'page views'}
                        value={fb.dailyData.dailyViews}
                        change={fb.dailyData.dailyViewsChange}
                    ></TodayDashboardItem>
                </Card>
                <Card>
                    <TodayDashboardItem
                        social={fb.social}
                        metric={'likes'}
                        value={fb.dailyData.dailyLikes}
                        change={fb.dailyData.dailyLikesChange}
                    ></TodayDashboardItem>
                </Card>
                <Card>
                    <TodayDashboardItem
                        social={insta.social}
                        metric={'likes'}
                        value={insta.dailyData.dailyLikes}
                        change={insta.dailyData.dailyLikesChange}
                    ></TodayDashboardItem>
                </Card>
                <Card>
                    <TodayDashboardItem
                        social={insta.social}
                        metric={'profile views'}
                        value={insta.dailyData.dailyViews}
                        change={insta.dailyData.dailyViewsChange}
                    ></TodayDashboardItem>
                </Card>
                <Card>
                    <TodayDashboardItem
                        social={twitter.social}
                        metric={'retweets'}
                        value={twitter.dailyData.dailyRetweets}
                        change={twitter.dailyData.dailyRetweetsChange}
                    ></TodayDashboardItem>
                </Card>
                <Card>
                    <TodayDashboardItem
                        social={twitter.social}
                        metric={'likes'}
                        value={twitter.dailyData.dailyLikes}
                        change={twitter.dailyData.dailyLikesChange}
                    ></TodayDashboardItem>
                </Card>
                <Card>
                    <TodayDashboardItem
                        social={youtube.social}
                        metric={'likes'}
                        value={youtube.dailyData.dailyLikes}
                        change={youtube.dailyData.dailyLikesChange}
                    ></TodayDashboardItem>
                </Card>
                <Card>
                    <TodayDashboardItem
                        social={youtube.social}
                        metric={'total views'}
                        value={youtube.dailyData.dailyViews}
                        change={youtube.dailyData.dailyViewsChange}
                    ></TodayDashboardItem>
                </Card>
            </div>
        </section>
    );
};

export default TodayDashboard;
