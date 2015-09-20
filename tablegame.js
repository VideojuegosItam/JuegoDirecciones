
console.log("Hi"); //Inicio, solo debug

//Variables a usar
var queue= [];

//Arreglo con 'objetos' con posicion en x, y, ancho, alto y estado: 1 si es objeto bueno de victoria, 2 si es objeto malo de game over, 3 si es pared
var places = [{x: 64.3, y: 128.6, width: 3, height: 4, state:3},{x: -257.2, y:192.9, width: 2, height: 1, state:2}];

var walls = [];

var globalState;

 var position = {
  x:0 , y:0
}

var SqUnit = 64.3; //Tamaño del cuadro, para avanzar justo esa distancia.

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

//Funcion que verifica colisiones imprime si es buena colision, mala o pared(regresa true si es buena la colision, false si es mala)
//La colision con pared es solamente considerada al final qe termina de caminar ash, no se esta verificando si se encuentra una pared durante su camino
function verifyCol()
{   for(i=0; i<places.length; i++)
		{
			if(position.x == places[i].x)
			{
				if(position.y == places[i].y)
				{
				    //Colision con pared
				    if(places[i].state==3)
				    {
				        console.log("Pared!");
				    }
				        else
				        {
				            //Colision de victoria
				            if(places[i].state==1)
				            {
				                console.log("VICTORIA!");
				                queue = [];
				                //return true;
				            }
				            else
				            {
				                //Collision de game over
				                if(places[i].state==2)
				                {
				                console.log("Valió Queque");
					            queue = [];
					            //return false;
				                }
				            }
				            
				        }
				     
				    				   				   				    
				}
			}
		}		
}

//ticker. Loop cada 800ms.
 function pressStart(){
	document.getElementById('menu').play();
	 
	 
	globalState = setInterval(function(){
	if (queue.length !==0){
		doMove = queue.shift();
		console.log(doMove);
		// Game over, sprite change, items, etc.
		switch(doMove) {
<<<<<<< HEAD
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
=======
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
			
			
	} 
		else {
		//Se acabo el stack.
>>>>>>> origin/master
		//win!
		verifyCol();
		actions.stop();
		console.log("Stack empty");
		document.getElementById('menu').pause();
		clearInterval(globalState);
		
		//Results
	}
	}, 800);
	
}
