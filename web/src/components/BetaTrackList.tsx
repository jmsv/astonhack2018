import * as React from 'react';

import LinearProgress from '@material-ui/core/LinearProgress';

import environment from '../environment'
const baseUrl = environment().base

import BetaTrack from './BetaTrack'

import axios from 'axios'

class BetaTrackList extends React.Component {
  state = {
    tracks: []
  }

  getTracks = () => {
    axios.get(`${baseUrl}/playlist-beta`).then(res => {
      this.setState({tracks: res.data})
    })
  }

  componentDidMount() {
    this.getTracks()
  }

  public render() {
    const tracks = this.state.tracks || []
    if (tracks && tracks.length) {
      return (
        <div>
          {tracks.map((track, i) => {
            return (
              <BetaTrack key={i} track={track} />
            )
          })}
        </div>
      );  
    } else {
      return (
        <div>
          <LinearProgress />
        </div>
      )
    }
  }
}

export default BetaTrackList;
