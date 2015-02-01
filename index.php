<?php

?><!DOCTYPE HTML>
<html>
  <head>
    <title>Collection</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="collection.css" type="text/css" rel="stylesheet" />
    <script src="http://code.jquery.com/jquery-1.8.2.min.js"></script>
	<script type="text/javascript" src="collection.js"></script>
  	<link rel="shortcut icon" href="http://www.favicongenerator.com/favicon2/Open_Book-128-20150106-favicon.ico">
    <script src="jquery.barrating.js"></script>
  </head>
  <body>
  	<div>	
  		<header data-role="header">
  			<div id="headerWrapper">
	  			<img id="homeButton" src="images/icon_home.png"/>
		        <h1>Programming Book Collection</h1>
				<div id="addBookButton">
					<span id="plus">+</span>
					<span id="buttonTitle">Add Book</span>
				</div>
      		</div>
      	</header>
      	
      	<div id="leftPanel">
	      	<img id="arrow" src="images/icon_filter.png">
      	</div>
      	
      	<div id="leftDIV">
	      	<div id="filterWrapper">
	      		<div id="select_all">
					<span id="select_all_text">Select All</span>
				</div>
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
	      	</div>
	    </div>
		<div id="rightDIV">
			<div id="mainWrapper">
				<div id="bookResultsHeading">All Books</div>
				<div id="listWrapper">
					<!-- Book Listing -->
					<!-- Read 3 -->
					<!-- Rating 4.5 stars -->
				</div>
			</div>
		</div>

		<div id="message"></div>
	</div>

  </body>
</html>
