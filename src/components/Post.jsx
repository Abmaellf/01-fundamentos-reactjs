import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'

export function Post({author, publishedAt, content}) {
    
    const publishedAtDateFormatted = format(publishedAt, "d 'de' LLLL 'ás' H:mm'h'", {
        locale: ptBR,
    } )

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true

    })
    
    return(
     
        <article className={styles.post}>
            <header>
                <div className={styles.author}>

                    <Avatar src={author.avatarUrl}/>

                    <div className={styles.authorInfo}>

                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>

                </div>

                <time title={publishedAtDateFormatted} dateTime={publishedAt.toISOString()}>
                   
                    {publishedDateRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>

                {content.map(line => {
                    if(line.type === 'paragraph') {
                        return <p>{ line.content}</p> ;
                    } else if (line.type === 'link') {
                        return <p><a href='#'>{ line.content}</a></p> ;
                    }
                })}
                 
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