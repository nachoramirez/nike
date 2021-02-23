import React from 'react'

import { HomeContainer } from './Home'
import Header from '../../components/Header/Header.jsx'
import Slider from '../../components/Slider/Slider.jsx'
import Trends from '../../components/Trends/Trends.jsx'

const Home = () => {
  return (
    <HomeContainer>
      <Header />
      <Slider />
      <Trends />
    </HomeContainer>
  )
}

export default Home
