const fs = require('fs')

const writeTo = async (object, directory, file) => {
  const content = JSON.stringify(object)
  if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory, { recursive: true })
  }
  await fs.writeFileSync(`${directory}/${file}`, content, 'utf8')
}

const readFrom = async (directory, file) => {
  const content = await fs.readFileSync(`${directory}/${file}`)
  return JSON.parse(content)
}

const current = async (directory, file) => {
  if (fs.existsSync(`${directory}/${file}`)) {
    return await readFrom(directory, file)
  }
  return []
}

const utils = { writeTo, readFrom, current }

module.exports = utils
