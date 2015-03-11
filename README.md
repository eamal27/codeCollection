#   Books

### Programming Books Organizer

A simple web application that allows you to add book titles to a database while keeping them organized by programming languages, with an integrated star-rating system.

Easily search available books by specific programming languages.


##  Technologies

* [HTML5](http://www.w3schools.com/html/html5_intro.asp)
* [CSS](http://www.w3schools.com/css/css_intro.asp)
* [jQuery](http://jquery.com/)
* [Vim](http://www.vim.org/)
* [XAMPP](https://www.apachefriends.org/index.html)
* [PHP](http://www.w3schools.com/php/php_intro.asp)
* [SQL](http://www.w3schools.com/sql/sql_intro.asp)
* [phpMyAdmin](http://www.phpmyadmin.net/home_page/index.php)


##  Install instructions

Clone repository

```
git clone https://github.com/eamal27/codeCollection.git
```
Add the following files to the phpFiles/ directory to connect to your database:

`dbConnect.php`

```
<?php

$username = '<yourUserName>'; 
$password = '<yourPassword>'; 
$host = "localhost"; 
$dbname = 'codingBooks'; 


try {

	$conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password); 

} catch(PDOException $e) {  

	echo $e->getMessage();
	echo 'unable to connect';

}

?>

```
`dbDisconnect.php`

```
<?php

$conn = null;

?>

```