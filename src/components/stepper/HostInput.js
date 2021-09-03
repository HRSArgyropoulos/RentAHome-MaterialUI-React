import React from 'react';
import { Button, Grid, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: { width: '100%' },
  '& .MuiInput-input': {
    width: '90%',
  },
});

const HostInput = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12} sm={6}>
        <h3>Already a host?</h3>
        <TextField id="hostId" name="hostId" label="Host id" />
      </Grid>
      <Grid item xs={12} sm={6}>
        <h3>New host</h3>
        <TextField id="hostName" name="hostName" label="Host name" />
      </Grid>
    </Grid>
  );
};

export default HostInput;
