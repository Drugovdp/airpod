import React from 'react'

import cl from 'classnames'
import s from './SectionCase.module.scss'

import caseBlue from '../../../images/case-blue.jpg'
import caseRed from '../../../images/case-red.jpg'
import caseBlack from '../../../images/btn-black.png'
import caseWhite from '../../../images/btn-white.png'
import caseGreen from '../../../images/case-green.jpg'
import { ChooseColorType } from '../../../App'

type SectionCaseType = {
    airPodColor?: ChooseColorType
}

export const SectionCase: React.FC<SectionCaseType> = ({airPodColor}) => {

    return (
        <section className={s.case}>
            <div className={s.container}>
                <h2 className={s.title}>It even preserves the battery.</h2>
                <p className={s.text}>
                    When stored in the sleek and lightweight Smart Case , AirPods Max enter a low-power state to save energy.
                </p>
                <img src={airPodColor ? airPodColor.case : ''} alt="sideBlue" />
            </div>
        </section>
    )
}
