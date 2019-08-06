let liensPages = [];

const lienDesScan = ["http://frscan.com/uploads/manga/kimetsu-no-yaiba/chapters/", "/", ".png"];

//Le bouton de la premiere ligne
const button = document.getElementById('btn');

//Click sur le bouton pour charger le chapitre
button.addEventListener("click", () => {

    //Reinitialise le conteneur d'images
    var container = document.getElementById("container");
    container.innerHTML = "";

    //Valeur de ce qui est inscrit dans le imput
    let chapitre = document.getElementById('chapitre').value;


    for (let i = 1; i <= 30; i++) {

        //Creation des liens pour les images du scan en utilisant le 00 quand necessaire
        if (i < 10) {
            lienDesPages = [lienDesScan[0], chapitre, lienDesScan[1], `0${i}`, lienDesScan[2]];
            liensPages[i] = lienDesPages.join('');
        } else {
            lienDesPages = [lienDesScan[0], chapitre, lienDesScan[1], i, lienDesScan[2]];
            liensPages[i] = lienDesPages.join('');
        }


        //Creation et Insertion des images
        let img = document.createElement("img");
        img.src = liensPages[i];

        //ajout de la classe none aux images non chargees
        img.onerror = function () {
            return img.className = "none";
        };

        //Creation d'un div pour contenir l'image
        let div = document.createElement("div");
        div.className = "scan";

        //Insertion de l'image dans le div
        div.appendChild(img);
        container.appendChild(div);
    }

    //Insertion du numero du chapitre suivant dans la barre du bas
    chapitreSuivant.value = (Number(chapitre) + 1);

})


//Le bouton de la derniere ligne
const buttonNext = document.getElementById('chapSuivant');



buttonNext.addEventListener("click", () => {

    //Reinitialise le conteneur d'images
    var container = document.getElementById("container");
    container.innerHTML = "";

    //Prends l'element contenant le chapitre en cours
    let chapitreEnCours = document.getElementById('chapitre');

    //Prends la valeur contenue dans le input du bas
    let chapitre = document.getElementById('chapitreSuivant').value;

    for (let i = 1; i <= 30; i++) {

        //Creation des liens pour les images du scan
        if (i < 10) {
            lienDesPages = [lienDesScan[0], chapitre, lienDesScan[1], `0${i}`, lienDesScan[2]];
            liensPages[i] = lienDesPages.join('');
        } else {
            lienDesPages = [lienDesScan[0], chapitre, lienDesScan[1], i, lienDesScan[2]];
            liensPages[i] = lienDesPages.join('');
        }

        //Creation et Insertion des images
        let img = document.createElement("img");
        img.src = liensPages[i];

        //ajout de la classe none aux images non chargees
        img.onerror = function () {
            return img.className = "none";
        };

        //Creation d'un div pour contenir l'image
        let div = document.createElement("div");
        div.className = "scan";

        //Insertion de l'image dans le div
        div.appendChild(img);
        container.appendChild(div);
    }

    //Insertion du numero du chapitre suivant dans la barre du bas
    chapitreSuivant.value = (Number(chapitre) + 1);

    //Insertion du numero du chapitre en cours dans la barre du haut
    chapitreEnCours.value = chapitre;

    //Ramene la fenetre au debut de la page
    window.scrollTo(0, 0);
})


//     ***06.08.2019      ==  Debut des vrais affaires mon poto  ==
