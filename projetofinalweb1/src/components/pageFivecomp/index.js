import React, { useState } from 'react';
import './styles.css';

export default function Quizz() {
	const questions = [
		{
			questionText: 'pergunta 1',
			answerOptions: [
				{ answerText: 'opcao', isCorrect: false },
				{ answerText: 'opcao', isCorrect: false },
				{ answerText: 'opcao', isCorrect: true },
				{ answerText: 'opcao', isCorrect: false },
			],
		},
		{
			questionText: 'pergunta 1',
			answerOptions: [
				{ answerText: 'opcao', isCorrect: false },
				{ answerText: 'opcao', isCorrect: true },
				{ answerText: 'opcao', isCorrect: false },
				{ answerText: 'opcao', isCorrect: false },
				
			],
		},
		{
			questionText: 'pergunta 1',
			answerOptions: [
				{ answerText: 'opcao', isCorrect: true },
				{ answerText: 'opcao', isCorrect: false },
				{ answerText: 'opcao', isCorrect: false },
				{ answerText: 'opcao', isCorrect: false },
			],
		},
		{
			questionText: 'pergunta 1',
			answerOptions: [
				{ answerText: 'opcao', isCorrect: false },
				{ answerText: 'opcao', isCorrect: false },
				{ answerText: 'opcao', isCorrect: false },
				{ answerText: 'opcao', isCorrect: true },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		
			
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
        <body className="corpo1">
				<div className='texto'>
					<h1 className='titulo'>Bem Vindo ao Quiz</h1>
					<h3 className='subtitulo'>vejamos o quanto aprendeu</h3>
				</div>
                <div className='app2'>
                    {showScore ? (
                        <div className='score-section'>
                            You scored {score} out of {questions.length}
							<a href="/homePage"><button className="voltar1">voltar</button></a>
							<a href="/Quiz"><button className="refazer">refazer</button></a>
                        </div>
                    ) : (
                        <>
                            <div className='question-section'>
                                <div className='question-count'>
                                    <span>Question {currentQuestion + 1}</span>/{questions.length}
								
                                </div>
								
                                <div className='question-text'>{questions[currentQuestion].questionText}</div>
								<a href="/homePage" ><button className="voltar2">voltar</button></a>
                            </div>
                            <div className='answer-section'>
                                {questions[currentQuestion].answerOptions.map((answerOption) => (
                                    <button className='botao' onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
                                ))}
                            </div>
							
						



							<div className='faixas2'>
								<div className='faixa4'></div>
								<div className='faixa5'></div>
								<div className='faixa6'></div>
							</div>
                        </>
						
                    )}
                </div>
        </body>
	);
}
