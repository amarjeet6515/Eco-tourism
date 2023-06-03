import { Box,Image } from '@chakra-ui/react'
import React from 'react'
import home from '../Images/home.svg'
import circle from '../Images/home_design.png'
import Navbar from '../components/Navbar.jsx/Navbar'
import { Preloader } from '../components/Preloader'

export default function Home() {
  console.log(window.location.href)
  return (
    <Box 
    background={`url(${home})`}
    backgroundRepeat={'no-repeat'}
    backgroundPosition={'10% 100%'}
    backgroundSize={'cover'}
    height={'100vh'}
    width={'100vw'}
    display={'flex'}
    flexDirection={'column'}
    justifyContent={'space-between'}
    position={'relative'}
    gap={'5%'}
    padding={'3%'}
    overflow={'hidden'}
    >
      <Navbar/>
      <Box width={'100%'} height={'100%'} position={'absolute'} top={'0'} left={'0'} background={'#0000006e'} ></Box>
      <Image src={`${circle}`} position={'absolute'} right={'0%'} top={'22%'} width={'32%'} opacity={'28%'}/>
      
      <Box position={'relative'} className='homepage-text'>
        <h4 
        className='homepage-heading'
        style={{
        fontFamily:'Italiana, serif',
        fontWeight:'100',
        color:"white",
        }}>Sustainable Nature Adventures Await!
        </h4>

        <h5
        className='homepage-description'
          style={{
            fontFamily:'Estonia,cursive',
            fontWeight:'100',
            fontSize:"2rem",
            color:"white"
            }}>
              Embrace the essence of eco-tourism as you escape the hectic pace of city life and embark on a journey into the serene realm of sustainable farmlands. Discover the hidden treasures of our biodiverse landscapes, where you can engage in immersive experiences that bridge the gap between nature and culture.
        </h5>
      </Box>

    </Box>
  )
}
