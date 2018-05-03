
const body = document.querySelector('body');
const spanArr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19];

body.addEventListener('mousemove', runEvent);

function runEvent(e){
    document.body.style.backgroundColor = `rgb( ${e.offsetX}, ${e.offsetY}, ${Math.floor(Math.random()*255)} )`;
    
    for(let i=0; i<spanArr.length; i++)
    if (i>0 && i<=19){
      document.querySelector(`#span${i}`).style.color = `rgb( ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)} )`;
    }    
}  




            
			
