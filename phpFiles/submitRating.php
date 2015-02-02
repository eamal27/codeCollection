<?php

	require 'dbConnect.php';


	$id = $_POST["id"];
	$rating = $_POST["rating"];
	
	/* 	
		UPDATE books
		SET ratingcount = ratingcount + 1
	*/

	echo $id . ' ' . $rating;

	try {
	    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	    $stmt = $conn->prepare("SELECT id FROM books WHERE id=$id"); 
	    $stmt->execute();


	    // set the resulting array to associative
	    $result = $stmt->setFetchMode(PDO::FETCH_ASSOC); 

	   
	}
	catch(PDOException $e) {
	    echo "Error: " . $e->getMessage();
	}

	require 'dbDisconnect.php'; 

?>