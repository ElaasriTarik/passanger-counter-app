// let totalLaps = 0;

// // function laps() {
// // 	totalLaps++;
// // 	console.log(totalLaps);
// // }

// // laps()

// document.addEventListener('mouseover', () => {
// 	totalLaps++;
//  	console.log(totalLaps);
// })

let values = document.querySelector('.value');
let div = document.querySelector('div');
let btnUp = document.querySelector('.increment');
let btnDown = document.querySelector('.decrement');
let saveBtn = document.querySelector('.save');
let count = 0;
let latestCount = count + ' - ';
btnUp.addEventListener('click', () => {
	count++;
	values.textContent = count;
	
})
btnDown.addEventListener('click', () => {
	count--;
	values.textContent = count;
	
})
function save() {
	if (count < 0) {
		 div.innerHTML += '(' + count +')' + ' - ';
	} else {
		div.innerHTML += count + ' - ';
      values.textContent = 0;
	}
      
      return count = 0;
}
