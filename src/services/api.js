import axios from 'axios'

export default {

  fetchMovieCollection (name) {
    return axios.get(`http://www.omdbapi.com/?apikey=52a951f1&s=${name}&Content-Type=application/json`)
      .then(response => {
        return response.data
      })
  },


}