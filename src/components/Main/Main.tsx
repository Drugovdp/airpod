import React from 'react'
import s from './Main.module.css'
import { SectionChooseColor } from './SectionChooseColor/SectionChooseColor'
import { SectionComposition } from './SectionComposition/SectionComposition'
import { SectionCase } from './SectionCase/SectionCase'
import { SectionCharge } from './SectionCharge/SectionCharge'
import { SectionAudio } from './SecctionAudio/SectionAudio'
import { ChooseColorType, ColorAirPad } from '../../App'

type MainType = {
  chooseColor: (id: string, colorNameBtn: ColorAirPad) => void
  btnChooseColor: ChooseColorType[]
  airPodColor?: ChooseColorType 
}

export const Main: React.FC<MainType> = ({chooseColor, btnChooseColor, airPodColor}) => {
  return (
    <main className={s.main}>
      <SectionChooseColor chooseColor={chooseColor} btnChooseColor={btnChooseColor}/>
      <SectionComposition airPodColor={airPodColor}/>
      <SectionCase airPodColor={airPodColor}/>
      <SectionCharge />
      <SectionAudio />
    </main>
  )
}
