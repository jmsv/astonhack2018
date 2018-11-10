import axios from 'axios'

import environment from './environment'
const base = environment().base

export const getPlaylist = (id: String, cb: Function) => {
  axios.get(`${base}/playlist/${id}`)
    .catch(err => cb(false, err))
    .then(res => cb(true, res))
}
