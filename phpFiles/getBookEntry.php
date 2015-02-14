<?php

	require 'dbConnect.php';
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

	try {
	    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	    $stmt = $conn->prepare("SELECT Title, Author, Description, Languages, id, Rating, RatingCount FROM books ORDER BY Title ASC"); 
	    $stmt->execute();

	    // set the resulting array to associative
	    $result = $stmt->setFetchMode(PDO::FETCH_ASSOC); 

	    foreach(new TableRows(new RecursiveArrayIterator($stmt->fetchAll())) as $k=>$v) { 
	        echo $v;
	    }
	}
	catch(PDOException $e) {
	    echo "Error: " . $e->getMessage();
	}

	require 'dbDisconnect.php'; 

?>