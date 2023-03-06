import React, { useState } from 'react';
import './styles.css';

export default function Quizz() {
	const questions = [
		{
			questionText: 'Quem foi o primeiro presidente eleito no Brasil?',
			answerOptions: [
				{ answerText: 'Prudente de Morais', isCorrect: false },
				{ answerText: 'Getúlio Vargas', isCorrect: false },
				{ answerText: 'Deodoro da Fonseca', isCorrect: true },
				{ answerText: ' Juscelino Kubitschek', isCorrect: false },
			],
		},
		{
			questionText: 'As eleições presidenciais no Brasil passaram a acontecer em: ',
			answerOptions: [
				{ answerText: 'Antes da proclamação da republica ', isCorrect: false },
				{ answerText: 'Após a proclamação da republica ', isCorrect: true },
				{ answerText: 'No periodo colonial', isCorrect: false },
				{ answerText: 'Após golpe de 1964', isCorrect: false },

			],
		}, {
			questionText: 'A legislação brasileira determina que um candidato é eleito em primeiro turno caso ele alcance:',
			answerOptions: [
				{ answerText: '50% + 1 dos votos validos', isCorrect: true },
				{ answerText: '45% + 1 dos votos validos', isCorrect: false },
				{ answerText: '10% dos votos validos', isCorrect: false },
				{ answerText: '50% dos votos validos ', isCorrect: false },
			],
		},
		{
			questionText: 'As eleições no Brasil ocorrem regularmente a cada: ',
			answerOptions: [
				{ answerText: '5 anos', isCorrect: false },
				{ answerText: '2 anos', isCorrect: false },
				{ answerText: '3 anos', isCorrect: false },
				{ answerText: '4 anos', isCorrect: true },
			],
		},
		{
			questionText: 'A urna eletronica foi desenvolvida por uma empresa: ',
			answerOptions: [
				{ answerText: 'Espanhola', isCorrect: false },
				{ answerText: 'Portuguesa', isCorrect: false },
				{ answerText: 'Norte Americana', isCorrect: false },
				{ answerText: 'Brasileira', isCorrect: true },
			],
		},
		{
			questionText: 'Em que ano a urna eletronica foi utilizada nas eleições gerais do Brasil: ',
			answerOptions: [
				{ answerText: 'Outubro de 2000 ', isCorrect: true },
				{ answerText: 'Outubro de 1996 ', isCorrect: false },
				{ answerText: 'Outubro de 1997', isCorrect: false },
				{ answerText: ' Outubro de 2001', isCorrect: false },
			],
		},
		{
			questionText: 'O voto feminino no Brasil ocorreu em: ',
			answerOptions: [
				{ answerText: 'Fevereiro de 1932 pelo presidente Getulio Vargas ', isCorrect: true },
				{ answerText: 'Janeiro de 1930 pelo então presidente Getulio Vargas', isCorrect: false },
				{ answerText: 'Fevereiro de 1934 pelo presidente Getulio Vargas ', isCorrect: false },
				{ answerText: 'Fevereiro de 1935 pelo então presidente Getulio Vargas', isCorrect: false },
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
						Você acertou {score} de {questions.length}
						<a href="/homePage"><button className="voltar1">voltar</button></a>
						<a href="/Quiz"><button className="refazer">refazer</button></a>
					</div>
				) : (
					<>
						<div className='question-section'>
							<div className='question-count'>
								<span>Questão {currentQuestion + 1}</span>/{questions.length}

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
