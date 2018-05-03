
const body = document.querySelector('body');
//const span1 = document.querySelector('#span1');

const spanArr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41];

body.addEventListener('mousemove', runEvent);

function runEvent(e){
    document.body.style.backgroundColor = `rgb( ${e.offsetX}, ${e.offsetY}, ${Math.floor(Math.random()*255)} )`;
    for (let i=0; i<spanArr.length; i++){
	document.querySelector('#span'+[i]).style.color = `rgb( ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)})`;
    }
}   




            
			
