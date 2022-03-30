import React from 'react'
import Banner from './Banner'
import './GridLayout.css'
import Row from './Row'
import Requests from '../config/Requests'

const GridLayout = () => {
  return (
    <React.Fragment>
      <Banner />
      <div className="flexbox">
        <aside>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt aperiam
          numquam nesciunt deleniti, delectus nam sed corporis ipsam deserunt
          provident voluptatibus dolor voluptatem consectetur beatae ea
          molestias non. Corrupti saepe odit sunt nobis deserunt nostrum
          explicabo magni repellat consequatur, voluptatem at non molestiae
          ipsum architecto! Nihil obcaecati tenetur ex consequatur dolor odit
          reprehenderit cumque consequuntur ab, dolorem omnis alias veniam!
          Molestiae atque, nemo distinctio aut ut sit quae ducimus dolor
          exercitationem praesentium excepturi provident maiores at! Illo dolor
          saepe, porro delectus praesentium natus? Consequatur alias dolore,
          fugiat omnis qui doloremque maiores aliquid totam, amet sapiente
          temporibus eos facilis.
        </aside>
        <article>
          <Row
            title="programme original Netflix"
            fetchUrl={Requests.fetchNetflixOriginals}
            isPoster={true}
          />
          <Row title="tendance actuelle" fetchUrl={Requests?.fetchTrending} />
          <Row title="les mieux notés" fetchUrl={Requests?.fetchTopRated} />
          <Row title="film d'action" fetchUrl={Requests?.fetchActionMovies} />
          <Row title="film d'horreur" fetchUrl={Requests?.fetchHorrorMovies} />
          <Row
            title="comedie"
            fetchUrl={Requests?.fetchComedyMovies}
            isPoster={true}
          />
          <Row title="documentaire" fetchUrl={Requests?.fetchDocumentaries} />
        </article>
      </div>
      <footer>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
        similique laboriosam quas. Itaque dolorum nobis tenetur dolorem quidem,
        dolore distinctio harum, quia maiores ut quae molestias cum ducimus
        facere aliquid tempora inventore quisquam commodi nulla? Nostrum
        suscipit porro quo error eos aliquam molestias perferendis repellendus
        illo neque ut ad, tenetur rerum voluptatem optio possimus laboriosam
        ducimus quasi voluptatibus minima reiciendis omnis! Ipsum eos quam
        tempora repellat, maiores sequi id! A nulla ipsam quaerat deserunt autem
        veniam tempora, voluptatem voluptatum ipsa? Magnam cupiditate corrupti,
        ea est voluptatibus rem dolore quibusdam, odio non perferendis iure quia
        pariatur saepe adipisci harum tempora.
      </footer>
    </React.Fragment>
  )
}

export default GridLayout