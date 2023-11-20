import { render } from './src/render.js'

//const root = document.getElementById('root')

/*
function render(elm) {
//
  root.appendChild(elm)
}
*/


const title = document.createElement('h2')
title.innerText = 'Title'


render('root', title)

console.log(title)


