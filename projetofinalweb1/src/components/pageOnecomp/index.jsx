import React from "react";
import "./styles.css";
import tab from "./historia/tabela_1.png";
import tab2 from "./historia/tabela_2.png";


function Historia() {
        return (
                <div>


                        <body className="backG">
                                <header className="barra1"><a className="navb1" href="/homePage"><button className="btao1">voltar Para Home</button></a></header>
                                <div className="Textos">
                                        {/* */}
                                        <div className="D1"><h1 className="Titul1">Fake News</h1></div>
                                        <div className="D2"><h2 className="Subt">Outros asssuntos sobre o senário</h2></div>
                                </div>
                                <nav className="navegadores justify-content-center navbar navbar-expand-lg">
                                        <div className="home1"><a href="#01">Eleições presidenciais no Brasil | </a></div>
                                        <div className="home1"><a href="#02">Primeiro presidente do brasil | </a></div>
                                        <div className="home1"><a href="/Historia2">Como funcionam as eleições no Brasil? |</a></div>
                                        <div className="home1"><a href="/Historia2">Historia das eleições no mundo |</a></div>
                                </nav>
                                <div class="Principal">
                                        <div class="Q1">

                                                <h2 class="Titulo">Fake News - Definições</h2>
                                                <p class="Text1">O termo fake news foi muito utilizado durante as eleições americanas presidenciais
                                                        de 2016, principalmente pelo candidato Donald Trump, quando queria desacreditar os
                                                        jornais que veiculavam matérias que o criticavam. A mídia tradicional acabou por utilizar
                                                        o termo para descrever as notícias falsas veiculadas por meio de aplicativos e redes sociais
                                                        (PETROLA, 2018, p. 110).
                                                        No Brasil a expressão fake news ganhou uma divulgação enorme durante as eleições
                                                        presidenciais brasileiras de 2018. Traduzido originalmente como “notícia falsa”, possui
                                                        outras definições, como a que Allcott e Gentzkow (2017) trazem, de que fake news são
                                                        notícias intencionalmente falsas, em que é possível confirmar sua veracidade.
                                                        Já a pesquisadora britânica Claire Wardle, que efetuou pesquisas sobre o assunto
                                                        durante as eleições americanas de 2016, considera que a expressão fake news é um termo
                                                        inadequado e simplista para identificar esse fenômeno, e prefere usar os termos
                                                        disinformation (criação deliberada de mentiras para atingir um objetivo) e misinformation
                                                        (compartilhamento impensado de notícias falsas).</p>
                                        </div>
                                        <div className="Textos">
                                                <div className="Qf1"><img className="fak" src="https://i3.wp.com/campograndenoticias.com.br/wp-content/uploads/2022/10/Fake-News-TSE.jpg" alt="" /></div>
                                        </div>
                                </div>
                                <div class="Principal2">
                                        <div class="Q2">

                                                <h2 class="Titulo1">Checagem de Fake News nas eleições brasileiras.</h2>
                                                <p class="Text2">As verificões de noticias falsas são realizadas pelo assistente virtual do TSE via <i>WhatsApp</i> chamado: <strong>Tira-Dúvidas do Tribunal Superior Eleitoral (TSE).</strong>
                                                        A grande novidade é que conteúdos ainda não verificados serão encaminhados para o grupo de checadores, e usuário será comunicado assim que apuração estiver disponível.
                                                        O Tira-Dúvidas do Tribunal Superior Eleitoral (TSE) no WhatsApp traz uma novidade que vai ajudar ainda mais quem quer conferir informações sobre as Eleições 2022
                                                        antes de passar fake news para frente. Agora, os conteúdos que ainda não estiverem verificados por organizações de checagem parceiras do TSE serão encaminhados para
                                                        o grupo de checadores. Assim que a checagem estiver disponível, os usuários serão notificados diretamente pelo chatbot, no celular. Tudo bem rápido e simples.
                                                        A ferramenta de consulta de informações, aliás, agora está no topo do menu das opções do assistente virtual. Tudo isso para garantir que eleitoras e eleitores localizem facilmente essa forma rápida e prática de verificar uma informação.
                                                </p>
                                        </div>

                                        <div className="Q22">
                                                <div className="tx">
                                                        <div className="Qf2"><img className="qr" src="https://www.tse.jus.br/imagens/imagens/conheca-o-tira-duvidas-no-whatsapp-assistente-virtual-da-justica-eleitoral-1601572007340/@@images/8e8560f7-2e9a-40da-a7f1-80d286eeb0af.jpeg" alt="" title="Tira-Duvidas TSE - Assistente Virtual " /></div>
                                                        <div><p class="conteiner-info">Saiba mais em: <a href="https://www.tse.jus.br/comunicacao/noticias/2022/Outubro/checagem-de-noticias-pelo-assistente-virtual-do-tse-traz-novidades">Tribunal Superior Eleitoral - TSE</a></p></div>
                                                </div>
                                                <figure>
                                                        <figcaption>Conheça o ‘Tira-Dúvidas no WhatsApp’, assistente virtual da Justiça Eleitoral.</figcaption>
                                                </figure>

                                        </div>

                                </div>


                                {/* -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
                                <div className="Principa3">
                                        <div className="Q3">
                                                <h2 id="01" className="Ttulo2">Eleições presidenciais no Brasil</h2>
                                                <p className="Text3">As eleições presidenciais começaram a acontecer no Brasil, evidentemente, após a Proclamação da República e a
                                                        escolha do presidencialismo como forma de governo. O primeiro presidente do Brasil foi o marechal Deodoro da Fonseca, nomeado presidente
                                                        provisório e depois eleito indiretamente presidente do Brasil. O primeiro presidente eleito por voto direto foi Prudente de Morais,
                                                        vencedor da eleição de 1894.Como citado, o período da Primeira República foi marcado pela fraude eleitoral. Por fraude estão incluídas
                                                        a manipulação das atas eleitorais, a compra de votos pela concessão de favores, a intimidação dos eleitores, etc. A intimidação dos
                                                        eleitores, por exemplo, foi uma prática que ficou conhecida como voto de cabresto.Ao longo desse período, registraram-se apenas três
                                                        eleições em que a disputa presidencial foi razoavelmente equilibrada:</p>
                                        </div>
                                        <div className="Q33">
                                                <ul className="lista">
                                                        <li>Em 1910, Hermes da Fonseca derrotou Rui Barbosa com mais de 60% dos votos;</li>
                                                        <li>Em 1919, Epitácio Pessoa derrotou Rui Barbosa com 71% dos votos;</li>
                                                        <li>Em 1922, Artur Bernardes derrotou Nilo Peçanha com 60% dos voto;</li>
                                                        <li>Em 1930, Júlio Prestes derrotou Getúlio Vargas com 60% dos voto;</li>
                                                </ul>
                                        </div>
                                </div>

                                <div className="Principa3" >
                                        <div className="Q3">
                                                <p className="Text3">
                                                        Em todas as outras eleições, o vencedor teve aproximadamente 90% dos votos (alguns até bem mais que isso). Esse cenário de fraude eleitoral,
                                                        inclusive, foi um dos motivos que levou ao surgimento do tenentismo, movimento de jovens oficiais do Exército Brasileiro que exigiam reformas no
                                                        país, entre as quais constava o fim das fraudes nas eleições. A continuidade do sistema de eleições diretas para presidente foi interrompida com a
                                                        ascensão de Getúlio Vargas à presidência. Vargas tornou-se presidente após a Revolução de 1930 ter destituído Washington Luís da presidência. Com essa
                                                        revolução, o vencedor da eleição de 1930, Júlio Prestes, foi impedido de tomar posse. A partir de 1930, durante os quinze anos seguintes, a única eleição
                                                        presidencial no Brasil aconteceu em 1934 e foi indireta. Depois que Vargas renunciou em 1945, o Brasil deu início à sua primeira experiência democrática
                                                        no período da Quarta República. Esse período estendeu-se de 1945 a 1964 e contou com eleições presidenciais nos anos de 1945, 1950, 1955 e 1960.
                                                        Segue abaixo a lista de eleições presidenciais que aconteceram nesse período:
                                                </p>
                                                <div className="Qf3"><img className="tabe" src={tab} alt="" /></div>
                                        </div>
                                </div>

                                <div className="Principal4">
                                        <div class="Q4">
                                                <p class="Text4">O mandato presidencial durante a Quarta República era de cinco anos, e não havia a possibilidade de disputar a reeleição. Outro ponto
                                                        era que o vencedor da disputa era decretado em turno único, portanto, exigia-se apenas a maioria simples dos votos. Uma questão interessante do sistema
                                                        eleitoral dessa época era que os eleitores brasileiros também votavam separadamente para vice-presidente.Esse sistema fez com que, em ocasião específica,
                                                        fossem eleitos presidente de uma chapa e vice-presidente de outra. Em 1960, o vice-presidente eleito foi João Goulart, que concorria pela chapa de Henrique
                                                        Teixeira Lott. Com isso, o presidente Jânio Quadros era da UDN, e o vice João Goulart era do PTB. A realização de eleições presidenciais no Brasil foi
                                                        interrompida novamente quando os militares tomaram o poder com o golpe de 1964. As eleições diretas para presidente foram abolidas no país com o decreto do
                                                        Ato Institucional nº 2 em 27 de outubro de 1965. Com isso, todos os “presidentes” desse período foram eleitos indiretamente.
                                                </p>
                                        </div>
                                        <div className="Q44">

                                                <div className="Qf4"><img className="ja" src="https://live.staticflickr.com/7320/12745267283_25c3f0a631_b.jpg" alt="" title="Diretas Já" /></div>
                                                <figcaption>Comício das “Diretas Já” organizado em São Paulo em 1984. Essa campanha foi o símbolo brasileiro pelo direito ao voto. (Créditos: FGV/CPDOC)</figcaption>

                                        </div>

                                        <div className="Q444">
                                                <p>Durante o governo de Sarney, foi elaborada e promulgada a Constituição de 1988, a atual Constituição do Brasil. Ela regulou o funcionamento do sistema
                                                        eleitoral que está em vigência até hoje. Em 1997, o sistema eleitoral foi aprimorado com a Lei das Eleições. De 1988 para cá, aconteceram eleições
                                                        presidenciais nos seguintes anos:</p>
                                                <div className="Qf5"><img className="tab2" src={tab2} alt="" /></div>
                                        </div>
                                </div>



                                <div className="Principal4">
                                        <div className="Q4">
                                                <h2 id="02" className="Ttulo2">O primeiro presidente do Brasil</h2>
                                                <p class="Text4" >Deodoro da Fonseca (1827-1892) foi o primeiro presidente a governar o país depois do golpe de Estado republicano que deu início à fase do Brasil República.
                                                        O fato ocorreu em 15 de novembro de 1889 pelas mãos do Exército. Escolhido de forma indireta, ou seja, sem o apoio popular, Deodoro governou o Brasil por
                                                        dois anos, pois em 1891 renunciou. Sua saída se deu por conta da dificuldade de governar frente à grande instabilidade que tomou conta do país, recém-saído da monarquia.
                                                        Assim, ele dá lugar ao vice Floriano Peixoto (1839-1895), que termina de consolidar o novo regime. Deodoro da Fonseca nasceu no estado de Alagoas em 5 de agosto de 1827.
                                                        Seu pai era integrante do exército e incentivou os sete filhos a seguirem a mesma carreira. Assim, aos 16 anos, Deodoro inicia os estudos para se tornar militar e em 1847 finaliza
                                                        o curso de Artilharia no Colégio Militar do Rio de Janeiro. Com o cargo de segundo-tenente, ajudou a reprimir a Revolução Praieira em Pernambuco em 1849. Mais tarde, em 1856 foi nomeado capitão.
                                                        Assim, seguiu subindo de posto, até que em 1884 foi nomeado marechal, por isso é também conhecido como Marechal Deodoro da Fonseca.
                                                        Sua vida na política durou pouco tempo e foi marcada por conflitos políticos e econômicos. Marechal Deodoro faleceu aos 65 anos em 1892 no dia 23 de agosto, por conta de problemas respiratórios.
                                                </p>
                                        </div>
                                        <div className="Q44">
                                                <div className="Qf4"><img class="de" src="https://s.ebiografia.com/img/de/od/deodoro_da_fonseca_bernardelli_c.jpg" alt="" title="Deodoro da Fonseca" /></div>
                                                <figcaption>Retrato de Deodoro da Fonseca feito pelos irmãos Bernardelli.</figcaption>
                                        </div>

                                </div>

                                <footer className="barra1"><a className="navb1" href="/homePage"><button className="btao1">voltar Para Home</button></a></footer>
                        </body>

                </div >
        );
}
export default Historia;