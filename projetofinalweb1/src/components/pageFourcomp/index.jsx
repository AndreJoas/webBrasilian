import React from "react";
import "./styles.css";
import "./styles.js";


setTimeout(() => { //funçao "A cada A cada"
    let words = [
        {
            word: "addition",
            hint: "The process of adding numbers"
        },
        {
            word: "meeting",
            hint: "Event in which people come together"
        },
        {
            word: "number",
            hint: "Math symbol used for counting"
        },
        {
            word: "exchange",
            hint: "The act of trading"
        },
        {
            word: "canvas",
            hint: "Piece of fabric for oil painting"
        },
        {
            word: "garden",
            hint: "Space for planting flower and plant"
        },
        {
            word: "position",
            hint: "Location of someone or something"
        },
        {
            word: "feather",
            hint: "Hair like outer covering of bird"
        },
        {
            word: "comfort",
            hint: "A pleasant feeling of relaxation"
        },
        {
            word: "tongue",
            hint: "The muscular organ of mouth"
        },
        {
            word: "expansion",
            hint: "The process of increase or grow"
        },
        {
            word: "country",
            hint: "A politically identified region"
        },
        {
            word: "group",
            hint: "A number of objects or persons"
        },
        {
            word: "taste",
            hint: "Ability of tongue to detect flavour"
        },
        {
            word: "store",
            hint: "Large shop where goods are traded"
        },
        {
            word: "field",
            hint: "Area of land for farming activities"
        },
        {
            word: "friend",
            hint: "Person other than a family member"
        },
        {
            word: "pocket",
            hint: "A bag for carrying small items"
        },
        {
            word: "needle",
            hint: "A thin and sharp metal pin"
        },
        {
            word: "expert",
            hint: "Person with extensive knowledge"
        },
        {
            word: "statement",
            hint: "A declaration of something"
        },
        {
            word: "second",
            hint: "One-sixtieth of a minute"
        },
        {
            word: "library",
            hint: "Place containing collection of books"
        },
    ]
    const wordText = document.querySelector(".word"),
        hintText = document.querySelector(".hint span"),
        timeText = document.querySelector(".time b"),
        inputField = document.querySelector("input"),
        refreshBtn = document.querySelector(".refresh-word"),
        checkBtn = document.querySelector(".check-word");
    let correctWord, timer;
    const initTimer = maxTime => {
        clearInterval(timer);
        timer = setInterval(() => {
            if (maxTime > 0) {
                maxTime--;
                return timeText.innerText = maxTime;
            }
            alert(`Time off! ${correctWord.toUpperCase()} was the correct word`);
            initGame();
        }, 1000);
    }
    const initGame = () => {
        initTimer(30);
        let randomObj = words[Math.floor(Math.random() * words.length)];
        let wordArray = randomObj.word.split("");
        for (let i = wordArray.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
        }
        wordText.innerText = wordArray.join("");
        hintText.innerText = randomObj.hint;
        correctWord = randomObj.word.toLowerCase();;
        inputField.value = "";
        inputField.setAttribute("maxlength", correctWord.length);
    }

    const checkWord = () => {
        let userWord = inputField.value.toLowerCase();
        if (!userWord) return alert("Please enter the word to check!");
        if (userWord !== correctWord) return alert(`Oops! ${userWord} is not a correct word`);
        alert(`Congrats! ${correctWord.toUpperCase()} is the correct word`);
        initGame();
    }
    refreshBtn.addEventListener("click", initGame);
    checkBtn.addEventListener("click", checkWord);

    initGame();

}, 1000)


function Gamer() {

    return (
        <div>
            <body className="corpo">




                <div className="caixa">
                    <div className="urnA">
                        <h1 className="texto">Justiça Eleitoral</h1>

                        <div className="Preta">
                            <div class="container">
                                <h2>Word Scramble</h2>
                                <div class="content">
                                  
                                    <div class="details">
                                        <div class="palavra">
                                            <p class="hint">Dica:<span></span></p>
                                                    <p class="word"></p>
                                        </div>
                                        <p class="time">Tempo Restante: <span><b>30</b>s</span></p>
                                    </div>
                                    <input type="text" spellcheck="false" placeholder="Enter a valid word" />

                                </div>
                            </div>
                        </div>
                        <div className="retang">
                            <div id="calc">
                                <div className="one calcu  m">1</div>
                                <div className="one2 calcu  m">2</div>
                                <div className="one3 calcu  m">3</div>
                                <div className="one4 calcu  m ">4</div>
                                <div className="one5 calcu  m">5</div>
                                <div className="one6 calcu  m">6</div>
                                <div className="one7 calcu  m">7</div>
                                <div className="one8 calcu  m">8</div>
                                <div className="one9 calcu  m">0</div>
                                <div className="one0 calcu  m">9</div>

                                <div className="zero0 calcu ">Branco</div>
                                <div class="del calcu  refresh-word">corrigir</div>
                                <div class="enter calcu  check-word">Confimar</div>
                            </div>
                        </div>
                    </div>
                </div>
            </body>

        </div>
    );
}
export default Gamer;