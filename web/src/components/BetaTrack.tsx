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
        <Typography variant="h3" component="h3" >{track.name}</Typography>
        <Typography component="p" >{track.album}</Typography>
        <Typography variant="h6" component="h6" >{track.artists}</Typography>
      </Paper>
    );
  }
}

export default BetaTrack;
