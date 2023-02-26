import '../styles/CarouselCard.css'

const CarouselCard = (props) => {
  const { image } = props
  return (
    <div>
      <img src={image} alt=""/>
    </div>
  )
}

export default CarouselCard