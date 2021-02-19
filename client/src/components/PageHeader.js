import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';


const useStyles = makeStyles({
    root: {
        backgroundColor:"yellow"
    }
})


export default function PageHeader() {

    const classes = useStyles();

    return (
        <>
            <Grid container className={classes.root}>
                <h1>Fnork!</h1>
            </Grid>
        </>
    )
}
