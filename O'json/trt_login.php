<?php 
	include 'database.php';
	$pdo = new PDO('mysql:host=localhost;dbname=kysoft;charset=utf8', 'root', '', array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));
	$req= $pdo->prepare("SELECT login
			FROM utilisateur
			WHERE login= :login
			AND mdp = :password");
	$req->execute(array('login'=>$_POST['login'],'password'=>$_POST['password']));
	$pdo->query($req);
	if ($req->rowCount()==0){
		header("location:login.php");
	}
	else{
		session_start();
		$_SESSION['IdUser'] = $ligne ['login'];
		header("location:google.fr"); //Je n'ai pas encore incorporé la page accueil
	}
?>