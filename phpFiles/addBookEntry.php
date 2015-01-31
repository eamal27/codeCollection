<?php

	require 'dbConnect.php';

	$success = false;

	$Title = $_POST["Title"];
	$Author = $_POST["Author"];
	$Description = $_POST["Description"];
	$LanguagesArray = $_POST["Languages"];

	// convert LanguagesArray to space-separated values
	$Languages = " ";
	for ($i = 0; $i < count($LanguagesArray); $i++){
		$Languages = $Languages . $LanguagesArray[$i] . " ";
	}

    //The following code checks validity of title, author and description
	if (!preg_match("/^[a-zA-Z0-9 -:]*$/",$Title)) {
		die ('Title should only contain Letters and spaces.');
	} else if (!preg_match("/^[a-zA-Z0-9 ]*$/",$Author)) {
		die ('Author name should only contain Letters and spaces.');
	}
	
	//The following code pushes all of the values to a new row in the db
	//Assuming all tests above passed succesfully
	$statement = $conn->prepare("INSERT INTO books (Title, Author, Description, Languages) 
		values (:Title, :Author, :Description, :Languages)");

    $statement ->bindParam(':Title', $Title, PDO::PARAM_STR);
    $statement ->bindParam(':Author', $Author, PDO::PARAM_STR);
    $statement ->bindParam(':Description', $Description, PDO::PARAM_STR);
    $statement ->bindParam(':Languages', $Languages, PDO::PARAM_STR);


	$statement->execute();
	$numRowsAffected = $statement->rowCount();

	if ($numRowsAffected == 1){

		$success = true;

	} else {
		echo 'Adding ' . $Title . ' failed.';
	}


	//close the db link
	require 'dbDisconnect.php'; 

	if ($success){
		echo 'Book added successfully!' ;
	}

?>