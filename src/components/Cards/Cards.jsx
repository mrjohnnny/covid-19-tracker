import React from 'react';

import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import styles from './Cards.module.css';
import CountUp from 'react-countup';
import cx from 'classnames';

const Cards = ({ data }) => {

    if (!data.confirmed) {
        return 'Loading...';
    }

    return (

        <div className={styles.container}>

            <Grid container spacing={3} justify="center">
                {
                    Object.keys(data).slice(0, 3).map((datum, i) =>
                        <Grid item component={Card} className={cx(styles.card, styles.confirmed)} xs={12} md={3} key={i}>
                            <CardContent>
                                <Typography color="textSecondary" gutterBottom>{datum.toUpperCase()}</Typography>
                                <Typography variant="h5">
                                    <CountUp
                                        start={0}
                                        end={data[datum].value}
                                        duration={2.5}
                                        separator=","
                                    />
                                </Typography>
                                <Typography color="textSecondary">{new Date(data.lastUpdate).toDateString()}</Typography>
                                <Typography variant="body2" >Number of {datum} cases of COVID-19</Typography>
                            </CardContent>
                        </Grid>
                    )
                }


                {/* <Grid item component={Card} className={cx(styles.card, styles.infected)} xs={12} md={3}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant="h5">
                            <CountUp
                                start={0}
                                end={confirmed.value}
                                duration={2.5}
                                separator=","
                            />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2" >Number of active cases of COVID-19</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} className={cx(styles.card, styles.recovered)} xs={12} md={3}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant="h5">
                            <CountUp
                                start={0}
                                end={recovered.value}
                                duration={2.5}
                                separator=","
                            />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2" >Number of recoviries from COVID-19</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} className={cx(styles.card, styles.deaths)} xs={12} md={3}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant="h5">
                            <CountUp
                                start={0}
                                end={deaths.value}
                                duration={2.5}
                                separator=","
                            />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2" >Number of deaths cause of COVID-19</Typography>
                    </CardContent>
                </Grid> */}
            </Grid>
        </div >
    )
}

export default Cards;