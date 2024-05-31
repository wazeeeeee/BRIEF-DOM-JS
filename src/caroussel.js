// On déclare les variables des images et de l'index qui va nous permettre de changer la photo affichée.
let images = document.querySelectorAll('#image'); // On sélectionne toutes les images.
let currentIndex = 0;
images[currentIndex].style.display = 'block'; // Affiche la première photo.

function showNextImage() {
    images[currentIndex].style.display = 'none'; // Masquer celle qui était affichée au départ.
    currentIndex = (currentIndex + 1) % images.length; // Incrémentation de l'index pour changer la photo (passer de la 1 à la 2).
    images[currentIndex].style.display = 'block'; // Afficher la suivante.
}

function showPreviousImage() {
    images[currentIndex].style.display = 'none'; // Masquer celle qui était affichée au départ.
    currentIndex = (currentIndex - 1 + images.length) % images.length; // Décrémentation de l'index (utilisation du % images.length pour éviter d'être dans le négatif) et faire une sorte de boucle.
    images[currentIndex].style.display = 'block'; // Afficher la précédente.
}

// Fonction du bouton next.
document.getElementById('next').addEventListener('click', showNextImage);

// Fonction du bouton previous (même fonctionnement que celle du bouton next).
document.getElementById('previous').addEventListener('click', showPreviousImage);

// Ajout des écouteurs d'événements pour les touches de direction gauche et droite
document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowRight') {
        showNextImage(); // Lance la fonction showNextImage.
    } else if (event.key === 'ArrowLeft') {
        showPreviousImage(); // Lance la fonction showPreviousImage.
    }
});
