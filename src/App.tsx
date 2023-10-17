import { useState } from 'react'

import './App.css'

import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';

import AirPodWhite from './images/airpods-white.png'
import AirPodBlue from './images/airpods-blue.png'
import AirPodBlacke from './images/airpods-blacke.png'
import AirPodRed from './images/airpods-red.png'
import AirPodGreen from './images/airpods-green.png'

import btnBlack from './images/btn-black.png'
import btnWhite from './images/btn-white.png'
import btnGreen from './images/btn-green.png'
import btnRed from './images/btn-red.png'
import btnBlue from './images/btn-blue.png'

import sideWhite from './images/side-white.jpg'
import sideBlue from './images/side-blue.jpg'
import sideBlacke from './images/side-black.jpg'
import sideRed from './images/side-red.jpg'
import sideGreen from './images/side-green.jpg'

import caseWhite from './images/case-white.png'
import caseBlue from './images/case-blue.jpg'
import caseBlacke from './images/case-black.jpg'
import caseRed from './images/case-red.jpg'
import caseGreen from './images/case-green.jpg'

import { v1 } from 'uuid';

export type ColorAirPad = 'white' | 'blue' | 'blacke' | 'red' | 'green'

export type ChooseColorType = {
  id: string
  imgAirPod: string
  src: string
  sideAir: string
  case: string
  colorName: ColorAirPad
  color: string
}

function App() {

  const [chooseColorAir, setChooseColorAir] = useState<ChooseColorType[]>([
    { id: v1(), imgAirPod: btnWhite, src: AirPodWhite, sideAir: sideWhite, case: caseWhite, colorName: 'white', color: '#FAFAFA'},
    { id: v1(), imgAirPod: btnBlue, src: AirPodBlue, sideAir: sideBlue, case: caseBlue, colorName: 'blue', color: '#CADBEB'},
    { id: v1(), imgAirPod: btnBlack, src: AirPodBlacke, sideAir: sideBlacke, case: caseBlacke, colorName: 'blacke', color: '#B6B6B6'},
    { id: v1(), imgAirPod: btnRed, src: AirPodRed, sideAir: sideRed, case: caseRed, colorName: 'red', color: '#F3D6D1'},
    { id: v1(), imgAirPod: btnGreen, src: AirPodGreen, sideAir: sideGreen, case: caseGreen, colorName: 'green', color: '#DDEAD9'}
  ])

  const [colorAirPod, setColorAirPod] = useState<ColorAirPad>('blue')

  const airPodColor = chooseColorAir.find(el => el.colorName === colorAirPod)
  const btnChooseColor = chooseColorAir.filter(el => el.colorName !== colorAirPod)

  const chooseColor = (id: string, colorNameBtn: ColorAirPad) => {
    setColorAirPod(colorNameBtn)
  }

  return (
    <>
      <Header airPodColor={airPodColor} />
      <Main chooseColor={chooseColor} btnChooseColor={btnChooseColor} airPodColor={airPodColor} />
      <Footer />
    </>
  );
}

export default App;
