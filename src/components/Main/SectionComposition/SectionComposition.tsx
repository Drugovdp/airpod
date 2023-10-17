import React from 'react'

import cl from 'classnames'
import s from './SectionComposition.module.scss'

import sideBlue from '../../../images/side-blue.jpg'
import sideRed from '../../../images/side-red.jpg'
import sideBlack from '../../../images/side-black.jpg'
import sideWhite from '../../../images/side-white.jpg'
import sideGreen from '../../../images/side-green.jpg'
import { ChooseColorType } from '../../../App'

type SectionCompositionType = {
    airPodColor?: ChooseColorType
}

export const SectionComposition: React.FC<SectionCompositionType> = ({airPodColor}) => {
    return (
        <section className={s.composition}>
            <div className={s.container}>
                <h2 className={s.title}>
                    An extremely original composition.
                </h2>
                <p className={s.text}>
                    Introducing the reinvention of over-the-ear headphones. From the cushion to the headband, the AirPods Max are designed with acoustic insulation in mind, adapted to many head shapes, so you can immerse yourself in the purity of sound.
                </p>
                <div className={s.inner}>
                    <div className={s.innerText}>
                        <p>The headband is made of breathable mesh, distributing the weight to reduce pressure on the head.</p>
                        <p>The stainless steel structure is wrapped in a soft-touch material to provide a remarkable harmony between resistance, flexibility and comfort.</p>
                        <p>The telescoping arms expand and stay in any position you want, allowing you to maintain fit and isolation.</p>
                    </div>
                    <img src={airPodColor ? airPodColor.sideAir : ''} alt="sideBlue" />
                </div>
            </div>
        </section>
    )
}
