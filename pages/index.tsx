import type { NextPage } from 'next'
import styles from '../styles/Home.module.scss'

import NavBar from './components/navbar';

const Home: NextPage = () => {
  var data = require('../api/dados.json');

  return (
    <div className={styles.container}>
      <NavBar></NavBar>
      <h1>Sci-Share</h1>
      <h2>{data.Descricao}</h2>
      {data.Url}
    </div>
  )
}

export default Home
