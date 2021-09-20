import type { NextPage } from 'next'
import React from 'react';
// import styles from '../../styles/TextareaMain.module.scss'
import styles from '../../styles/frame.module.scss'
import botao from '../../styles/Buttons.module.scss'
// import frame from '../../styles/frame.module.scss'
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

export default function ActionsButtons(){

    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
      });
    
      const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
        setState({ ...state, [event.target.name]: event.target.checked });
      };
   
    return (
        <>
        <div className={styles.Frame}>
      
        <FormControlLabel
        control={
          <Switch
            checked={state.checkedB}
            onChange={handleChange}
            name="checkedB"
            color="primary"
          />
        }
        label="Wikipedia"
      />
            <a href="/" target="_blank">
                
                <h2>Search words on {state.checkedB}</h2>
                <button className={botao.buttonPrimario} >Google</button>
                <button className={botao.buttonPrimario} >Tradução e pronuncia</button>
                <button className={botao.buttonPrimario} >ouvir (en-us)</button>
                <button className={botao.buttonPrimario} >+ Add</button>
            </a> 
       
        </div>
     
        </>
  
    )
  }
