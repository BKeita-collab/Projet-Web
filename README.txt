#BLUE SCARE IN PARIS  

#README pour le programme de création d’une escape Game géographique 
-------------------------------------------------------------------

# TEAM MEMBERS
--------------
 
   * "Brahima Keita. Adrienne Zebaze"

#INTRODUCTION
-------------

L'objectif de ce projet est de créer une escape Game sur une carte web en résolvant des énigmes et en trouvant des objets.
Nous n'aurons pas besoin d'importer des modules dans ce projet. Cependant, le module Leaflet a été utilisé. 

   * Pour une description complète de ce module, visitez la page:
	https://leafletjs.com/

#EXIGENCES
----------

Ce projet n'exige aucun module externe

#INSTALLATION
-------------

   * Installez comme vous le feriez normalement, l'installateur de l'environnement de serveur local MAMP et l'éditeur de code redéfini Visual Studio Code. Visitez:
	https://www.mamp.info/en/downloads/ 
	https://code.visualstudio.com/

#CONFIGURATION
--------------

    * Configurer le web serveur dans MAMP >> Preferences >> Web Server

    Le serveur web fonctionnant sur votre ordinateur a besoin de cette configuration pour retrouver le code à exécuter


#EXECUTION DU CODE
------------------
	* Le code est constituée dans l'ordre : 
		- Un fichier HTML avec le nom: enigmes_carte_finale_v2.HTML
		- Un fichier JavaScript avec le nom: enigmes_carte_finale_v2.JS
		- 2 fichiers PHP avec les noms: enigme_reponse_finale.PHP, enigmes.PHP
		- Un fichier CSS avec le nom : enigmes_carte_finale.CSS
	* Déroulement du jeu : 
		1. Cocher dans la case: Afficher énigme 
		2. Choisir les réponses entre 1 et 4 dans le champ 
		3. Si la réponse est bonne, vous passez directement à l'énigme suivante
		4. Si la réponse est mauvaise, vous restez sur la même énigme et vous avez droit à 5 tentatives tout au long du jeu
		5. Si le jeu fini, alors votre score est affiché 


#GESTION DU SCORE 
------------------
Pour le jeu, vous avez au total 5 tentatives 
	* Déroulement du jeu : 
		1. En cas de bonnes réponses, vous obtenez 2 points  
		2. En cas de mauvaises réponses, vous perdez 1 point 
		3. A chaque nouvelles tentatives vous perdez 1 point
		4. A la fin, votre score est affiché



#DEPANNAGE
----------

    * Si la carte ne s'affiche pas, faites ce qui suit:
	- Créez un compte Mapbox où vous demanderez un accès à la couche de tuile
	- Copiez cet accès
	- Dans le fichier enigmes_carte.JS, copiez cet accès à l'emplacement accessToken
	
    