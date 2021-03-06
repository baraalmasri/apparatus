// checks if the vulnerabilities are mitigated

const printMsgTxt = require('../helpers/printMsgTxt.js')

module.exports = function vulnVerification (cy) {
  let vulnArray = []
  let result = ''
  let mitigatedVulns = 0

  cy.elements().addClass('faded')

  // highlights all vulnerability and mechanism nodes
  cy.nodes().map(node => {
    if (node.data().asto.concept === 'vulnerability') {
      node.removeClass('faded')
      node.addClass('attention')
      vulnArray.push(node)
    }
    if (node.data().asto.concept === 'mechanism') {
      node.removeClass('faded')
      node.addClass('protect')
    }
  })

  // checks if a vulnerability node is connected to a mechanism node
  vulnArray.map(vuln => {
    const neighbor = vuln.neighborhood()
    neighbor.map(type => {
      if (type.data().hasOwnProperty('asto') === true) {
        if (type.data().asto.concept === 'mechanism') {
          result = `${result} • Vulnerability ${
            vuln.data().id
          } mitigated by Mechanism ${type.data().id}\n`
          mitigatedVulns += 1
        }
      }
    })
  })

  result = `${result}\n • Vulnerabilities total: ${vulnArray.length}\n`
  result = `${result} • Mitigated total: ${mitigatedVulns}\n`
  printMsgTxt(result)

  if (vulnArray.length <= mitigatedVulns) {
    printMsgTxt('all vulnerabilities mitigated 🎉')
  }
}
