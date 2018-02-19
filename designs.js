const color = document.querySelector('#colorPicker');// Select color input
const High = document.querySelector('#inputHeight'); // Select size input
const wide = document.querySelector('#inputWeight');
const but = document.querySelector("input[type='submit']");
const main = document.querySelector('#pixelCanvas');

but.addEventListener('click', function makeGrid(event) {
	event.preventDefault();
	main.innerHTML = " ";
	const total = document.createElement('tbody');
	for (var x = 1 ; x <= High.value ; x++) {
		let row = document.createElement('tr');
		for (var y = 1 ; y <=  wide.value ; y++) {
			let col = document.createElement('td');
			col.addEventListener('click',function () {
				col.style.backgroundColor = color.value;
			});
			col.addEventListener('dblclick',function () {
				col.style.backgroundColor = 'white';
			});
			row.appendChild(col);
		}
		total.appendChild(row);
	}
	main.appendChild(total);
	console.log(color.value);

});// When size is submitted by the user, call makeGrid()

