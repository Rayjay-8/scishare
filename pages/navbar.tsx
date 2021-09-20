
import type { NextPage } from 'next'
import styles from '../styles/Navbar.module.scss'


const NavBar: NextPage = () => {

    return (
      
        <div className={styles.navbar}>
            <div className={styles.logo}>
                <img src="../static/Union.svg" alt="icon" />
                <h1 className='titulo'>SCI-SHARE</h1>
            </div>
            <div className={styles.projectName} contentEditable>Exemplo</div>
            <div className={styles.rightfast}></div>
            
        </div>
  
    )
  }
  
  export default NavBar