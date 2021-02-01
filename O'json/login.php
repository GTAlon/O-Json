<!doctype html>
<html>
	<head>
		<meta charset="utf-8"/>
		<link rel='stylesheet' type='text/css' href='css/bootstrap.css'/>
		<title> Login </title>
	</head>
	<body background="img/fond.png">
		<form action="trt_login.php" method="post">
			<table class="inscription">
				<tr>
					<td colspan="2" class='text-center'><img src='img/kysoft.png'/></td>
				</tr>
				<tr>
					<td class='text-right50'><font class='blanc'>Login:</font> </td>
					<td class='text-left50'><input type="text" name="login"/> </td>
				</tr>
				<tr>
					<td class='text-right50'><font class='blanc'>Mot de passe:</font></td>
					<td class='text-left50'><input type="password" name="password"/> </td>
				</tr>
				<tr>
					<td colspan="2" class='text-center'>
						<input type="submit" name="valid" value="Ok" />
					</td>
				</tr>
				<tr>
					<td colspan="2" class='text-center'>
						Login: admin et mdp: admin pour le compte modérateur
						Pour créer son CV les candidats, c'est <a href="/o'json/dist/index.html">ici</a> 
					</td>
				</tr>
			</table> 
		</form>
	</body>
</html>