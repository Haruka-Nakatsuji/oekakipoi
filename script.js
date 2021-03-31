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

	if(title === null) {
		alert('キャンセルされました。');
		return;
	} else {
		const encodeTitle = encodeURI('『' + title + '』');
		open(`https://twitter.com/intent/tweet?text=${encodeTitle}https://twitter.com/intent/tweet?text=%E3%82%92%E6%8F%8F%E3%81%8D%E3%81%BE%E3%81%97%E3%81%9F%EF%BC%81%0A%E2%80%BB%E7%94%BB%E5%83%8F%E3%82%92%E6%89%8B%E5%8B%95%E3%81%A7%E8%BF%BD%E5%8A%A0%E3%81%97%E3%81%A6%E3%81%8F%E3%81%A0%E3%81%95%E3%81%84%E3%80%82%0A%0A%E3%81%8A%E3%81%88%E3%81%8B%E3%81%8D%E3%81%BD%E3%81%84%EF%BC%81%EF%BD%9Chttps%3A%2F%2Fharuka-nakatsuji.github.io%2Foekakipoi%2F%0A%23%E3%81%8A%E3%81%88%E3%81%8B%E3%81%8D%E3%81%BD%E3%81%84`, '_blank');
	}
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
		console.log(saveCanvas());
	}
}