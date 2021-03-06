<?php

	require 'dbConnect.php';


	$id = $_POST["id"];
	$rating = $_POST["rating"];

	// submit rating
	try {
	    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	    $stmt = $conn->prepare("UPDATE books SET Rating=Rating+$rating,RatingCount=RatingCount+1 WHERE id = $id"); 
	    $stmt->execute();


	    // set the resulting array to associative
	    $result = $stmt->setFetchMode(PDO::FETCH_ASSOC);

	    // echo $rating . " Star Rating!";
	   
	}
	catch(PDOException $e) {
	    echo "Error: " . $e->getMessage();
	}

	// return new average rating and number of user ratings 
	try {
	    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	    $stmt = $conn->prepare("SELECT Rating, RatingCount FROM books WHERE id = $id"); 
	    $stmt->execute();

	    // set the resulting array to associative
	    $result = $stmt->setFetchMode(PDO::FETCH_ASSOC); 
	    $result = $stmt->fetchAll(); 

	    echo json_encode($result[0]);

	}

	catch(PDOException $e) {
	    echo "Error: " . $e->getMessage();
	}

	require 'dbDisconnect.php'; 

?>