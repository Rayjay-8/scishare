
import type { NextPage } from 'next'

import styles from '../../styles/frame.module.scss'

import botao from '../../styles/Buttons.module.scss'

import TextareaMain from './TextareMain';

export default function UrlFrame(){
    var data = require('../../api/dados.json');
    return (
        <>
        <div className={styles.FrameFlex}>
        <div className={styles.Frame}>
            <h2 className='titulo'>Search word on</h2>
    
          
            {data.map(list =>
            <a href={list.Url} target="_blank" key={list.Descricao}>
                <button className={botao.buttonPrimario} >
                    {list.Descricao}
                </button>
            </a>
            )}

            <button className={botao.buttonPrimario}>Adicionar +</button>

            
            
        </div>
        {/* <div className={styles.Frame}> */}
            {/* <TextareaMain></TextareaMain> */}
            {/* </div> */}
    {/* <div className={styles.Frame}><div className={styles.rightfast}></div></div> */}
        </div>
        
        </>
  
    )
  }

