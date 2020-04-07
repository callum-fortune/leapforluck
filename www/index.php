<!DOCTYPE html>
<html lang="en">
<head>
  <title>Bootstrap Example</title>
  
  <script src="jquery-3.4.1.min.js"></script>
  
  <link href="https://fonts.googleapis.com/css?family=Staatliches&display=swap" rel="stylesheet">
  
</head>

<style>

body{
	
	overflow:scroll;
	
}

canvas{
	
	background-color:grey;
	position:absolute;
	top:0;
	left:0;
	
}

.touch-bar{
	
	height:500px;
	width:250px;
	backgound-color: rgba(0,0,0.2,0.5);
	position:absolute;
	
}

.touch-bar:hover{
	
	background-color: rgba(0,0,0.5,0.15);
	
}

#score{
	
	position:absolute;
	top:10px;
	left:10px;
	font-size:50px;
	line-height:34px;
	text-shadow:3px 3px 0px black;
	font-family: 'Staatliches', cursive;
	color:white;
}

</style>

<body>

<canvas id='canvas' style='' width='500px' height='500px'></canvas>

<div id='left-side' class='touch-bar' style='top:0;left:0;'></div>

<div id='right-side' class='touch-bar' style='top:0;left:250px;'></div>

<span id='score' >0</span>

<img src='grass.png' id='grass' style='display:none;'></img>
<img src='player.png' id='player' style='display:none;'></img>
<img src='sky.png' id='sky' style='display:none;'></img>
<img src='spike.png' id='spike' style='display:none;'></img>
<img src='diamond.png' id='diamond' style='display:none;'></img>

<script src="script.js"></script>

</body>
</html>
