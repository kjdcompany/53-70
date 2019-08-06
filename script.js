let liensPages = [];

const lienDesScan = ["http://frscan.com/uploads/manga/kimetsu-no-yaiba/chapters/", "/", ".png"];

const button = document.getElementById('btn');

//let chapitreSuivant = document.getElementById("chapitreSuivant");

button.addEventListener("click", () => {

    //Reinitialise le conteneur d'images
    var container = document.getElementById("container");
    container.innerHTML = "";

    let chapitre = document.getElementById('chapitre').value;

    for (let i = 1; i <= 24; i++) {

        //Creation des liens pour les images du scan
        if (i < 10) {
            lienDesPages = [lienDesScan[0], chapitre, lienDesScan[1], `0${i}`, lienDesScan[2]];
            liensPages[i] = lienDesPages.join('');
        } else {
            lienDesPages = [lienDesScan[0], chapitre, lienDesScan[1], i, lienDesScan[2]];
            liensPages[i] = lienDesPages.join('');
        }

        //Creation et Insertion es images dans des div 
        var div = document.createElement("div");
        div.className = "scan";
        var img = document.createElement("img");
        img.src = liensPages[i];
        div.appendChild(img);
        container.appendChild(div);
    }

    chapitreSuivant.value = (Number(chapitre) + 1);
    //    console.log(chapitreSuivant.value);
})


const buttonNext = document.getElementById('chapSuivant');
//console.log(chapitre);

buttonNext.addEventListener("click", () => {

    //Reinitialise le conteneur d'images
    var container = document.getElementById("container");
    container.innerHTML = "";

    let chapitreEnCours = document.getElementById('chapitre');

    let chapitre = document.getElementById('chapitreSuivant').value;

    for (let i = 1; i <= 24; i++) {

        //Creation des liens pour les images du scan
        if (i < 10) {
            lienDesPages = [lienDesScan[0], chapitre, lienDesScan[1], `0${i}`, lienDesScan[2]];
            liensPages[i] = lienDesPages.join('');
        } else {
            lienDesPages = [lienDesScan[0], chapitre, lienDesScan[1], i, lienDesScan[2]];
            liensPages[i] = lienDesPages.join('');
        }

        //Creation et Insertion es images dans des div 
        var div = document.createElement("div");
        div.className = "scan";
        var img = document.createElement("img");
        img.src = liensPages[i];
        div.appendChild(img);
        container.appendChild(div);
    }

    chapitreSuivant.value = (Number(chapitre) + 1);
    chapitreEnCours.value = chapitre;
    window.scrollTo(0, 0);
})
