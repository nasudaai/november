const counter = document.createElement('button');
counter.innerText = 'add count'



const countLog = document.createElement('p')
let countN = 0;

countLog.innerText = countN;


counter.addEventListener('click', () =>{
  countN = countN + 1;    
  countLog.style.color = 'red'
  countLog.innerText = countN
})


export { counter, countLog };
