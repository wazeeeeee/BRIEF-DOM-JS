document.addEventListener("DOMContentLoaded", function() {
    let player1Score = 0;
    let player2Score = 0;
    let maxScore = 5;

    // Selectionner les elements du html.
    const player1Btn = document.getElementById('player1-btn');
    const player2Btn = document.getElementById('player2-btn');
    const resetBtn = document.getElementById('reset-btn');
    const player1ScoreDisplay = document.getElementById('player1-score');
    const player2ScoreDisplay = document.getElementById('player2-score');
    const maxScoreInput = document.getElementById('max-score');

    // Fonction pour mettre a jour les score.
    function updateScores() {
        player1ScoreDisplay.textContent = player1Score;
        player2ScoreDisplay.textContent = player2Score;

        if (player1Score >= maxScore || player2Score >= maxScore) {
            player1Btn.disabled = true;
            player2Btn.disabled = true;
            if (player1Score >= maxScore) {
                player1ScoreDisplay.style.color = 'green';
            } else {
                player2ScoreDisplay.style.color = 'green';
            }
        }
    }

    // Gestion des évenement pour les buttons.
    player1Btn.addEventListener('click', function() {
        if (player1Score < maxScore && player2Score < maxScore) {
            player1Score++;
            updateScores();
        }
    });

    player2Btn.addEventListener('click', function() {
        if (player1Score < maxScore && player2Score < maxScore) {
            player2Score++;
            updateScores();
        }
    });

    // Creation du bouton reset.
    resetBtn.addEventListener('click', function() {
        player1Score = 0;
        player2Score = 0;
        player1Btn.disabled = false;
        player2Btn.disabled = false;
        player1ScoreDisplay.style.color = 'black';
        player2ScoreDisplay.style.color = 'black';
        updateScores();
    });

    // Gestion score max.
    maxScoreInput.addEventListener('change', function() {
        maxScore = parseInt(maxScoreInput.value);
        resetBtn.click();
    });

    updateScores();
});
