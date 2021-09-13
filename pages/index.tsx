import type { NextPage } from 'next'
import styles from '../styles/Home.module.scss'


import UrlFrame from './components/urlsearch'
import TextareaMain from './components/TextareMain';
import ActionsButtons from './components/ActionButtons';


const Home: NextPage = () => {
  

  return (
    <div className={styles.container}>
    
    
      <UrlFrame></UrlFrame>
      <TextareaMain></TextareaMain>
      <ActionsButtons></ActionsButtons>
      

    </div>
  )
}



export default Home
