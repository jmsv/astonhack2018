import * as React from 'react';

import { Link } from 'react-router-dom'

class Login extends React.Component {
  public render() {
    return (
      <div>
        <Link to='https://spartify.xyz/api/auth/spotify'>Login with Spotify</Link>
      </div>
    );
  }
}

export default Login;
