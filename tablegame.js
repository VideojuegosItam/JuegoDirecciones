
console.log("Hi");

var queue= [];

var badPlaces = [];

var walls = [];

var globalState;

 var position = {
  x:0 , y:0
}

//var win = {x:y};

function addQueue(direction){
	queue.push(direction);
	console.log(queue);
}

function bBack(){
	queue.pop();
}

function moveamount(x, y){
  position.x = position.x + x
  position.y = position.y + y
$('#background').css('background-position',position.x + 'px '+position.y+'px');
}

//ticker
 function pressStart(){
	globalState =setInterval(function(){
	if (queue.length !==0){
		doMove = queue.shift();
		console.log(doMove);
		// Game over, sprite change, items, etc.
		switch(doMove) {
    case "N":
        moveamount(0,64.3);
        break;
    case "S":
        moveamount(0,-64.3);
        break;
	case "E":
        moveamount(-64.3,0);
        break;
	case "O":
        moveamount(64.3,0);
        break;
    default:
        console.log("Bad Arg") ;
} 
	}
	else {
		//win!
		
		console.log("Stack empty");
		clearInterval(globalState);
		//Results
	}
	}, 1000);
}
