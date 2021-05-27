const { readFileSync, writeFileSync } = require('fs')
console.log('Start')
const First = readFileSync('./content/First.txt', 'utf8')
const Second = readFileSync('./content/Second.txt', 'utf8')

writeFileSync(
    './content/result-sync.txt',
    `Here is the result: ${First}, ${Second}`,
    { flag: 'a' }
)
console.log('I am done with the task')
console.log('Starting the next one')