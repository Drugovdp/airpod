import React, { useState } from 'react'

import s from './SectionChooseColor.module.scss'

import btnBlack from '../../../images/btn-black.png'
import btnWhite from '../../../images/btn-white.png'
import btnGreen from '../../../images/btn-green.png'
import btnRed from '../../../images/btn-red.png'
import btnBlue from '../../../images/btn-blue.png'
import { v1 } from 'uuid'
import {ChooseColorType, ColorAirPad} from '../../../App'

type ChooseColorTypeProps = {
  chooseColor: (id: string, colorNameBtn: ColorAirPad) => void
  btnChooseColor: ChooseColorType[]
}

export const SectionChooseColor: React.FC<ChooseColorTypeProps> = ({chooseColor, btnChooseColor}) => {

const onClickChooseColor = (id: string, colorNameBtn: ColorAirPad) => {
  chooseColor(id, colorNameBtn)
}

  return (
    <section className={s.chooseColor}>
      <div className={s.container}>
        <h3 className={s.title}>Choose your colour</h3>
        <p className={s.text}>
          The perfect balance between the purityof hi‑fi and the magic of AirPods.
          The ultimate personal audio experience.
        </p>
        <div className={s.list}>
          {btnChooseColor.map(el => <div key={el.id} className={s.listBtn} onClick={()=>onClickChooseColor(el.id, el.colorName)}>
            <img src={el.imgAirPod} alt="btnBlack" />
          </div>)}
        </div>
      </div>
    </section>
  )
}