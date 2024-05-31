document.addEventListener('DOMContentLoaded', function(){ // DOMContentLoaded est déclencher quand la page html à finis de chargé.
    let ul = document.createElement('ul'); // on crée un ul.
    document.body.appendChild(ul); // je lui demande d'etre en fin de list.
    let addButton = document.getElementById('submit'); // déclaration de la variable addButton assigné au button submit.
    let resetButton = document.getElementById('reset'); // déclaration de la variable resetButton assigné au button reset.
    let delButton = document.createElement('button');

    // création de la function du button submit
    addButton.addEventListener('click', function(){
        let input = document.getElementById('input'); // je déclare la variable input qui est assigné a l'input du html.
        let data = input.value; // je déclare la variable data assigné a la valeur de input. 
        document.body.style.textAlign = "left"; // modification du style.
        ul.style.width = "500px";
        ul.style.height = "100%";
        ul.style.marginLeft = "350px";
        ul.style.marginTop = "50px"; 

        if(data){
            let li = document.createElement('li'); // je déclare la variable li qui est assigné a une creation de li. 
            li.textContent = data; // je fais en sorte que le contenue du text du li soit = à data.
            ul.appendChild(li); // je lui dit de se mettre a la suite de la list.
            input.value = ''; // rénitialise la valeur de input a zero.
        }
    });

    // Ajout d'un d'événement pour la touche Enter sur l'input
    document.getElementById('input').addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault(); // Empêche la soumission par défaut du formulaire (si applicable)
            addButton.click(); // Déclenche le clic sur le bouton submit
        }
    });

    // création de la function resetButton.
    resetButton.addEventListener('click', function(){
        ul.innerHTML = ''; // quand je clique dessus ça me supprime le ul entier du html.
    });

})