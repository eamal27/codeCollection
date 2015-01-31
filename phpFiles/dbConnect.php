<?php

$username = 'eamal27'; 
$password = '8709808'; 
$host = "localhost"; 
$dbname = 'codingBooks'; 



try {

	$conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password); 

} catch(PDOException $e) {  

	echo $e->getMessage();
	echo 'this is not working';

}

?>

