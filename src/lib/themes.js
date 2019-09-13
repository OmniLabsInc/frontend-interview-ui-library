// converts hex to rgb
// https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
export const hexToRGB = hex => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result
    ? [
        parseInt(result[1], 16),
        parseInt(result[2], 16),
        parseInt(result[3], 16),
      ]
    : [0, 0, 0]
}

// makes color data in both a hex and rgb format
export const makeColorData = hex => ({
  hex,
  rgb: hexToRGB(hex),
})

// /////////////////////////////
// constants
// /////////////////////////////

// dark palette
export const colorsDark = [
  makeColorData('#262626'),
  makeColorData('#404040'),
  makeColorData('#595959'),
  makeColorData('#737373'),
]

// light palette
export const colorsLight = [
  makeColorData('#e6e6e6'),
  makeColorData('#d9d9d9'),
  makeColorData('#cccccc'),
  makeColorData('#bfbfbf'),
]

export const darkTheme = {
  themeName: `darkTheme`,
  palette: {
    background: {
      default: colorsDark[0].hex,
    },
    primary: {
      main: '#26c6da',
    },
    type: 'dark',
  },
  omniPalette: {
    baseColors: colorsDark,
  },
}
export const lightTheme = {
  themeName: `lightTheme`,
  palette: {
    background: {
      default: colorsLight[0].hex,
    },
    type: 'light',
  },
  omniPalette: {
    baseColors: colorsLight,
  },
}
