import { counter, countLog } from './counter.js'
import { button } from './button.js'
console.log('main')

const root = document.getElementById('root')
console.log(root)

const test = document.createElement('p')
test.innerText = 'Test text'

root.appendChild(test)

button.style.display = 'block'
root.appendChild(button)


button.addEventListener('click', () => {
  alert('Event listen Ok?')
})

counter.style.display = 'block'
root.appendChild(counter)
root.appendChild(countLog)
