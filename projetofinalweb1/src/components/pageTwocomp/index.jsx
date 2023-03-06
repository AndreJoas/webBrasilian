import React from "react";
import sabia from "./imagem/sabia.png";
import mulhres from "./imagem/mulehres.png";

import funci from "./imagem/Funcina_Assim.png";
import "./styles.css"


function Aprender() {
    return (
        <div>
            <body className="backG">
                {/* <a href="/homePage"><button>voltar Para Home</button></a> */}
                <header className="barra1"><a className="navb1" href="/homePage"><button className="btao1">voltar Para Home</button></a></header>
                <div className="cabeça">
                    <div className="D11"><h1 className="TituloSaberMais">Vamos Entender Melhor</h1></div>
                </div>

                <div className="cardP1">
                    <div className="Qu1">
                        <h2 id="menu" className="Titulo0">Você Sabia?</h2>
                        <ul className="listSaberMais">
                            <li><a href="#01" className="il">Voto Feminino no Brasil</a></li>
                            <li><a href="#02" className="il">Quem Pode Votar</a></li>
                            <li><a href="#03" className="il">Quem Pode Ser Eleito</a></li>
                            <li><a href="#04" className="il">Eleições Indiretas</a></li>
                            <li><a href="/SaberEntender2" className="il">Pequena Historia das Eleições Diretas</a></li>
                            <li><a href="/SaberEntender2" className="il">Voto Censitario</a></li>
                            <li><a href="/SaberEntender2" className="il">Voto Eletronico</a></li>
                            <li><a href="/SaberEntender2" className="il">Compra de Xotos</a></li>
                            <li><a href="/SaberEntender2" className="il">Como Denunciar Crimes Eleitorais</a></li>
                        </ul>
                    </div>
                    <div class="Qu11">
                        <div className="cardft"><img className="saber" src={sabia} /></div>
                    </div>

                </div>
                <div className="cardP2">
                    <div className="Qu2">
                        <div className="Du2"><h2 id="01" className="Titulo9">A Conquista do Voto Feminino no Brasil</h2></div>
                        <h4 className="Text11">O voto feminino no Brasil foi reconhecido em 1932 e incorporado à Constituição de 1934, mas era
                            facultativo. Em 1965, tornou-se obrigatório, sendo equiparado ao dos homens</h4>

                    </div>
                    <div className="Qu22">
                        <figure className="cardft2">
                            <img className="mu" src={mulhres} alt="" title="codigo eleitoral" />
                            <figcaption className="t">Código Eleitoral de 1932 permitiu o voto feminino e criou a Justiça Eleitoral – Foto: TSE</figcaption>
                        </figure>
                    </div>
                    <div className="cardP2">
                        <div className="Qu2">
                            <p className="Text11">As mulheres brasileiras conquistaram o direito de votar em 24 de fevereiro de 1932, por meio do Decreto
                                21.076, do então presidente Getúlio Vargas, que instituiu o Código Eleitoral. Vargas chefiava o governo
                                provisório desde o final de 1930, quando havia liderado um movimento civil-militar que depôs o
                                presidente Washington Luís. Uma das bandeiras desse movimento (Revolução de 30) era a reforma eleitoral.
                                O decreto também criou a Justiça Eleitoral e instituiu o voto secreto. Em 1933, houve eleição para a
                                Assembleia Nacional Constituinte, e as mulheres puderam votar e ser votapela primeira vez. A
                                Constituinte elaborou uma nova Constituição, que entrou em vigor em 19 consolidando o voto feminino –
                                uma conquista do movimento feminista da época.
                            </p>

                            <div className="volta2"><a href="#menu">Voltar ao menu</a></div>
                        </div>
                    </div>
                </div>

                <div className="cardP2">
                    <h2 id="02" className="Titulo10">Quem Pode Votar?</h2>
                    <p className="Text12">| Um pequeno video para tirar essa duvida |</p>
                    <div className="vicard">
                        <iframe className="vid" src="https://www.youtube.com/embed/80tI_7nYAi0"
                            title="YouTube video player" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen></iframe>
                    </div>
                    <dvi className="volta2"><a href="#menu">Voltar ao Menu</a></dvi>
                </div>



                <div className="cardP4">
                    <div className="Qu2">
                        <div className="D11"><h2 id="03" className="TituloSaberMais">Quem Pode Ser Eleito?</h2></div>
                        <h4>Vocês sabiam que para se candidatar a um cargo eletivo é necessário ter uma idade mínima?</h4>
                    </div>
                    <div className="Qu4" >
                        <div className="cardft5"><img className="funci" src={funci} alt="" /></div>
                        <p className="Text12">Além da idade mínima, os candidatos não podem ser analfabetos, estrangeiros e inalistáveis (impedidos
                            dese alistar como eleitores). Apesar de não poderem concorrer, os maiores de 16 e menores de 18, já
                            têmpoder de voto.</p>
                    </div>
                    <dvi className="volta2"><a href="#menu">Voltar ao Menu</a></dvi>
                </div>


                <div className="cardP4">
                    <div className="Qu7">
                        <h2 id="04" className="Titulo10" >Eleições Indiretas</h2>
                        <p  className="Text13">Embora no Brasil a tradição democrática tenha eleito dezenove presidentes, por oito ocasiões foram
                            realizadas eleições indiretas desde a proclamação da República. Nas eleições indiretas, a população não
                            possui direito ao voto. Os representantes são escolhidos por um colégio eleitoral, constituído por uma
                            assembleia fechada.</p>
                    </div>
                    <br></br>
                    <div className="Qu2">
                        <p  className="Text13">
                            Instalada a República, Marechal Deodoro da Fonseca, líder do movimento militar republicano,
                            assumiuprovisoriamente a presidência da República e foi eleito presidente, pelo Congresso, em eleição
                            indireta, realizada em 25 de fevereiro de 1891, pela Assembleia Constituinte. Foi, entretanto, no
                            recente períododa Ditadura Militar, iniciado em 1964, que as eleições indiretas tornaram-se uma prática.
                        </p>
                        <dvi className="volta2"><a href="#menu">Voltar ao Menu</a></dvi>

                    </div>
                </div>
                <header className="barra1"><a className="navb1" href="/homePage"><button className="btao1">voltar Para Home</button></a></header>

            </body>

        </div>
    );
}
export default Aprender;