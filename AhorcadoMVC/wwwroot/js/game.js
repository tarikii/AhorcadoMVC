let attemptsLeft = 6;
let gameOver = false;

function checkLetter(letter) {
    if (gameOver) return;

    let found = false;

    for (let i = 0; i < wordLetters.length; i++) {
        if (wordLetters[i] === letter) {
            document.getElementById(`letter-box-${i}`).innerText = letter;
            document.getElementById(`letter-button-${letter}`).disabled = true;
            found = true;
        }
    }

    if (!found) {
        attemptsLeft--;

        updateHangmanImage(attemptsLeft);

        if (attemptsLeft <= 0) {
            gameOver = true;
            disableAllButtons();

            setTimeout(() => {
                alert("GAME OVER!");
            }, 0);

        }
    } else {
        if (checkWinCondition()) {
            gameOver = true;
            disableAllButtons();
            alert("I WIN!");
        }
    }
}

function updateHangmanImage(attempts) {
    const image = document.getElementById('hangman-image');
    const newImageSrc = `/img/Ahorcado${6 - attempts}.jpg`;

    if (attempts === 0) {
        image.src = newImageSrc;
    } else {
        image.src = newImageSrc;
    }
}

function checkWinCondition() {
    const boxes = document.querySelectorAll('#BoxesPanel .box-class');
    return Array.from(boxes).every(box => box.innerText !== '_');
}

function disableAllButtons() {
    const buttons = document.querySelectorAll('#ButtonsPanel .letter-button');
    buttons.forEach(button => button.disabled = true);
}
