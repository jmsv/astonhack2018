import * as React from 'react';

import { Icon, IconButton, Typography, Paper } from '@material-ui/core';

interface PassedProps extends React.Props<any> {
  track: any
}

class BetaTrack extends React.Component<PassedProps, any> {
  public render() {
    const track = this.props.track
    return (
      <Paper className="beta-track">
        <div className="flexy">
          <img src={track.art} className="albumArt" />
          <div>
            <Typography variant="h5" >{track.name}</Typography>
            <Typography variant="subtitle2" >from {track.album}</Typography>
            <Typography variant="subtitle1" >by {track.artists}</Typography>
          </div>
        </div>
        <div className="votes">
          <IconButton className="vote-button" aria-label="Delete">
            <Icon className="vote-icon">sentiment_very_dissatisfied</Icon>
          </IconButton>
          <IconButton className="vote-button" aria-label="Delete">
            <Icon className="vote-icon">sentiment_dissatisfied</Icon>
          </IconButton>
          <IconButton className="vote-button" aria-label="Delete">
            <Icon className="vote-icon">sentiment_satisfied</Icon>
          </IconButton>
          <IconButton className="vote-button" aria-label="Delete">
            <Icon className="vote-icon">sentiment_very_satisfied</Icon>
          </IconButton>
        </div>
      </Paper>
    );
  }
}

export default BetaTrack;
