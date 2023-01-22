var listemots= new Array("interstellar","joker","batman","pulp fiction","sonic","the exorcist","shrek","scream","ghostbuster","avatar","alerte rouge","the mask","le roi lion","halloween","maman j ai rate l avion")
var motactuel;
var motDeviner= new Array();
var vie;
var lettreUtiliser;

function afficher() {
    temp ="";
    for (let i = 0; i < motDeviner.length; i++) {
        temp=temp+motDeviner[i]+" ";     
    }
    document.getElementById("motADeviner").innerHTML=temp;
}

function onload() {
    lettreUtiliser="";
    vie = 11;
    i = Math.floor(Math.random()*listemots.length);
    motactuel=listemots[i];
    for (let j = 0; j < motactuel.length; j++) {
        if (motactuel[j]!=" "){
            motDeviner[j]="_";
        }
        else if (motactuel[j]=="'"||motactuel[j]=="-") {
            motDeviner[j]==motactuel[j];
        }
        else{motDeviner[j]=" ";}
    }
    afficher();
}



function validation() {
    valeur= document.getElementById("lettreEntree").value.toLowerCase();
    if (valeur.length!=1) {
        if (valeur==motactuel) {
            for (let j = 0; j < motactuel.length; j++) {
                motDeviner[j] = motactuel[j];
            }
            afficher();
            victoire(motDeviner);
        }
       alert("Valeur impossible!!!");
    }
    else if (lettreUtiliser.includes(valeur)) {
        alert("Lettre déjà utilisée !!!");}
    else if (motactuel.includes(valeur)) {
        //alert("Lettre valide");
        
        for (let j = 0; j < motactuel.length; j++) {
            if (valeur==motactuel[j]) {
                motDeviner[j]=valeur;
            }
        }
        //alert(motDeviner);
        afficher();
        victoire(motDeviner);
    
    
    }
    else{
        vie--;
        //document.getElementById("Vie").innerHTML=vie;
        document.getElementById("imgVie").src="styles/perdu/"+(11-vie)+".png";
        defaite();
    }
    lettreUtiliser=lettreUtiliser+valeur+" "
    document.getElementById("lettreUtilisee").innerHTML=lettreUtiliser;
    //document.body.style.backgroundColor="green";
    document.getElementById("lettreEntree").value=null;
}

function victoire(mot) {
    for (let i = 0; i < motactuel.length; i++) {
        if (mot[i]!=motactuel[i]) {
            return
        }
    }
    document.getElementById("ZoneEntree").hidden=true;
    document.getElementById("gifVictoire").hidden=false;
    alert("Mot Trouvé!! (Pour relancer recharge la page)");
}
function defaite() {
    if (vie<=0) {
        alert("Perdu!! Le mot était "+motactuel+" (Pour relancer recharge la page)");
    }
}
