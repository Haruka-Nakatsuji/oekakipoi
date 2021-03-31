let colorStock = 'black';
let s = 10;
let pen = true;
let erase = false;

const PEN = document.getElementById('pen');
const ERASER = document.getElementById('eraser');
const COLOR = document.getElementById('color');
const SIZE = document.getElementById('size');
const ALLERASER = document.getElementById('alleraser');

changeActive();

PEN.addEventListener('click', () => {
	erase = false;
	pen = true;

	changeActive();
});

ERASER.addEventListener('click', () => {
	pen = false;
	erase = true;

	changeActive();
});

COLOR.addEventListener('change', () => {
	colorStock = document.getElementById('color').value;
});

SIZE.addEventListener('change', () => {
	s = document.getElementById('size').value;
});

ALLERASER.addEventListener('click', () => {
	if(confirm("本当にキャンバスを全て消ししますか？")) {
		setup();
		return;
	} else {
		return;
	}
});

document.querySelector('.share').addEventListener('click', () => {
	let title = prompt('タイトルは何にしますか？');
	
});

function changeActive() {
	//アクティブ時の背景変更
	if(pen === true) {
		PEN.classList.add('active');
	} else {
		PEN.classList.remove('active');
	}
	
	if(erase === true) {
		ERASER.classList.add('active');
	} else {
		ERASER.classList.remove('active');
	}
}

let w = window.innerWidth;
let h = window.innerHeight;

let x;
let y;
const CANVAS = document.getElementById('canvas__inner');

function setup(){
	const canvas = createCanvas(2500, 1500);
	canvas.parent(CANVAS);
	canvas.background(255);

	noStroke();
}

//1フレームごとに実行
function draw(){

	if(mouseIsPressed) {
		if(pen) {
			push();
			stroke(colorStock);
			strokeWeight(s);
			smooth();
			line(x, y, mouseX, mouseY);
			pop();
		} else if(erase) {
			push();
			stroke(255);
			strokeWeight(s);
			smooth();
			line(x, y, mouseX, mouseY);
			pop();
		}
		
	} else {
		noStroke();
	}

	

	x = mouseX;
	y = mouseY;
}

function keyPressed() {
	if (key == 's'){
		saveCanvas('oekakipoi', 'jpg');
		
	}
}