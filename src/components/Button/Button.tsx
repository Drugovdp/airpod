import React, { ReactNode } from 'react'
import s from './Button.module.scss'
import cl from 'classnames'

type TypeButton = {
    children: ReactNode
    className: string
    callBack: () => void
}

export const Button: React.FC<TypeButton> = ({children, className, callBack}) => {

    const onClickHandler = () => {
        callBack()
    }
    
    return (
        <button className={cl(s.btn, className)} onClick={onClickHandler}>{children}</button>
    )
}
