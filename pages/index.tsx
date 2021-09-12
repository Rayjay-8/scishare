import type { NextPage } from 'next'
import styles from '../styles/Home.module.scss'

import NavBar from './components/navbar';
import UrlFrame from './components/urlsearch'


const Home: NextPage = () => {
  

  return (
    <div className={styles.container}>
    
      <NavBar></NavBar>
      <UrlFrame></UrlFrame>
      

    </div>
  )
}



export default Home
