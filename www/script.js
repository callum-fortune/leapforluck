
var canvas = document.getElementById("canvas");	
var ctx = canvas.getContext("2d");

var scoreDisplay = document.getElementById('score');
var score = 0;

/*DEFAULT VALUES

stages = [

animationProgress = 0;

stage = 0;

stages = [

{x : 50, y : 450, originX : 50, originY : 450, property : 'none'},
{x : 150, y : 450, originX : 150, originY : 450, property : 'diamond'},
{x : 250, y : 450, originX : 250, originY : 450, property : 'none'},
{x : 350, y : 450, originX : 350, originY : 450, property : 'spike'},
{x : 450, y : 450, originX : 450, originY : 450, property : 'none'},

	];

player = {
	
	x : 250,
	y : 350,
	rotation : 0,
	width  : 100,
	height : 100,
	
};


};

//END OF DEFAULTS*/



// 0.5,250,450,300,1000,550,0

function getQuadraticXY(t, sx, sy, cp1x, cp1y, ex, ey) {
  return {
    x: (1-t) * (1-t) * sx + 2 * (1-t) * t * cp1x + t * t * ex,
    y: (1-t) * (1-t) * sy + 2 * (1-t) * t * cp1y + t * t * ey
  };
}

console.log(getQuadraticXY(0.5,20,100,200,20,500,0));

ctx.imageSmoothingEnabled = false;

var grassImg = document.getElementById('grass');
var playerImg = document.getElementById('player');
var skyImg = document.getElementById('sky');
var spikeImg = document.getElementById('spike');
var diamondImg = document.getElementById('diamond');

var animationProgress = 0;

var stage = 0;

var stages = [

{x : 50, y : 450, originX : 50, originY : 450, property : 'none'},
{x : 150, y : 450, originX : 150, originY : 450, property : 'diamond'},
{x : 250, y : 450, originX : 250, originY : 450, property : 'none'},
{x : 350, y : 450, originX : 350, originY : 450, property : 'spike'},
{x : 450, y : 450, originX : 450, originY : 450, property : 'none'},

	];

var player = {
	
	x : 250,
	y : 350,
	rotation : 0,
	width  : 100,
	height : 100,
	
};

function restartGame(){

scoreDisplay.innerHTML = '';
score = 0;
	
animationProgress = 0;

stage = 0;

stages = [

{x : 50, y : 450, originX : 50, originY : 450, property : 'none'},
{x : 150, y : 450, originX : 150, originY : 450, property : 'diamond'},
{x : 250, y : 450, originX : 250, originY : 450, property : 'none'},
{x : 350, y : 450, originX : 350, originY : 450, property : 'spike'},
{x : 450, y : 450, originX : 450, originY : 450, property : 'none'},

	];

player = {
	
	x : 250,
	y : 350,
	rotation : 0,
	width  : 100,
	height : 100,
	
};


};

function drawPlayer(x,y,rotation){
	
	ctx.save();
	
	ctx.translate(x,y);
	
	ctx.rotate(rotation * Math.PI/180);
	
	ctx.drawImage(playerImg,-50,-50,100,100);
	
	ctx.restore();
	
}


function drawStages(){
	
	
	for(var i = 0;i<stages.length;i++){
		
		
		ctx.drawImage(grassImg,stages[i].x - 50,stages[i].y - 50,100,100);
		
		if(stages[i].property == 'spike'){
			
			ctx.drawImage(spikeImg,stages[i].x - 50,stages[i].y - 150,100,100);
			
		} else if(stages[i].property == 'diamond'){
			
			ctx.drawImage(diamondImg,stages[i].x - 50,stages[i].y - 150,100,100);
			
		}
		
	}
	
}

