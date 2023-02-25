import '../styles/Header.css'


const Header = (props) => {
  const {text} = props

  return (
    <div className="header_container">
      <h1 className="header">{text}</h1>
    </div>
    
  )
}

export default Header