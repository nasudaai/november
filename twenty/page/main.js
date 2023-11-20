//console.log('js')
//alert('ok')


const root = document.getElementById('root')

function render(elm) {
//
  root.appendChild(elm)
}


const title = document.createElement('h2')
title.innerText = 'Title'


render(title)
