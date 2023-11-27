let data ={

    "archerj1" :{ Nom: "Archer" , Pointsdevie : "30" , PointsdAttaque : "3", PointsDefense : "3", AttaqueSpciale : "Flèche Empoisonée", Description : "Inflige les dégats d'attaques, plus un point de dégat à chaque tour pendant 2tours", "Points d'Attaque Spécial": "3 + 1 + 1 "},

    "guerrierj1" :{ Nom: "Guerrier" , Pointsdevie : "30" , PointsdAttaque : "5", PointsDefense : "4", AttaqueSpeciale : "Super Force", Description : "Inflige les dégats d'attaques plus importants", "Points d'Attaque Spécial": "7"},

    "magej1" :{Nom: "Mage" , Pointsdevie : "30" , PointsdAttaque : "5", PointsDefense : "2", AttaqueSpeciale : "Sort de paralysie", Description : "Empeche le joueur d'attaquer au prochain tour", "Points d'Attaque Spécial": "5 pour chaque tour"},

    "pretrej1" :{Nom: "Prêtre" , Pointsdevie : "30" , PointsdAttaque : "4", PointsDefense : "3", AttaqueSpeciale : "Autoguérison", Description : "Récupère 1 point de vie par tour pendant 2 tours", "Points de Défense Spécial":"3 puis  + 1 puis + 1"},

    "pretrej2" :{Nom: "Prêtresse" , Pointsdevie : "30" , PointsdAttaque : "4", PointsDefense : "3", AttaqueSpeciale: "Autoguérison", Description : "Récupère 1 point de vie par tour pendant 2 tours", "Points de Défense Spécial":"3 puis  + 1 puis + 1"},

    "guerrierj2" :{Nom:"Guerrière" , Pointsdevie : "30" , PointsdAttaque : "5", PointsDefense : "4", AttaqueSpeciale : "Super Force", Description : "Inflige les dégats d'attaques plus importants", "Points d'Attaque Spécial": "7"},

    "magej2" :{Nom: "Mage" , Pointsdevie : "30" , PointsdAttaque : "5", PointsDefense : "2", AttaqueSpeciale : "Sort de paralysie" , Description : "Empeche le joueur d'attaquer au prochain tour", "Points d'Attaque Spécial": "5 pour chaque tour"},
    
    "archerj2" : { Nom: "Archer" , Pointsdevie : "30" , PointsdAttaque : "3", PointsDefense : "3", AttaqueSpeciale :  "Flèche Empoisonée", Description : "Inflige les dégats d'attaques, plus un point de dégat à chaque tour pendant 2tours", "Points d'Attaque Spécial": "3 + 1 + 1 "},
}



let PersonnageSelectionne1
let PersonnageSelectionne2

function selectionnerPersonnage(personnage) {
    // // Affiche l'ID du personnage sélectionné pour déboguer
    // alert(personnage);

      // stocker le chemin de l'image
    //   imageSelectionnee1 = cheminImage;

    // Masquer tous les autres personnages
    let tousLesPersonnages = document.querySelectorAll('.allcontainer1 > div');
    tousLesPersonnages.forEach(function (element) {
        element.style.display = 'none';
    });

    // Afficher le personnage sélectionné
    let personnageSelectionne = document.querySelector('.' + personnage);
    personnageSelectionne.style.display = 'block';

    // Afficher le personnage dans l'aire de combat

    PersonnageSelectionne1 = personnage
    return PersonnageSelectionne1
}

// div pv j1  >  data[PersonnageSelectionne1].pv

// Choix des images du dé

// const imagedes = 'images/de' + nombreRandom + '.png';
    
//     document.querySelectorAll('img')[0].setAttribute('src',imagedes)


function selectionnerPersonnage2(personnage) {
    // // Affiche l'ID du personnage sélectionné pour déboguer
    // alert(personnage);


    // Masquer tous les autres personnages
    let tousLesPersonnages = document.querySelectorAll('.allcontainer2 > div');
    tousLesPersonnages.forEach(function (element) {
        element.style.display = 'none';
    });

    // Afficher le personnage sélectionné
    let personnageSelectionne = document.querySelector('.' + personnage);
    personnageSelectionne.style.display = 'block';
}




const choixcharacter = document.querySelector('.choixcharacter')
const btnCombatStart = document.querySelector('.btnCombatStart');
const principal = document.querySelector('.principal');
const aireDeCombat = document.querySelector('.aireDeCombat');
const pointsdeviecontainer= document.querySelector('.pointsdeviecontainer')

btnCombatStart.addEventListener('click', () => {
    principal.style.display = "none";
    choixcharacter.style.display = "none";
    aireDeCombat.style.display = "flex";
    pointsdeviecontainer.style.display = "flex"
})

// bouton combat gauche

const btnAttaqueGauche = document.querySelector('.btnAttaqueGauche');

btnAttaqueGauche.addEventListener('click', () => {
    console.log('le joueur gauche a lancé une attaque')
})


const btnCapaGauche = document.querySelector('.btnCapaGauche');

btnCapaGauche.addEventListener('click', () => {
    console.log('le joueur gauche a lancé sa capacité spéciale')
})

// bouton combat droite

const btnAttaqueDroite = document.querySelector('.btnAttaqueDroite');

btnAttaqueDroite.addEventListener('click', () => {
    console.log('le joueur droit a lancé une attaque')
})



const btnCapaDroite = document.querySelector('.btnCapaDroite');

btnCapaDroite.addEventListener('click', () => {
    console.log('le joueur droit a lancé sa capacité spéciale')
})