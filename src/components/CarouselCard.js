

import '../styles/CarouselCard.css'

const CarouselCard = (props) => {
  const { image, name, description } = props
  return (
    <div className="carousel-card">
      <div className="img-container">
      <img src={image} alt=""/>
      </div>
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  )
}

export default CarouselCard