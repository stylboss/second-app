import React from 'react'
import Banner from './Banner'
import './GridLayout.css'

const GridLayout = () => {
  return (
    <React.Fragment>
      <Banner />
      <div className="wrapper">
        <article></article>
        <aside></aside>
        <footer></footer>
      </div>
    </React.Fragment>
  )
}

export default GridLayout
