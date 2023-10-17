import React, { useEffect, useRef, useState } from 'react'

import cl from 'classnames'
import s from './Header.module.scss'

import { ChooseColorType } from '../../App'
import { Button } from '../Button/Button'
import { HeaderContent } from './HeaderContent/HeaderContent'

type HeaderType = {
    airPodColor?: ChooseColorType
}

export const Header: React.FC<HeaderType> = ({airPodColor}) => {

    const [menuLink, setMenuLink] = useState(['Info', 'Product', 'Contacts'])
    const [onClickArrow, setOnClickDoun] = useState(true)
    
    const arrowLeft = useRef<HTMLSpanElement>(null)
    const arrowRight = useRef<HTMLSpanElement>(null)
    
    useEffect(() => {
        
        if (!arrowLeft.current || !arrowRight.current) {
            return
        }
        if (!onClickArrow) {
            arrowLeft.current.style.transform = 'rotate(-45deg) scaleX(1.3)'
            arrowRight.current.style.transform = 'rotate(45deg) scaleX(1.3)'
        } else {
            arrowLeft.current.style.transform = 'rotate(45deg) scaleX(1.3)'
            arrowRight.current.style.transform = 'rotate(-45deg) scaleX(1.3)'
        }
    }, [onClickArrow])
    
    const onClickHandler = () => {
        setOnClickDoun(!onClickArrow)
    }
    
    const menuLinks = menuLink.map((link, i) => <li key={i} className={s.menu_item}><a href="#" className="menu__link">{link}</a></li>)

    return (
        <header className={s.header}>
            <div className={s.headerBlur} style={{ background: `linear-gradient(180deg, ${airPodColor?.color} 0%, rgba(235, 235, 235, 0) 100%)` }}></div>
            <div className={s.container}>
                <div className={s.headerTop}>
                    <a href="#" className={s.logo}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="30" viewBox="0 0 25 30" fill="none">
                            <path d="M13.7938 2.61067C15.8087 0.0126657 18.6099 0 18.6099 0C18.6099 0 19.0266 2.44257 17.0249 4.79554C14.8876 7.30799 12.4582 6.89687 12.4582 6.89687C12.4582 6.89687 12.002 4.92092 13.7938 2.61067ZM12.7145 8.60788C13.751 8.60788 15.6749 7.21396 18.179 7.21396C22.4893 7.21396 24.185 10.2145 24.185 10.2145C24.185 10.2145 20.8686 11.8733 20.8686 15.8983C20.8686 20.4389 25 22.0038 25 22.0038C25 22.0038 22.112 29.9559 18.2111 29.9559C16.4194 29.9559 15.0264 28.7748 13.1387 28.7748C11.2148 28.7748 9.30575 30 8.06234 30C4.50021 30.0001 0 22.4566 0 16.3929C0 10.4271 3.80913 7.29755 7.38194 7.29755C9.70459 7.29755 11.507 8.60788 12.7145 8.60788Z" fill="black" />
                        </svg>
                    </a>
                    <nav className={s.menu}>
                        <div className={s.arrowPointer} onClick={onClickHandler}>
                            <span ref={arrowLeft} className={s.arrowLeft}></span>
                            <span ref={arrowRight} className={s.arrowRight}></span>
                        </div>
                        <ul className={s.memuList}>
                            {menuLinks}
                        </ul>
                        <Button className={s.memuListItemBtn} callBack={() => { }}>BUY</Button>
                    </nav>
                </div>
            </div>
            <hr className={s.menuHr} />
            <div className={s.container}>
                <HeaderContent onClickArrow={onClickArrow} airPodColor={airPodColor} />
            </div>
            <ul className={cl(s.memuListSmall, !onClickArrow ? s.memuListSmallActive : '')}>
                {menuLinks}
                <hr className={s.memuListSmallHr} />
            </ul>
        </header>
    )
}
