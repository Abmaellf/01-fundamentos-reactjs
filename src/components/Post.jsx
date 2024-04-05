import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'
export function Post() {
    return(
     
        <article className={styles.post}>
            <header>
                <div className={styles.author}>

                    <Avatar src="https://github.com/Abmaellf.png"/>

                    <div className={styles.authorInfo}>
                        <strong>Abmael Ferreira</strong>
                        <span>Web Develop</span>
                    </div>

                </div>

                <time title='27 de Janeiro ás 15:05' dateTime='2024-01-27 15:05:00'>Publicado há 1h </time>
            </header>

            <div className={styles.content}>

                <p>Fala galeraa 👋</p>
                <p>
                    Acabei de subir mais um projeto no meu portifa. 
                    É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
                </p>

                <p>
                    <a href='#'> jane.design/doctorcare</a>
                </p>
                
                <p>
                    <a href='#'>#novoprojeto</a> {'  '}
                    <a href='#'>#nlw</a> {'  '}
                    <a href='#'>#rocketseat</a>  {'  '}
                </p>   
            </div>  {/* Div Fim do content */}
            

            <form className={styles.commentForm}>

                <strong> Deixe seu feedback</strong>

                <textarea
                 placeholder="Deixe um comentário"
                />
               
                <footer>
                    <button type="submit"> 
                        Publicar
                    </button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment/>
                <Comment/>
                <Comment/>
            </div>

        </article>
    )
}