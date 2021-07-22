let imageArr = ['https://raw.githubusercontent.com/computational-mama/deepikah-image-repo/main/Alooparatha-500.png',
				'https://raw.githubusercontent.com/computational-mama/deepikah-image-repo/main/Biryani-matka-200.png',
				'https://raw.githubusercontent.com/computational-mama/deepikah-image-repo/main/Biryani-matkaEMPTY-400.png',
				'https://raw.githubusercontent.com/computational-mama/deepikah-image-repo/main/COWOW_crop.png',
				'https://raw.githubusercontent.com/computational-mama/deepikah-image-repo/main/Grocery%20bag.png',
				'https://raw.githubusercontent.com/computational-mama/deepikah-image-repo/main/KESAR-300.png',
				'https://raw.githubusercontent.com/computational-mama/deepikah-image-repo/main/MOHAN%20GHEE.png',
				'https://raw.githubusercontent.com/computational-mama/deepikah-image-repo/main/Samosa.png',
				'https://raw.githubusercontent.com/computational-mama/deepikah-image-repo/main/Zaal0000-500.png',
				'https://raw.githubusercontent.com/computational-mama/deepikah-image-repo/main/rice%20bartan.png',
				'https://raw.githubusercontent.com/computational-mama/deepikah-image-repo/main/spoon-200.png']

let img;
let i = 0;
let brush;

function preload(){
	for(i=0;i<imageArr.length;i++){
		img[i]=loadImage(imageArr[i])
	}
	// img = loadImage("https://raw.githubusercontent.com/computational-mama/deepikah-image-repo/main/Alooparatha-500.png")
	// img = loadImage(imageArr[10])
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	
	background(244)
	imageMode(CENTER)
}

function draw() {

}

function mouseDragged(){
	
}

function keyReleased(){
if(keyCode == "UP_ARROW"){
		i++
	}
	
}
