
import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
export function Comment () {
    return (
        <div className={styles.comment}>

            <img src="https://github.com/Abmaellf.png" alt=''/>

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong></strong>
                            <time title='27 de Janeiro ás 15:05' dateTime='2024-01-27 15:05:00'>Publicado há 1h </time>
                        </div>

                        <button title='Deletar comentario'>
                            <Trash size={20}/>
                        </button>
                    </header>

                    <p>Muito bom devam parabens </p>

                </div>

                <footer>
                    <button>
                       <ThumbsUp/> 

                       Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}   