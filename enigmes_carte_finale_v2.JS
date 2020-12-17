/* 1ere partie : 
"""Dans cette partie,
-on extrait la réponse rentrée par le client pour l'enigme 
-on créé une action sur cette reponse 
- */

// -----------------Extraction des données HTML---------------------
let afficher_enigme = document.getElementById('afficher_enigme') ; 
let les_reponses = document.getElementById('les_reponses') ;
let enigme_i = document.getElementById('enigme_i'); 
let form_enigme = document.getElementById('form_enigme') ; 
let validation = document.getElementById('validation') ; 
let all = document.getElementById('all') ; 



// ---------------------Declaration des variables -----------------
//id_enigme du debut par défaut à incrementer
let id_enigme = 1 ;

// recupère la valeur contenue dans le champ recueil_enigme 
 let reponse_user;

// Gestion du score et du nombre de tentatives 
let score = 0; 
let nombre_essaie = 5 ; 


// ---------------------Déclaration de la map ---------------------------
// Initialisation des elements de la carte 
let map = L.map("map"); 




// ---------------------Création des actions sur l'entrée de l'utilisateur---------------------




// ---------------------Création de l'evènement sur le checkbox afficher_enigme---------------------
 
afficher_enigme.addEventListener('change', Onchange) ; 




// ---------------------Fonction Onchange()---------------------
// Onchange  va gérer le click sur le checkbox afficher_enigme
// En cas de clic sur le checkbox , la prémière enigme s'affiche 
// Dans le même temps les reponses associées s'affichent aussi 
function Onchange(){

    if (id_enigme < 6){
        // La valeur 6 est utilisée pour le jeu puisse s'effectuer tant que 
        // le nombre total d'énigme = 5 n'est pas dépassé
        let data = new FormData() ;
        data.append('id_enigme', id_enigme);

        if (afficher_enigme.checked) {
            fetch('enigmes.PHP' , {
                method:'post',
                body: data
            })
            .then (function(result){
                return result.json();
            })
            .then(function(result){
                
                enigme_i.innerHTML = '';
                les_reponses.innerHTML = '' ; 

                result.forEach(r =>{
                    // on affiche les numéros des reponses possibles 
                    // on affiche ensuite les reponses correspondantes aux numéros 
                    les_reponses.innerHTML += '<p>'+r.numero + ' ' +r.reponse+'</p>';

                    // On affiche la map centrée sur la (lat, long) de l'énigme correspondante
                    map.setView([r.latitude,r.longitude],r.zoom);
                    L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}',{
                        attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community'
                    }).addTo(map);
                    
                    // Le popup affiche ainsi l'enigme correspondante sur la carte 
                    L.marker([r.latitude,r.longitude])
                    .addTo(map).bindPopup(r.enigme).openPopup(); 
                }) 
            }) 
            
            }else{
                // En  cas de Uncheck sur le checkbox, toutes les reponses disparaissent 
                // Le HTML ne contient plus d'enigme ni de réponses 
                
                //enigme_i.innerHTML = '';
                les_reponses.innerHTML = '' ; 
             
            }

    } else{
        // ici on  gère le cas où les enigmes sont finies  
        // L'utilisateur a donc tout resolu
        // La partie du HTML hors carte disparait 
        // on raffraichit pour commncer une autre partie 
        all.innerHTML = '' ; 
        window.alert("Félicitations ! Vous avez resolu toutes les enigmes.Jeu terminé, votre score est: "+ score);


    }
        
    };





// ---------------------Création de l'evènement sur le checkbox afficher_enigme--------------------

validation.addEventListener('click' , Onsubmit) ; 



// ---------------------Fonction Onsubmit()---------------------
// Onsubmit() va gérer le retour du client avec la valeur comprise entre 1 et 4 
// Quand l'utilisateur retourne une valeur
// si les réponses sont bonnes, son score est incrementé 
// si les reponses sont mauvaises il a droit à certaines tentatives
// Dans le même temps les reponses associées s'affichent aussi 

function Onsubmit(){
    console.log(id_enigme) ; 

        /// Dimension des etiquêtes(images) à afficher sur la carte 
        let LeafIcon = L.Icon.extend({
            options: {
                iconSize:     [50, 100],
                iconAnchor:   [22, 94],
                popupAnchor:  [-3, -76],
            }
        });
    

    let data = new FormData() ; 
    data.append('id_enigme', id_enigme);

    reponse_user = document.getElementById("recueil_enigme").value ;
    data.append('reponse_user', reponse_user);
    console.log(id_enigme) ; 

        if (id_enigme < 6){
            fetch('enigme_reponse_finale.PHP', {
                method:'post',
                body: data
            })
            .then (function(result){
                return result.json();
            })
            .then(function(result){
                result.forEach(r => {
                        if (r.juste == 1 ){
                            // Ici on gère le cas où la réponse est juste 
                            // on incrémente le score 
                            // Ensuite on passe à l'énigme suivante à l'aide de Onchange

                            let icones = new LeafIcon({iconUrl: r.lien_image}); 
                            L.marker([r.latitude,r.longitude] , {icon: icones})
                            .addTo(map);

                            score +=2 ; 
                            id_enigme ++ ;
                            Onchange();


                            
                        } else if (r.juste != 1) {
                            // Cette séquence gère le cas où la réponse est fausse

                            if (nombre_essaie > 0) {
                                // S'il reste encore des essaies, alors
                                // on lui decrémente le score 
                                // on lui redonne une autre chance 
                            console.log("Votre reponse n'est pas correcte") ; 

                            score -= 1 ;

                            console.log('Votre score est:' + score) ; 
                            nombre_essaie -= 1; 
                            window.alert('Votre reponse est incorrecte, votre score est: '+ score+ 
                            ' il vous reste '+nombre_essaie
                            +' tentatives');

                            
                            } else {
                                // S'il n'ya plus de tentative alors 
                                // on affiche son score 
                                // all fait disparaitre la partie HTML a l'exception de la carte 
                                all.innerHTML = '' ; 

                                window.alert('Jeu terminé, votre score est: '+ score
                                )

                        }
                        
                    }
                })
                });
             } 
        } ; 

