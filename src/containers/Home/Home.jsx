import React,{useEffect} from 'react'
import { HomeContainer } from './Home'
import { useSelector, useDispatch } from 'react-redux'

import Slider from '../../components/Slider/Slider.jsx'
import Trends from '../../components/Trends/Trends.jsx'

import { CallTrendings } from '../../redux/Actions/index'

import Loading from '../../components/Loading/Loading.jsx'

const Home = () => {
  const dispatch = useDispatch()

  const loading = useSelector(store => store.initialReducer.trendingIsLoading)

  useEffect(() => {
    dispatch(CallTrendings('trending'))
  },[])

  return loading ? <Loading/> : (
    <HomeContainer>
      <Slider />
      <Trends />
    </HomeContainer>
  )
}

export default Home
