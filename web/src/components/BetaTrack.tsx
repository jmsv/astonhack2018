import * as React from 'react';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

interface PassedProps extends React.Props<any> {
  track: any
}

class BetaTrack extends React.Component<PassedProps, any> {
  public render() {
    const track = this.props.track
    return (
      <Paper className="beta-track">
        <img src={track.art} className="albumArt" />
        <div>
          <Typography variant="h5" >{track.name}</Typography>
          <Typography variant="subtitle2" >from {track.album}</Typography>
          <Typography variant="subtitle1" >by {track.artists}</Typography>
        </div>
      </Paper>
    );
  }
}

export default BetaTrack;
