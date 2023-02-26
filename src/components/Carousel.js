import Flickity from 'react-flickity-component'

import CarouselCard from './CarouselCard'

import 'flickity/dist/flickity.css'
import bearMS from '../img/bearMS.png'
import campusMaps from "../img/campusMapDemo.png"
import potionShop from "../img/Capture2.png"

const flickityOptions = {

}

const Carousel = () => {
  return (
    <Flickity>
      <CarouselCard image={bearMS}/>
      <CarouselCard image={campusMaps}/>
      <CarouselCard image={potionShop}/>
    </Flickity>
  )
}

export default Carousel