function moveStages(direction, distance){
	
	if(direction == 'left'){
		
		var newX = getQuadraticXY(1-distance,250,450,300,700,550,50).x;
		var oldX = 550;
			
		var differenceX = oldX - newX; 
		
		
		var newY = getQuadraticXY(1-distance,250,450,300,700,550,50).y;
		var oldY = 0;
			
		var differenceY = newY - oldY;
		
		for(var i = 0;i<stages.length;i++){
			
			stages[i].x = stages[i].originX - differenceX;
			stages[i].y = stages[i].originY + differenceY;
			
		}
		
	}
	
	if(direction == 'right'){
		
		var newX = getQuadraticXY(1-distance,250,450,300,700,550,50).x;
		var oldX = 550;
			
		var differenceX = oldX - newX; 
		
		
		var newY = getQuadraticXY(1-distance,250,450,300,700,550,50).y;
		var oldY = 0;
			
		var differenceY = newY - oldY;
		
		for(var i = 0;i<stages.length;i++){
			
			stages[i].x = stages[i].originX + differenceX;
			stages[i].y = stages[i].originY + differenceY;
			
		}
		
	}
	
	
	
}

function addProperty(){
	
	var random = Math.floor(Math.random() * 10);
	var property = {left : 'none', right : 'none'};
	
	if(random < 5){
		
		property.left = 'spike';
		property.right - 'none';
		
	} else if(random >= 5){
		
		property.left = 'none';
		property.right = 'spike';
		
	}
	
	if(random == 9){
		
		property.left = 'diamond';
		property.right = 'diamond';
		
	}
	
	return property;
	
}

document.getElementById('left-side').onclick = function(){
	
	var nextProperty = addProperty().left;
	
	if(animationProgress == 0){
	
	stages.push({x : player.x - 300, y : player.y - 350, originX : player.x - 300, originY : player.y - 350, property : nextProperty})
	
	
	animationProgress = 0;
	
	

var moveInt = setInterval(function(){
	
	if(animationProgress <= 1.004){
	
		moveStages('right',animationProgress);
		
		player.rotation -= 1.765;
	
		animationProgress += 0.02;
		
	}
	
	else if(animationProgress > 1.004){
		
		if(nextProperty == 'spike'){
		
		restartGame();
		
	} else if(nextProperty == 'none' || nextProperty == 'diamond'){
			
		score += 1;
		scoreDisplay.innerHTML = score;
			
		}
		
		clearInterval(moveInt);
		animationProgress = 0;
		
		for(var i = 0;i<stages.length;i++){
			
			stages[i].originX = stages[i].x;
			stages[i].originY = stages[i].y;
			
		}
		
		
	}
	

	
},16.6);
	
	}	
		
}

document.getElementById('right-side').onclick = function(){
	
	var nextProperty = addProperty().right;
	
	if(animationProgress == 0){
	
	stages.push({x : player.x + 300, y : player.y - 350, originX : player.x + 300, originY : player.y - 350, property : nextProperty})
	
	
	animationProgress = 0;
	
	

var moveInt = setInterval(function(){
	
	if(animationProgress <= 1.005){
	
		moveStages('left',animationProgress);
		
		player.rotation += 1.765;
	
		animationProgress += 0.02;
		
	}
	
	else{
		
		clearInterval(moveInt);
		animationProgress = 0;
		
		for(var i = 0;i<stages.length;i++){
			
			stages[i].originX = stages[i].x;
			stages[i].originY = stages[i].y;
			
		}
		
		if(nextProperty == 'spike'){
		
		restartGame();
		
	    } else if(nextProperty == 'none' || nextProperty == 'diamond'){
			
		score += 1;
		scoreDisplay.innerHTML = score;
			
		}
		
	}
	
},16.6);
		
	}	
	
};



function gameLoop(){
	
	ctx.clearRect(0,0,500,500);
	
	ctx.drawImage(skyImg,0,0,500,500);
	
	drawStages();
	drawPlayer(player.x,player.y,player.rotation);
	

	
}

gameLoopInt = setInterval(gameLoop, 1000/60);

	
