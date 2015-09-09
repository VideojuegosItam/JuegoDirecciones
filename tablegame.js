
console.log("Hi");

// $('#Sprite')
					// .sprite({fps: 9, no_of_frames: 3})
					// .spRandom({top: 50, bottom: 200, left: 300, right: 320})
					// .isDraggable()
					// .activeOnClick()
					// .active();

					
// $('#Sprite')
	// .sprite({fps: 12, no_of_frames: 3})
	// .isDraggable()
	// .activeOnCLick()
	// .active();

var queue= [];

var badPlaces = [];

var walls = [];

var globalState;

 var position = {
  x:0 , y:0
}

var queue= [];

//var win = {x:y};

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


function addQueue(direction){
	queue.push(direction);
	console.log(queue);
}

function bBack(){
	queue.pop();
	console.log(queue);
}

function moveamount(x, y){
  position.x = position.x + x
  position.y = position.y + y
$('#background').css('background-position',position.x + 'px '+position.y+'px');
}

//ticker
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
	}
	else {
		//win!
		actions.stop();
		console.log("Stack empty");
		clearInterval(globalState);
		//Results
	}
	}, 800);
}
