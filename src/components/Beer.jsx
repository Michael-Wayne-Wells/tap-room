
import react from 'react'
import PropTypes from 'prop-types'


function Beer(props) {
  return(
    <div>
      <style jsx>{`

          `}</style>
      </div>
    )
  }

  Beer.PropTypes = {
    names: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    price: PropTypes.string,
    flavor: PropTypes.string.isRequired,
    ibu: PropTypes.string,
    abv: PropTypes.string
  }
  export default Beer
