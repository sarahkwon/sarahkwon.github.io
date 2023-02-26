import '../styles/CarouselCard.css'

const CarouselCard = (props) => {
  const { image } = props
  return (
    <div className="carousel-card">
      <div className="img-container">
      <img src={image} alt=""/>
      </div>
    </div>
  )
}

export default CarouselCard