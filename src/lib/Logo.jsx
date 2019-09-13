import React from 'react'
import PropTypes from 'prop-types'

import BlackLogo from './assets/logos/logo_black.svg'
import BlueLogo from './assets/logos/logo_blue.svg'
import WhiteLogo from './assets/logos/logo_white.svg'

function getLogoByColor(color) {
  switch (color) {
    case 'black':
      return BlackLogo
    case 'white':
      return WhiteLogo
    default:
      return BlueLogo
  }
}

function Logo(props) {
  const { color, ...otherProps } = props
  const svg = getLogoByColor(color)
  return <img src={svg} alt="Omni Logo" {...otherProps} />
}

Logo.defaultProps = {
  color: 'blue',
}

Logo.propTypes = {
  color: PropTypes.oneOf(['blue', 'white', 'black']),
}

export default Logo
