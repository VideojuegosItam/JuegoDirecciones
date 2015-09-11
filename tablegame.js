
console.log("Hi"); //Inicio, solo debug

//Variables a usar
var queue= [];

var badPlaces = [{x: 64.3, y: 128.6, width: 3, height: 4},{x: -257.2, y:192.9, width: 2, height: 1}];

var walls = [];

var globalState;

 var position = {
  x:0 , y:0
}

var queue= [];

//Determinar coordenadas de victoria
//var win = {x:y};


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

//mover el background
function moveamount(x, y){
  position.x = position.x + x
  position.y = position.y + y
$('#background').css('background-position',position.x + 'px '+position.y+'px');

}

//ticker. Loop cada 800ms.
 function pressStart(){
	 
	 
	globalState = setInterval(function(){
	if (queue.length !==0){
		doMove = queue.shift();
		console.log(doMove);
		// Game over, sprite change, items, etc.
		switch(doMove) {
			case "N":
				actions.move_up();
				moveamount(0,64.3);
				break;
			case "S":
				actions.move_down();
				moveamount(0,-64.3);
				break;
			case "E":
				actions.move_right();
				moveamount(-64.3,0);
				break;
			case "O":
				actions.move_left();
				moveamount(64.3,0);
				break;
			default:
				console.log("Bad Arg") ;
			}
		
			//Checar badPlaces var badPlaces = [{x: 1, y: 2, width: 3, height: 4},{x: 4, y:32, width: 2, height: 1}];
			console.log(position.x, position.y ) ;
		for(i=0; i<badPlaces.length; i++){
			if(position.x == badPlaces[i].x){
				if(position.y == badPlaces[i].y){
					console.log("Valió Queque");
					queue = [];
				}
			}
		}				
	} else {
		//Se acabo el stack.
		//win!
				actions.stop();
		console.log("Stack empty");
		clearInterval(globalState);
		//Results
	}
	}, 800);
}
