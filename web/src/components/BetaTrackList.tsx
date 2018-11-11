import * as React from 'react';

import LinearProgress from '@material-ui/core/LinearProgress';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import { withStyles } from '@material-ui/core/styles';

import environment from '../environment'
const baseUrl = environment().base

import BetaTrack from './BetaTrack'

import axios from 'axios'
import { Typography, Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions } from '@material-ui/core';

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
    width: 'fit-content'
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
    tracks: [],
    open: false
  }

  getTracks = () => {
    axios.get(`${baseUrl}/playlist-beta`).then(res => {
      this.setState({ tracks: res.data })
    })
  }

  componentDidMount() {
    this.getTracks()
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  }

  handleClose = () => {
    this.setState({ open: false });
  }

  public render() {
    const classes = this.props['classes'];

    const tracks = this.state.tracks || []

    return (
      <div>
        <div className={classes.controlContainer}>
          <Typography variant="display1" className={classes.display1}>Beta Playlist</Typography>

          <Button onClick={this.handleClickOpen} variant="contained" color="primary" className={classes.button}>
            Add <Icon className={classes.rightIcon}>add</Icon>
          </Button>
        </div>

        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Add to Beta Playlist</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Copy a Spotify track link and paste it here to suggest a song
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="trackUrl"
              label="Track UrL"
              type="text"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleClose} color="primary">
              Add Track
            </Button>
          </DialogActions>
        </Dialog>


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
