//DJ Edwards

//Traffic Flow Modeling Using OOP and Javascript

//06/21/19

var car = 5;

let vehicle1;

let vehicle2;

let vehicle3;

let vehicle4;

let vehicle5;

var numOfCars;

function createCORSRequest(method, url) {
  var xhr = new XMLHttpRequest();
  if ("withCredentials" in xhr) {
    // XHR for Chrome/Firefox/Opera/Safari.
    xhr.open(method, url, true);
  } else if (typeof XDomainRequest != "undefined") {
    // XDomainRequest for IE.
    xhr = new XDomainRequest();
    xhr.open(method, url);
  } else {
    // CORS not supported.
    xhr = null;
  }
  return xhr;
}

// Helper method to parse the title tag from the response.
function getTitle(text) {
  return text.match('<title>(.*)?</title>')[1];
}

// Make the actual CORS request.
function makeCorsRequest() {
  // This is a sample server that supports CORS.
  var url = 'http://html5rocks-cors.s3-website-us-east-1.amazonaws.com/index.html';

  var xhr = createCORSRequest('GET', url);
  if (!xhr) {
    alert('CORS not supported');
    return;
  }

  // Response handlers.
  xhr.onload = function() {
    var text = xhr.responseText;
    var title = getTitle(text);
    alert('Response from CORS request to ' + url + ': ' + title);
  };

  xhr.onerror = function() {
    alert('Woops, there was an error making the request.');
  };

  xhr.send();
}


// function preload(){

// 	car = loadImage('http://clipart-library.com/images/yckKzbAoi.png');
// }

	class Vehicle{//car constructor
		constructor(x,y){
			this.x = x;
			this.y = y;

			this.numInstances = (Vehicle.numInstances || 0) + 1;

			console.log('this', this);

}
			move(){

			this.x = this.x +3;


			}

			stop(){

				console.log('STOPPING NOW ');

  					vehicle1.x = vehicle1.x + 0;

  					vehicle2.x = vehicle2.x + 0;

  					vehicle3.x = vehicle3.x + 0;

  					vehicle4.x = vehicle4.x + 0;

  					vehicle5.x = vehicle5.x + 0;
				}
 


			v5move(){
			
  					vehicle5.x = vehicle5.x + 4;

  					window.setInterval((vehicle5.x = vehicle5.x + 2), 5000);

  						// setTimeout(function() {

  						// 	vehicle5.x = vehicle5.x + 4;

  						// 	 }, 10000);

 
		}
		



			accel(other){

				if(this.x<other.x){

		for (let i = 1; i<2; i++){

				this.x = this.x + 3;

			}
		}else{

			this.brake();

		}

		this.move();
			
		}
			brake(){
					this.x = this.x+.3;

			}

			show(color){
				stroke(200);
				strokeWeight(1);
				fill(0,0,color);
				rect(this.x,this.y,10,10);

// 				image(car,this.x,this.y);
			}


	}












 function setup(){

  	createCanvas(1500,400);

  	totalSeconds = 0;


  	vehicle1 = new Vehicle(0,200);

  	vehicle2 = new Vehicle(75,200);

  	vehicle3 = new Vehicle(150,200);

  	vehicle4 = new Vehicle(225,200);

  	vehicle5 = new Vehicle(350,200);



  			}

 



function draw(){

	background(0);


	vehicle1.move();

	vehicle1.show(255);


	vehicle2.move();

	vehicle2.show(255);


	vehicle3.move(255);

	vehicle3.show();


	vehicle4.move(255);

	vehicle4.show();

	
	vehicle5.show(0);

	vehicle5.v5move();

setTimeout(function() {

  	let d1 = dist(vehicle1.x, vehicle1.y, vehicle2.x, vehicle2.y);

	let d2 = dist(vehicle2.x, vehicle2.y, vehicle3.x, vehicle3.y);

	let d3 = dist(vehicle3.x, vehicle3.y, vehicle4.x, vehicle4.y);

	let d4 = dist(vehicle4.x, vehicle4.y, vehicle5.x, vehicle5.y);




	if (d1 < 25){
		console.log('d1 = '+ d1 +' car 1 is braking...');
		vehicle1.stop();
	}
	else if (d1>=25&&d1<=50){

		console.log('d1 = '+ d1+ ' car 1 is moving...');
		vehicle1.move();
		
	}else if (d1==0){
		console.log('d1 = '+ d1 +' car 1 is stopping...');
		vehicle1.stop();
	}
	else{
		
		console.log('d1 = '+ d1 +' car 1 is accelerating...');
		vehicle1.accel(vehicle2);
	}



	if (d2 < 25){
		console.log('d2 = '+ d2 +' car 2 is braking...');
		vehicle2.brake();
	}
		else if (d2>=25&&d2<=50){
			console.log('d2 = '+ d2 +' car 2 is moving...');
			vehicle2.move();
		
	}
	else if (d2==0){
		console.log('d2 = '+ d2 +' car 2 is stopping...');
		vehicle2.stop();
	}else{


		console.log('d2 = '+ d2 +' car 2 is accelerating...');
		vehicle2.accel(vehicle3);
	}


	if (d3 < 25){
		console.log('d3 = '+ d3 +' car 3 is braking...');
		vehicle3.brake();
	}
		else if (d3>=25&&d3<=50){
		console.log('d3 = '+ d3 +' car 3 is moving...');
		vehicle3.move();

		
	}else if (d3==0){
		console.log('d3 = '+ d3 +' car 3 is stopping...');
		vehicle3.stop();
	}
	else {
		console.log('d3 = '+ d3 +' car 3 is accelerating...');
		vehicle3.accel(vehicle4);
	}


	if (d4 < 25){
		console.log('d4 = '+ d4 +' car 4 is braking...');
		vehicle4.brake();
	}
else if (d4>=25&&d4<=50){
	console.log('d4 = '+ d4 +' car 4 is moving...');
	vehicle4.move();
		
	}else if (d4==0){
		console.log('d4 = '+ d4 +' car 4 is stopping...');
		vehicle4.stop();
	}
	else{
		

		console.log('d4 = '+ d4 +' car 4 is accelerating....');
		vehicle4.accel(vehicle5);
	}
}, 3000);

if (vehicle1.x>width){

		vehicle1 = new Vehicle(0,200);

}else if (vehicle2.x>width){

		vehicle2 = new Vehicle(0,200);

}else if (vehicle3.x>width){

		vehicle3 = new Vehicle(0,200);

}else if (vehicle4.x>width){

		vehicle4 = new Vehicle(0,200);	

}else if (vehicle5.x>width){

		vehicle5 = new Vehicle(0,200);

}
}















	










	
	
	
