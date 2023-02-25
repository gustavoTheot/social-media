import { ImgHTMLAttributes } from 'react'
import styles from './Avatar.module.css'

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement>{
    hasBorder?: boolean;
    /* como as propriedades abaixo já existem dentro do ImgHTMLAttributes que extendemos, então não é preciso utilizas
    src: string;
    alt?: string;
    */
   
}

export function Avatar({ hasBorder = true, ...props }: AvatarProps){
    return(
        <img 
            className={hasBorder ? styles.avatarWithBorder : styles.avatar}
            {...props}
        />
    )
}