

const importImages = () => {
  const images = []

  const importAll = (r) => {
    r.keys().forEach((key) => {
      images.push(r(key))
    })
  }

  importAll(require.context('../img/artworks', false, /\.(png|jpe?g|svg)$/))

  return images
}


export default { importImages }



