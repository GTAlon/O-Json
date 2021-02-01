<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<link   href="css/bootstrap.min.css" rel="stylesheet">
		<script src="js/bootstrap.min.js"></script>
	</head>
	 
	<body>
		<div class="container">
			<div class="row">
				<h3>Accueil</h3>
			</div>
			
			<div class="row">
				<p>
					
				</p>
				
				<table class="table table-striped table-bordered">
					<thead>
					</thead>
					<tbody>
					<?php
						
						$pdo = Database::connexion();
						$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION)
						$pdo = Database::deconnexion();
					?>
					</tbody>
				</table>
			</div>
		</div>
	</body>
</html>