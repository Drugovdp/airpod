import React from 'react'

import s from './SectionAudio.module.scss'

import { Button } from '../../Button/Button'

type SectionAudioType = {

}

export const SectionAudio: React.FC<SectionAudioType> = ({ }) => {
    return (
        <section className={s.audio}>
            <div className={s.container}>
                <div className={s.inner}>
                    <div className={s.box}>
                        <p className={s.boxText}>Custom Spatial Audio with dynamic head tracking provides a surround sound experience worthy of a movie theater.</p>
                        <p className={s.boxText}>Through built-in gyroscopes and accelerometers, AirPods Max and your iPhone, iPad, Mac or Apple TV detect the slightest head movements and keep the sound steady on your device.</p>
                        <p className={s.boxText}>And with Apple Music, custom Spatial Audio with dynamic head tracking creates a unique three-dimensional listening experience.</p>
                        <Button className={s.boxBtn} callBack={() => { }}>BAY</Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
