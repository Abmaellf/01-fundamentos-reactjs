
import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'

export function Comment ({content}) {
    return (
        <div className={styles.comment}>

            <Avatar hasBorder={false} src="https://github.com/Abmaellf.png" alt=''/>

            <div className={styles.commentBox}>

                <div className={styles.commentContent}>

                    <header>
                        <div className={styles.authorAndTime}>

                            <strong>Abmael Ferreira</strong>
                            <time title='27 de Janeiro ás 15:05' dateTime='2024-01-27 15:05:00'>Publicado há 1h </time>
                        </div>

                        <button title='Deletar comentario'>
                            <Trash size={24}/>
                        </button>
                        
                    </header>

                    <p>{content} </p>

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