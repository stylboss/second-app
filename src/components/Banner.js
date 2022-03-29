import React from 'react'
import {useState, useEffect} from 'react'
import Requests from '../config/Requests'
import axios from 'axios'

function Banner(props) {
  const [movie, setMovie] = useState([])

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(Requests.fetchTrending)
      console.log(request)
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ],
      )
    }
    fetchData()
  }, [])
  console.log(movie)

  function truncateText(string, n) {
    return string?.length > n
      ? string.substr(0, n - 1) + '...'
      : 'No description'
  }
  const bannerStyle = {
    backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '0',
    height: '40vh'
  }

  return (
    <div style={bannerStyle}>
      <div
        style={{
          background:
            'linear-gradient(180deg, rgba(31, 31, 31, 0), rgba(31, 31, 31, 0.5), #111)',
          height: '40vh'
        }}
      >
        <h1 style={{color: 'white'}}>
          {movie?.title || movie?.name || movie?.original_title}
        </h1>
        <p style={{color: 'white', width: '200px', textJustify: 'distribute'}}>
          {truncateText(movie?.overview, 100)}
        </p>
      </div>
    </div>
  )
}

export default Banner
