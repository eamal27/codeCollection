<?php

	require 'dbConnect.php';


	$LanguagesArray = $_POST["Languages"];

	// convert LanguagesArray to space-separated values
	$Languages = " ";
	for ($i = 0; $i < count($LanguagesArray); $i++){
		$Languages = $Languages . $LanguagesArray[$i] . " ";
	}

	class TableRows extends RecursiveIteratorIterator { 
	    function __construct($it) { 
	        parent::__construct($it, self::LEAVES_ONLY); 
	    }

	    function current() {

	        return "<div>" . parent::current(). "</div>";
	    }

	    function beginChildren() { 
	        echo "<div id='listings' class='listings'>"; 
	    } 

	    function endChildren() { 
	        echo "</div>" . "\n";
	    } 
	} 

	$language = explode(" ", $Languages);

	$keyword = "'% " . $language[1] . " %'";
	if(count($language) > 3) {
		for ($i = 2; $i < count($language)-1; $i++){
			$keyword = $keyword . " OR Languages LIKE '% " . $language[$i] . " %'";
		}
	}

	try {
	    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	    $stmt = $conn->prepare("SELECT Title, Author, Description, Languages, id, Rating, RatingCount FROM books WHERE Languages LIKE $keyword ORDER BY Title ASC"); 
	    $stmt->execute();


	    // set the resulting array to associative
	    $result = $stmt->setFetchMode(PDO::FETCH_ASSOC); 

	    foreach(new TableRows(new RecursiveArrayIterator($stmt->fetchAll())) as $k=>$v) { 
	    	// echo $k;
	        echo $v;
	    }
	}
	catch(PDOException $e) {
	    echo "Error: " . $e->getMessage();
	}

	require 'dbDisconnect.php'; 

?>