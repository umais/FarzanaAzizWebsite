<!doctype html>
<html>
	<head>
	<script>
	window.onload=function(){
		document.getElementById('submitButton').onclick=function(){
			
			var n=document.getElementById("yourname");
			
			var p=document.getElementById("para");
			p.innerHTML="<label style='border:1px solid green'>Your name is :</label>"+n.value;
		
			return false;
		}
	}
	</script>
		<title> Contact Us
		</title>
			<meta charset='utf-8'>
	</head>
	<body>
		<h1> CONTACT US </h1>
			<hr>
		<div>
			<p> This is our Contact page </p>
			<div>
			<form>
			<input id ="yourname" type="text" placeholder="Enter Your Name" required><br>
			<input type="email" placeholder="Enter Your Email"><br>
			<input type="text" placeholder="Enter Your Message" required><br>
			<input  id="submitButton" type="submit" value="Click Here">
			<br>
			<p id="para">
			</p>
			</form>
			</div>
			
		</div>
	</body>
	
	
</html>