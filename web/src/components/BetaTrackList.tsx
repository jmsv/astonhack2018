import * as React from 'react';

import LinearProgress from '@material-ui/core/LinearProgress';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import { withStyles } from '@material-ui/core/styles';

import environment from '../environment'
const baseUrl = environment().base

import BetaTrack from './BetaTrack'

import axios from 'axios'
import { Typography } from '@material-ui/core';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  rightIcon: {
    marginLeft: theme.spacing.unit
  },
  controlContainer: {
    display: 'flex',
    margin: 'auto',
    width:'fit-content'
  },
  display1: {
    paddingTop: '10px',
    marginRight: '8px'
  },
  loadingBar: {
    marginTop: '20px'
  }
})

class BetaTrackList extends React.Component {
  state = {
    tracks: []
  }

  getTracks = () => {
    axios.get(`${baseUrl}/playlist-beta`).then(res => {
      this.setState({ tracks: res.data })
    })
  }

  componentDidMount() {
    this.getTracks()
  }

  public render() {
    const classes = this.props['classes'];

    const tracks = this.state.tracks || []

    return (
      <div>
        <div className={classes.controlContainer}>
          <Typography variant="display1" className={classes.display1}>Beta Playlist</Typography>

          <Button variant="contained" color="primary" className={classes.button}>
            Add <Icon className={classes.rightIcon}>add</Icon>
          </Button>
        </div>

        {(tracks && tracks.length) ? tracks.map((track, i) => {
          return (
            <div key={i}>
              <BetaTrack key={i} track={track} />
            </div>
          )
        }) : <LinearProgress className={classes.loadingBar} />}
      </div>
    );
  }
}

export default withStyles(styles)(BetaTrackList);
