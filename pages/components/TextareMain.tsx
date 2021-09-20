import type { NextPage } from 'next'
import styles from '../../styles/TextareaMain.module.scss'

import frame from '../../styles/frame.module.scss'

import LabelSelect from './LabelTagSelect'

export default function TextareaMain(){

   const textodefault_lendo = " 11 Indica que as palavras normalmente inquebráveis podem ser quebrados em pontos arbitrários se não houver pontos de quebra de outra forma aceitáveis na linha"
    const textodefault_titulo = "Desenvolvimento"
    return (
        <>
        <div className={frame.Frame}>
            <div className={styles.projectName} contentEditable>{textodefault_titulo}</div>
            <LabelSelect pageProps='1239999'></LabelSelect>
            <div className={styles.textarea} contentEditable>
                {textodefault_lendo}
            </div>
        </div>
        </>
  
    )
  }
