import React from 'react'

import s from './SectionCharge.module.scss'

type SectionChargeType = {

}

export const SectionCharge: React.FC<SectionChargeType> = ({ }) => {
  return (
    <section className={s.charge}>
      <div className={s.container}>
        <h2 className={s.title}>Stayin' alive, stayin' alive.</h2>
        <p className={s.textNum}>20</p>
        <p className={s.text}>
          hours of music, movies and calls with Active Noise Cancellation and Custom Spatial Audio turned on. 5 And just 5 minutes of charging via the Lightning connector gives you an hour and a half of sound. 6
        </p>
      </div>
    </section>
  )
}
