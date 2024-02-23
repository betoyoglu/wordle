const NUMBER_OF_GUESSES = 6;
let guessesRemaining = NUMBER_OF_GUESSES;
let currentGuess = [];
let nextLetter = 0;

const wordInput = document.querySelector("#guess");
const button = document.querySelector("#button");
const tables = document.querySelectorAll("#tables");

//klavyedeki divleri yakaladık
const keyboard = document.querySelectorAll("#keyboard");

button.addEventListener("click", writeTable);
button.addEventListener("click", checkWord);

let randomWord = randomWords();

function writeTable() {
    const word = wordInput.value.toUpperCase().trim();
    const letter = word.split("");
    let a = 0;
    for (let i = 0; i < tables.length; i++) {
        for (let j = 0; j < 5; j++) {
            if (tables[i].children[j].children[0] == null) {
                //tahmini tabloya ekleme
                const h1 = document.createElement("h1");
                h1.textContent = letter[j];
                tables[i].children[j].appendChild(h1);
                a++;



                //renk ayarlama, seçilen kelimenin harflerini arraya atma
                randomWordArray = randomWord.split("");
                //yeşil
                if (letter[j] == randomWordArray[j]) {
                    tables[i].children[j].setAttribute("class", "bg-success col-sm-1 mr-2 d-flex justify-content-center");
                    //klavyeyi yeşil yapma
                    for (let index = 0; index < keyboard.length; index++) {
                        if (keyboard[index].children[0].textContent == randomWordArray[j]) {
                            keyboard[index].setAttribute("class", "col-sm-1 bg-success mr-2 d-flex justify-content-center")
                        }
                    }
                }
                //sarı
                else if (randomWord.includes(letter[j])) {
                    tables[i].children[j].setAttribute("class", "bg-warning col-sm-1 mr-2 d-flex justify-content-center");
                }
                //gri
                else {
                    tables[i].children[j].setAttribute("class", "bg-secondary col-sm-1 mr-2 d-flex justify-content-center");

                    for (let index = 0; index < keyboard.length; index++) {
                        if (keyboard[index].children[0].textContent == letter[j]) {
                            keyboard[index].setAttribute("class", "col-sm-1 bg-dark mr-2 d-flex justify-content-center")
                        }
                    }
                }
            }
        }
        if (a == 5) {
            break;
        }
    }
}

function checkWord() {
    const guessWord = wordInput.value.toUpperCase().trim();
    const word = randomWord.toUpperCase().trim();
    if (word == guessWord) {
        alert("You guessed right! Game over!")
        guessesRemaining = 0
        console.log("true");
    }
    else {
        guessesRemaining -= 1;
        currentGuess = [];
        nextLetter = 0;

        if (guessesRemaining === 0) {
            alert("You've run out of guesses! Game over! You lost!")
        console.log("false");
    }
}
}

function randomWords() {
    const words = ["radyo", "sehpa", "dolap", "kalem", "kavun", "köpek", "merak", "gazap", "sehpa", "roman", "ceviz"];
    const randomIndex = Math.floor(Math.random() * words.length);
    const randomWord = words[randomIndex];
    console.log(randomWord);
    return randomWord.toUpperCase().trim();
}