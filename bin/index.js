const chalk = require('chalk')
const boxen = require('boxen')
const yargs = require('yargs')

const options = yargs
  .usage(chalk.green.bold('Usage: -n <name>'))
  .option('n', {
    alias: 'name',
    describe: 'auto_dev',
    type: 'string',
    demandOption: true,
  })
  .option('react', {
    alias: 'name',
    describe: 'install react app',
    type: 'string',
  }).argv

const boxenStyle = {
  padding: 1,
  borderColor: 'white',
  width: '70%',
  backgroundColor: 'green',
}

options.react ? console.log('you picked react') : console.log('waiting')
const message = boxen(greeting, boxenStyle)
// console.log(options.name)
