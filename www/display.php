<link rel=StyleSheet href="style.css" type="text/css">

<html>
<body>


<?php

if (isset($_POST['fileName'])){

if (file_get_contents($_POST['fileName'])){

echo '<div id="nav">' . 'Displaying URL: ' . $_POST['fileName'] . ' <span id="icon" style="background-color:green;"> Displaying ✓ </span> </div>';

$data = file_get_contents($_POST["fileName"]);

echo '<iframe id="iFrame" src="' . $_POST['fileName'] . '" />';
	
	
} else {	


	echo '<div id="nav">"' . $_POST['fileName'] .  '" - NO DATA RETRIEVED' . '<span id="icon" style="background-color:red;"> No data X </span> </div>';
	
	echo "<div id='errorDisplay'>


<h2>Error !</h2>

<hr></hr>

<p>The URL that you requested could not be retrieved. This may be because it does not exist or it was typed incorrectly.<br/><br/> To solve this issue you could:</p>

<ul>
  <li>Type the URL in again</li>
  <li>Check that the URL exists</li>
</ul>

</div>";
	
	
}


}; 

?>

</body>
</html> 

