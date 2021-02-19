import React from 'react';
import { withStyles } from '@material-ui/core';


const style = {
    sideMenu: {
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        left: '0px',
        width: '320px',
        height: '100%',
        backgroundColor: 'aliceblue'
    }
}

const SideMenu = (props) => {
    const { classes } = props;

    return (
        <div className={classes.sideMenu}>
            <h3>Side Menu withStyles Test</h3>
        </div>
    )
}

export default withStyles(style)(SideMenu);
