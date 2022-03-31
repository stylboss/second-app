import React from 'react'
import Requests from '../config/Requests'
import {useState, useEffect} from 'react'
import axios from 'axios'

function Sidebar() {
  const [movies, setMovies] = useState([])
  const [filterText, setfilterText] = useState('')

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(Requests?.fetchIMDbtop250movies)
      console.log(request)
      setMovies(request.data.items)
    }
    fetchData()
  }, [])

  const listMovies = []
  listMovies.push(movies.map(movie => movie.title))
  console.log(listMovies)

  const handleFilterDisplay = () => {
    const iterator = listMovies.values()
    for (let el of iterator) {
      const values = el.filter(e => e.toLowerCase().includes('b'))
      console.log(values)
    }
  }
  const handleFilterTextChange = e =>
    setfilterText({filterText: e.target.value})
  handleFilterDisplay()

  console.log(filterText)

  return (
    <div>
      <input
        type="text"
        placeholder="search"
        text=""
        onChange={handleFilterTextChange}
      />
      <div className="categories">
        <select value="" onChange="" className="categories-select">
          <option value="">---</option>
          <option>___</option>
        </select>
        <button onClick="">Réinitialiser</button>
      </div>
      <p>movies filtrer </p>
    </div>
  )
}

export default Sidebar
