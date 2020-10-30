const fs = require('fs')

const Utils = {
  async sleep(ms = 1000) {
    await new Promise((resolve) => setTimeout(resolve, ms))
  },
  async readFrom(directory, file) {
    const filepath = `${directory}/${file}`
    const content = await fs.readFileSync(filepath)
    return JSON.parse(content)
  },
  async writeTo(object, directory, file) {
    const content = JSON.stringify(object)
    if (!fs.existsSync(directory)) {
      fs.mkdirSync(directory, { recursive: true })
    }
    const filepath = `${directory}/${file}`
    await fs.writeFileSync(filepath, content, 'utf8')
  }
}

module.exports = Utils
