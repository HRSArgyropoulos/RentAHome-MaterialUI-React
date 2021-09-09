import { React, useState } from 'react';
import { Button, Grid, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import useStore from '../../store';
import { getHost } from '../../services/hosts';

const useStyles = makeStyles({
  root: { width: '100%' },
  '& .MuiInput-input': {
    width: '90%',
  },
});

const HostInput = () => {
  const classes = useStyles();

  const changeHostStepperInput = useStore(
    (state) => state.changeHostStepperInput
  );

  const hostStepperForm = useStore((state) => state.hostStepperForm);

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12} sm={6}>
        <h3>Already a host?</h3>
        <TextField
          id="hostId"
          name="hostId"
          label="Host id"
          value={hostStepperForm.hostId}
          onChange={(e) =>
            changeHostStepperInput({
              name: e.target.name,
              value: e.target.value,
            })
          }
        />
        <Button
          color="primary"
          variant="outlined"
          onClick={async () => {
            // check and get name of host with that id
            const host = await getHost(hostStepperForm.hostId);
            const hostData = host.data.host;
            if (hostData) {
              changeHostStepperInput({
                name: 'hostName',
                value: hostData.name,
              });
              changeHostStepperInput({
                name: 'hostFound',
                value: true,
              });
            } else {
              // no user found reset found and name fields
              changeHostStepperInput({
                name: 'hostName',
                value: '',
              });
              changeHostStepperInput({
                name: 'hostFound',
                value: false,
              });
            }
          }}>
          Search
        </Button>
      </Grid>
      <Grid item xs={12} sm={6}>
        <h3>New host</h3>
        <TextField
          id="hostName"
          name="hostName"
          label="Host name"
          value={hostStepperForm.hostName}
          onChange={(e) =>
            changeHostStepperInput({
              name: e.target.name,
              value: e.target.value,
            })
          }
        />
      </Grid>
    </Grid>
  );
};

export default HostInput;
