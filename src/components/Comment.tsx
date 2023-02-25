import styles from './Comment.module.css'
import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from './Avatar'
import { useState } from 'react'

interface CommentProps{
    content: string;
    onDeleteCommnet: (cooment: string) => void;
}

export function Comment({content, onDeleteCommnet} : CommentProps){
    const[likeCount, setLikeCount] = useState(0)

    function handleDeleteComment(){
        onDeleteCommnet(content)
    }

    function handleLikeComment(){
        setLikeCount((state) => {
            return state+1
        })
    }

    return(
        <div className={styles.comment}>
            <Avatar 
                hasBorder={false} 
                src="https://avatars.githubusercontent.com/u/44641003?v=4" 
                alt="" 
            />
            <div className={styles.commnetBox}>
                <div className={styles.commnetContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Gustavo Theot</strong>

                            <time title='11 de Maio às 12:00:00' dateTime='2022-06-11 12:00:00'>Cerca de 1h atrás</time>
                        </div>

                        <button onClick={handleDeleteComment} title='Deletar comentário'>
                            <Trash size={22}/>
                        </button>
                    </header>

                    <p>
                        {content}
                    </p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp/> 
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}