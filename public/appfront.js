document.getElementById("confirm_mdp").addEventListener("input", function(e){  // methode pour les mdp
    
    //let motDePasseErreur = document.getElementById("erreur");
   
    if (this.value != document.getElementById("mdp").value){
        e.defaultPrevented;                                                                // empéche le chargement de la page 
        motDePasseErreur.innerHTML = "Veuillez entrer deux mots de passe indentiques";    // message d'erreur        
        return false;
    } else {
        motDePasseErreur.innerHTML = "";                                                   // on inject R si tt va bien
    }

});


document.forms["contactForm"].addEventListener("submit", function(e) {                  // méthode générique
    let erreur;
    let inputs = this;                                                                  // récupére les inputs / this = les inputs. En utilisant document.form on récupére tt les champs avec un attribut name  
    

    for (let i = 0; i < inputs.length; i++){                                           // vérifie si tous les champs sont complets
        if(!inputs[i].value){
            console.log(inputs[i]) 
             erreur = "Veuillez renseigner tous les champs";
        }
    }
     
     if (erreur){
         e.preventDefault();                                                            // on empéche l'envois si on a une erreur
         document.getElementById("erreur").innerHTML = erreur;                          // on injecte le msg d'err dans le HTML (ligne66 - faut faire une belle fenetre la c miskin de ouf)
         return false;
     } else{                                                                             
         alert('Formulaire envoyé');                                                    // faire une fenetre supplémentaire (HTML/CSS) pour la validation d'envoi
     }
    });
