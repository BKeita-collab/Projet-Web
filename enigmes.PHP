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
$ide = $_POST['id_enigme'];

/* $select_enigmes = mysqli_query($link, 
"SELECT * FROM enigmes, réponses where enigmes.ID_enigme = 
réponses.ID_enigme AND enigmes.ID_enigme = ".$ide) ;  */

$select_enigmes = mysqli_query($link, 
"SELECT * 
FROM enigmes INNER JOIN réponses 
ON enigmes.ID_enigme = 
réponses.ID_enigme 
WHERE enigmes.ID_enigme = ".$ide) ;



// Les traitements à faire sur les bases de données

// Traitement sur les enigmes 
if ($select_enigmes){
  while($enigme = mysqli_fetch_assoc($select_enigmes)){
    $allEnigmes[] = $enigme ; 
  }
}else {
  echo 'nope' ; 
}
echo json_encode($allEnigmes) ; 
?> 

<?php 





?>




