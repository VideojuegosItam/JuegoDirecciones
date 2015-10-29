
console.log("Hi"); //Inicio, solo debug

//Variables a usar
var queue= [];

//Arreglo con 'objetos' con posicion en x, y, ancho, alto y estado: 1 si es objeto bueno de victoria, 2 si es objeto malo de game over, 3 si es pared
var places = [{x: 1, y: 0, state:3},{x: -1, y: 1, state:3},{x: 1, y: 1, state:3},{x: 4, y: 0, state:3},{x: 3, y: 2, state:3},{x: 3, y: -1, state:3},{x: 3, y: -2, state:3},
{x: 3, y: 2, state:3},{x: 4, y: 2, state:3},{x: 3, y: 3, state:3},{x: 4, y: 3, state:3},{x: 6, y: 0, state:3},
{x: 6, y: 1, state:3},{x: 6, y: 3, state:3},{x: 7, y: 3, state:3},{x: 7, y: 4, state:3},
{x: 8, y: 4, state:3},{x: 9, y: 4, state:3},{x: 9, y: 5, state:3},{x: 1, y: 4, state:3},
{x: 2, y: -1, state:3},{x: 3, y: -1, state:3},{x: 4, y: -1, state:3},{x: 5, y: -1, state:3},
{x: 6, y: -1, state:3},{x: 1, y: -2, state:3},{x: 0, y: -3, state:3},{x: -2, y: -3, state:3},];

//Auto Llenar las paredes
for(var i=-3;i<=15;i++){
	places.push({x: i, y: 6, state:3});
	places.push({x: i, y: -9, state:3});
	}
for(var i=-9;i<=6;i++){
	places.push({x: -3, y: i, state:3});
	places.push({x: 15, y: i, state:3});
	}


var walls = [];

var globalState;

 var position = {
  x:0 , y:0
}

var SqUnit = 44; //Tamaño del cuadro, para avanzar justo esa distancia.

var queue= [];

var col;

//Determinar coordenadas de victoria
//var win = {x:y};

function printPos(){
	console.log(position);
}

//Constructor de badObject
	//todas las funciones de animacion!
	(function($) {
		$(document).ready(function() {
				$('#Sprite')
					.sprite({fps: 9, no_of_frames: 3})
					.isDraggable()
					.activeOnClick()
					.active()
					.spStop();
				
				
				window.actions = {
					move_down: function() {
						$('#Sprite')
							.fps(10)
							.spState(1);
					},
					move_left: function() {
						$('#Sprite')
							.fps(10)
							.spState(2);
					},
					move_right: function() {
						$('#Sprite')
							.fps(10)
							.spState(3);
					},
					move_up: function() {
						$('#Sprite')
							.fps(10)
							.spState(4);
					},
					stop: function() {
						$('#Sprite')
							.spStop();
					},
				};
			});

		})(jQuery);

//Llenar el Queue
function addQueue(direction){
	queue.push(direction);
	console.log(queue);
}

//Borrar ultimo elemento del queue
function bBack(){
	queue.pop();
	console.log(queue);
}

//mover el Sprite
function moveamount(x, y){
  position.x = position.x + x;
  position.y = position.y + y;
$('#Sprite').css('left',(position.x*SqUnit +35) + 'px');
$('#Sprite').css('top',(-position.y*SqUnit +170) + 'px');

}

//Funcion que verifica colisiones imprime si es buena colision, mala o pared(regresa true si es buena la colision, fado te si es mala)
function verifyCol(x,y)
{   for(var i=0; i<places.length; i++)
	{
		if(position.x+x == places[i].x && position.y+y ==places[i].y )
		{
		//Colision con algo
		col=places[i].state;
			switch(col) {
				case 3:
					console.log("PARED");
					return 3;
					break;
				case 2:
					console.log("Muerte");
					queue=[];
					return 2;
					break;
				case 1:
					console.log("Victoria!");
					queue=[];
					return 1;
					break;
				default:
					console.log("The F?") ;
					queue=[];
					return 4;
			} 
		}
	
		else
		{
		}	
	}		
}
//ticker. Loop cada 800ms.
 function pressStart(){
	//document.getElementById('walk').play();
	 
	globalState = setInterval(function(){
	if (queue.length !==0){
		doMove = queue.shift();
		console.log(doMove);
		switch(doMove) {
		case "N":
			actions.move_up();
			if((verifyCol(0,1))!=3){
				moveamount(0,1);
			}
			break;
		case "S":
			actions.move_down();
			if((verifyCol(0,-1))!=3){
				moveamount(0,-1);
			}
			break;
		case "E":
			actions.move_right();
			if((verifyCol(1,0))!=3){
				moveamount(1,0);
			}
			break;
		case "O":
			actions.move_left();
			if((verifyCol(-1,0))!=3){
				moveamount(-1,0);
			}
			break;
		default:
			console.log("Bad Arg") ;
		} 
	}

		else {
		//Se acabo el stack.
		//origin/master
		//win!
		actions.stop();
		document.getElementById('walk').pause();
		document.getElementById('walk').currentTime = 0;
		console.log("Stack empty");
		console.log(position);
		clearInterval(globalState);
		
		//Results
	}
	}, 800);
	
}
