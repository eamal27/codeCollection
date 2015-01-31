<?php

session_start();

?><!DOCTYPE HTML>
<html>
  <head>
    <title>Add Book</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="addBook.css" type="text/css" rel="stylesheet" />
    <script src="http://code.jquery.com/jquery-1.8.2.min.js"></script>
	<script type="text/javascript" src="addBook.js"></script>
  	<link rel="shortcut icon" href="http://www.favicongenerator.com/favicon2/Open_Book-128-20150106-favicon.ico">
  </head>
  <body>
  	<div>	
  		<header data-role="header">
  			<div id="headerWrapper">
	  			<img id="homeButton" src="images/icon_home.png"/>
		        <h1>Add Book</h1>
      		</div>
      	</header>
		<form id="userInfo" method="post" action="validateForm()">
			<div>
			    <label for="fname">Title:</label>
				<input type="text" name="Title" id="fname" value="" data-mini="true"/>
			</div>

		    <label for="lname">Author:</label>
			<input type="text" name="Author" id="lname" value="" data-mini="true"/>

	     	<label for="tel">Description:</label>
			<textarea type="text" name="Description" data-mini="true"></textarea>

			<label>Languages:</label>
				<select multiple name = "Languages[]" id="languages">
					<option value="actionscript">ActionScript</option>
					<option value="assembly">Assembly</option>
					<option value="bash">Bash</option>
					<option value="batch">Batch</option>
					<option value="c">C</option>
					<option value="cpp">C++</option>
					<option value="csharp">C#</option>
					<option value="clojure">Clojure</option>
					<option value="cobol">COBOL</option>
					<option value="coffeescript">Coffee Script</option>
					<option value="css">CSS</option>
					<option value="curl">Curl</option>
					<option value="fortran">Fortran</option>
					<option value="go">Go</option>
					<option value="haskell">Haskell</option>
					<option value="html">HTML</option>
					<option value="java">Java</option>
					<option value="javascript">Javascript</option>
					<option value="jquery">jQuery</option>
					<option value="lisp">Lisp</option>
					<option value="lua">Lua</option>
					<option value="matlab">MatLab</option>
					<option value="objectivec">Objective-C</option>
					<option value="pascal">Pascal</option>
					<option value="perl">Perl</option>
					<option value="php">PHP</option>
					<option value="python">Python</option>
					<option value="racket">Racket</option>
					<option value="ruby">Ruby</option>
					<option value="swift">Swift</option>
					<option value="visualbasic">Visual Basic</option>
					<option value="yql">YQL</option>
				</select>  

		  	<div id="addBookButton">
					<span id="buttonTitle">Add</span>
				</div>
		</form>

		<div id="message"></div>
	</div>

  </body>
</html>
