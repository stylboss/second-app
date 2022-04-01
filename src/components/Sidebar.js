import React from 'react'
import Requests from '../config/Requests'
import {useState, useEffect} from 'react'
import axios from 'axios'

function Sidebar() {
  const [movies, setMovies] = useState([])
  const [filterText, setfilterText] = useState('')
  const [activeCategory, setActiveCategory] = useState('')

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(Requests?.fetchIMDbtop250movies)
      console.log(request)
      setMovies(request.data.items)
    }
    fetchData()
  }, [])
  console.log(movies)

  const handleFilterTextChange = e => {
    setfilterText()
    let value = e.target.value
    value.length > 2 && setfilterText(value)
  }
  console.log(filterText)

  const categories = [
    ...new Set(movies.reduce((acc, elem) => acc.concat(elem.year), [])),
  ]
  console.log('reduce', categories)

  return (
    <div>
      <input
        type="text"
        placeholder="search"
        text=""
        onChange={handleFilterTextChange}
      />
      <div className="categories">
        <select
          value={activeCategory}
          onChange={e => setActiveCategory(e.target.value)}
          className="categories-select"
        >
          <option value="">---</option>
          {categories.map(cat => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
        <button onClick={() => setActiveCategory('')}>Réinitialiser</button>
      </div>
      {filterText &&
        movies
          ?.filter(movie =>
            movie.title.toLowerCase().includes(filterText.toLowerCase()),
          )
          .map(movie => <p key={movie.id}> {movie.title} </p>)}
      {movies?.map(movie =>
        movie.year === activeCategory ? (
          <p key={movie.id}> {movie.title} </p>
        ) : null
      )}
    </div>
  )
}

export default Sidebar