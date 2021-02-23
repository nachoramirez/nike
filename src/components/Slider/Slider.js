import styled, { keyframes } from 'styled-components'
import { Container } from '../../containers/Containers.js'

export const SliderContainer = styled(Container)`
  height: 50vh;
`
const SlideAnimation = keyframes`
    25% { 
        background-image: url('https://img1.goodfon.com/wallpaper/nbig/7/b3/nike-nike-running-running-girl-run.jpg')
    }
    50% { 
        background-image: url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/be88a20d-1c4f-4417-b0b0-a3941a111b0a/de81bic-32de13a7-e2ca-4bfd-b360-d127dc3425f5.jpg/v1/fill/w_1280,h_840,q_75,strp/cristiano_ronaldo_nike_wallpaper_by_rishu07_de81bic-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD04NDAiLCJwYXRoIjoiXC9mXC9iZTg4YTIwZC0xYzRmLTQ0MTctYjBiMC1hMzk0MWExMTFiMGFcL2RlODFiaWMtMzJkZTEzYTctZTJjYS00YmZkLWIzNjAtZDEyN2RjMzQyNWY1LmpwZyIsIndpZHRoIjoiPD0xMjgwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.lvMWlj4wLAj3hbvGcYYZC_f2REZCfARMtVYvCVcHzV0')
    }
    75% { 
        background-image: url('https://images.unsplash.com/photo-1556906781-9a412961c28c?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHw%3D&w=1000&q=80')
    }
    99% { 
        background-image: url('https://wallpapercave.com/wp/wp2782068.jpg')
    }
    100%{
        background-image: url('https://c.static-nike.com/a/images/f_auto/dpr_3.0/h_500,c_limit/g1ljiszo4qhthfpluzbt/123-joyride-cdp-apla-xa-xp.jpg');
    }
    `

export const SliderImage = styled.div`
  width: 60%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url('https://c.static-nike.com/a/images/f_auto/dpr_3.0/h_500,c_limit/g1ljiszo4qhthfpluzbt/123-joyride-cdp-apla-xa-xp.jpg');
  animation: ${SlideAnimation} 30s infinite;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
`
