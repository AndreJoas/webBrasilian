import React from "react";
import "./styles.css";
import "./styles.js";


setTimeout(() => { //funçao "A cada A cada"
    let words = [
        {
            word: "advocacia",
            hint: "Área técnica que defende os interesses das pessoas"
        },
        {
            word: "direito",
            hint: "Ciência que estuda as leis e como elas são aplicadas em situações do dia a dia"
        },
        {
            word: "justiça",
            hint: "A virtude moral que rege o ser espiritual no combate ao egoísmo biológico, orgânico, do indivíduo"
        },
        {
            word: "juiz",
            hint: "Cidadão investido de autoridade pública com o poder-dever para exercer a atividade jurisdicional"
        },
        {
            word: "advogado",
            hint: "Profissional liberal, graduado em Direito e autorizado pelas instituições competentes de cada país a exercer o jus postulandi"
        },
        {
            word: "cidadania",
            hint: "Sujeito de direitos e deveres"
        },
        {
            word: "eleitor",
            hint: "Pessoas que elegem um representante para um órgão decisor"
        }, 
       
    ]
    const wordText = document.querySelector(".word"),
        hintText = document.querySelector(".hint span"),
        timeText = document.querySelector(".time b"),
        inputField = document.querySelector("input"),
        refreshBtn = document.querySelector(".refresh-word"),
        checkBtn = document.querySelector(".check-word");
    let correctWord, timer;
    const initTimer = maxTime => { //verifica o tempo restante
        clearInterval(timer);
        timer = setInterval(() => {
            if (maxTime > 0) {
                maxTime--;
                return timeText.innerText = maxTime;
            }
            alert(`Fim do tempo! ${correctWord.toUpperCase()} era a palavra certa`);
            initGame();
        }, 1000);
    }
    const initGame = () => { 
        initTimer(30);
        let randomObj = words[Math.floor(Math.random() * words.length)]; //sorteia palavras
        let wordArray = randomObj.word.split("");
        for (let i = wordArray.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]]; //pega um elemento 
        }
        wordText.innerText = wordArray.join("");
        hintText.innerText = randomObj.hint;
        correctWord = randomObj.word.toLowerCase();;
        inputField.value = "";
        inputField.setAttribute("maxlength", correctWord.length);
    }

    const checkWord = () => { //verifica se ta correta
        let userWord = inputField.value.toLowerCase();
        if (!userWord) return alert("Insira a palavra para verificar!"); // se n tiver palavra, alerta pra colocar
        if (userWord !== correctWord) return alert(`Oops! ${userWord} errou a palavra`); // se  a palavra tiver errada
        alert(`Parabens! ${correctWord.toUpperCase()} a palavra está correta`);
        initGame();
    }
    refreshBtn.addEventListener("click", initGame);
    checkBtn.addEventListener("click", checkWord);

    initGame();

}, 1000)


function Gamer() {

    return (
        <div>
            <header className="barra1"><a className="navb1" href="/homePage"><button className="btao1">voltar Para Home</button></a></header>
            <body className="corpo">
                <div className="caixa">
                    <div className="urnA">
                        <h1 className="texto">Justiça Eleitoral</h1>

                        <div className="Preta">
                            <div class="container">
                                <h2>Palavras Embaralhadas</h2>
                                <div class="content">

                                    <div class="details">
                                        <div class="palavra">
                                            <p class="hint">Dica:<span></span></p>
                                            <p class="word"></p>
                                        </div>
                                        <p class="time">Tempo Restante: <span><b>30</b>s</span></p>
                                    </div>
                                    <input type="text" spellcheck="false" placeholder="Insira a palavra" />

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