import { button } from './button.js'
console.log('main')

const root = document.getElementById('root')
console.log(root)

const test = document.createElement('p')
test.innerText = 'Test text'

root.appendChild(test)

root.appendChild(button)
