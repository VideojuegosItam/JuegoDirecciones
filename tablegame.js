
console.log("Hi"); //Inicio, solo debug

//Variables a usar
var queue= [];

var badPlaces = [];

var walls = [];

var globalState;

 var position = {
  x:0 , y:0
}

var SqUnit = 64.3; //Tamaño del cuadro, para avanzar justo esa distancia.

var queue= [];

//Determinar coordenadas de victoria
//var win = {x:y};


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
        moveamount(0,SqUnit);
        break;
    case "S":
		actions.move_down();
        moveamount(0,-1*SqUnit);
        break;
	case "E":
		actions.move_right();
        moveamount(-1*SqUnit,0);
        break;
	case "O":
		actions.move_left();
        moveamount(SqUnit,0);
        break;
    default:
        console.log("Bad Arg") ;
} 
	}
	else {
	//Se acabo del stack.
		//win!
		actions.stop();
		console.log("Stack empty");
		clearInterval(globalState);
		//Results
	}
	}, 800);
}
