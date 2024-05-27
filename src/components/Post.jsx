/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'
import { useState } from 'react'



export function Post({author, publishedAt, content}) {

    const [comments, setComments] = useState([]);
    
    const publishedAtDateFormatted = format(publishedAt, "d 'de' LLLL 'ás' H:mm'h'", {
        locale: ptBR,
    } )

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true

    })

    function handleCreateNewComment() {
        
        event.preventDefault()

        setComments([...comments,comments.length+1]);

    }
    
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
                        return <p>{ line.content }</p> ;
                    } else if (line.type === 'link') {
                        return <p><a href='#'>{ line.content }</a></p> ;
                    }
                })}
                 
            </div>  {/* Div Fim do content */}
            

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>

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
                {comments.map(() => {
                    return <Comment />
                })}
            </div>

        </article>
    )
}