import type { NextPage } from 'next'
import styles from '../../styles/TextareaMain.module.scss'

import frame from '../../styles/frame.module.scss'

export default function TextareaMain(){
   
    return (
        <>
        <div className={frame.Frame}>
        <div className={styles.projectName} contentEditable>Exemplo 333</div>
        <div className={styles.textarea} contentEditable>
        Indica que as palavras normalmente inquebráveis podem ser quebrados em pontos arbitrários se não houver pontos de quebra de outra forma aceitáveis na linha
        </div>
        </div>
        </>
  
    )
  }
