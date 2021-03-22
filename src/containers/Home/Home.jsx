import React from 'react'
import { HomeContainer } from './Home'

import Slider from '../../components/Slider/Slider.jsx'
import Trends from '../../components/Trends/Trends.jsx'

const Home = () => {
  return (
    <HomeContainer>
      <Slider />
      <Trends />
    </HomeContainer>
  )
}

export default Home
