
import type { NextPage } from 'next'
import React from 'react';

import styles from '../../styles/frame.module.scss'

import botao from '../../styles/Buttons.module.scss'
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';

import TextareaMain from './TextareMain';

export default function UrlFrame(){
    var data = require('../../api/dados.json');
    
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
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

