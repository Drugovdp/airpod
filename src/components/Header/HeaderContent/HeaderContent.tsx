import React, { useState } from 'react'

import cl from 'classnames'
import s from './HeaderContent.module.scss'

import { ChooseColorType } from '../../../App'

type HeaderContentType = {
    airPodColor?: ChooseColorType
    onClickArrow: boolean
}

export const HeaderContent: React.FC<HeaderContentType> = ({ airPodColor, onClickArrow }) => {

    return (
        <div className={cl(s.headerContent, !onClickArrow ? s.headerContentOnBlure : '')}>
            <div className={s.titleAir}>Air</div>
            <div className={s.titlePod}>Pod</div>
            <div className={s.titleS}>S</div>
            <div className={s.titleM}>M</div>
            <div className={s.titleAX}>AX</div>
            <div className={s.headerContentImages} >
                <img src={airPodColor ? airPodColor.src : ''} alt="imgAirPod" />
            </div>
            <div className={s.headerContentImagesBefore} style={{background: `${airPodColor?.color}`}}></div>
        </div>
    )
}
