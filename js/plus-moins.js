
var $tentative = document.getElementById("tentative");

var $error = document.getElementById("error");

var $bouton = document.getElementById("bouton");

var $resultat = document.getElementById("resultat");

var $nbrEssai = document.getElementById("nbrEssai");

var essai = 0; // compteur de tentatives du joueur

var essaiMax = 7; // nbre de tentatives max à fixer par le développeur (si modif, html à modidier aussi) 


// Cette ligne génère aléatoirement un nombre entre 1 et 100
var solution = Math.floor(Math.random() * 100) + 1;


// Décommentez temporairement cette ligne pour mieux vérifier le programme
document.getElementById("testJeu").innerHTML = "( --- La solution est : " + solution + " --- )";


function verifier() { // fonction de comparaison entre solution "ordi" et tentative "joueur"

        essai++;
        var essaiRestant = essaiMax - essai;

        // test de contrôle de la tentative qui doit être un nombre compris entre 1 et 100
        if (($tentative.value < 1) || ($tentative.value > 100) || (isNaN($tentative.value))) {
            $error.innerHTML = "( --- Attention : Saisir un nombre entre 1 et 100 --- )";
        }


        // on compare les variables "tentative" et "solution" avec if ... else if
        if (($tentative.value > solution) && (essai < essaiMax)) {
           $resultat.innerHTML = "Trop grand !";
           $nbrEssai.innerHTML = "Il vous reste : " + essaiRestant + " essai(s) !";
        }
        
        else if (($tentative.value < solution) && (essai < essaiMax)) {
            $resultat.innerHTML = "Trop petit !";
            $nbrEssai.innerHTML = "Il vous reste : " + essaiRestant + " essai(s) !";
        }
    
        // fin du jeu si tentative === solution et nbre essais <= 7
        else if (($tentative.value == solution) && (essai < essaiMax)) {

            $resultat.innerHTML = "Bravo !" 
            $nbrEssai.innerHTML = "Vous avez trouvé en : " + essai + " essai(s) ... Recharger la page pour rejouer !";
        }
        
        else if (($tentative.value != solution) && (essai == essaiMax)) {
            $resultat.innerHTML = "Perdu... La solution était : " + solution
            $nbrEssai.innerHTML = "Recharger la page pour rejouer !";
        }
} // fin function verifier

$bouton.onclick = verifier;
