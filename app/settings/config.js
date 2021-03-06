// configuration values of the app

const config = {}

// graph color values
config.setColors = color => {
  // Atom's dark color theme
  if (color === 'dark') {
    config.text = '#abb2bf'
    config.background = '#282c34'
    config.darkBackground = '#21252b'
    config.black = '#3b4251'
    config.gray = '#abb2bf'
    config.blue = '#61afef'
    config.red = '#be5046'
    config.orange = '#cf8772'
    config.green = '#98c379'
    config.yellow = '#d19a66'
    config.magenta = '#c678dd'
    config.cyan = '#56b6c2'
  // Atom's light color theme
  } else if (color === 'light') {
    config.text = '#383a42'
    config.background = '#fafafa'
    config.darkBackground = '#eaeaeb'
    config.black = '#a0a1a7'
    config.gray = '#abb2bf'
    config.blue = '#4078f2'
    config.red = '#e45649'
    config.orange = '#cf8772'
    config.green = '#50a14f'
    config.yellow = '#986901'
    config.magenta = '#a381ff'
    config.cyan = '#0184bc'
  }
}

// default color theme
config.colorTheme = 'dark'
// first theme paint
config.setColors(config.colorTheme)

// urls

// url for the ASTo wiki
config.docsURL = 'https://or3stis.github.io/apparatus/docs'
// url for searching vulnerabilities
config.cveSearchUrl = 'http://cve.circl.lu/api/search/'

module.exports = config
