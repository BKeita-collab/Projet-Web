<?php
$link = mysqli_connect('localhost', 'root' , 'root' , 'enigme');

  if (!$link) {
  die('Erreur de connexion');
} else {
  //echo 'Succès... ';
}  

#$reponse_enigme = $_POST['nom']; 

// Les réquêtes à traiter 

//La requête pour selectionner les enigmes

$reponse_user = $_POST['reponse_user'];
$id_enigme = $_POST['id_enigme'];


$select_enigmes_reponse = mysqli_query($link, 
"SELECT * FROM réponses INNER JOIN enigmes 
ON réponses.ID_enigme = enigmes.ID_enigme   
WHERE réponses.ID_enigme = ".$id_enigme." and 
numero = ".$reponse_user); 


// Les traitements à faire sur les bases de données

// Traitement sur les enigmes 
if ($select_enigmes_reponse){
  while($valid_reponse = mysqli_fetch_assoc($select_enigmes_reponse)){
    $allValid_reponse[] = $valid_reponse ; 
  }
}else {
  echo 'nope' ; 
}
echo json_encode($allValid_reponse) ; 
?> 





