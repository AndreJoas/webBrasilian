import React from "react";
import "./styles.css";
import hist from "../imagem/historia.png"
import denucia from "../imagem/denuncie.png";
import censi from "../imagem/censitario.png";
import sabia from "../imagem/sabia.png";
import urn1 from "../imagem/urnac.jpeg";
import urn2 from "../imagem/urnaS.png";



export default function Index() {
    return (

        <div>
            <body className="backG">
                <header className="barra1"><a className="navb1" href="/homePage"><button className="btao1">voltar Para Home</button></a></header>
                <div className="cabeça">
                    <div className="D11"><h1 className="TituloSaberMais">Vamos Entender Melhor</h1></div>
                </div>

                <div className="cardP1">
                    <div className="Qu1">
                        <h2 id="menu" className="Titulo0">Você Sabia?</h2>
                        <ul className="listSaberMais">
                            <li><a href="/Entender" className="il">Voto Feminino no Brasil</a></li>
                            <li><a href="/Entender" className="il">Quem Pode Votar</a></li>
                            <li><a href="/Entender" className="il">Quem Pode Ser Eleito</a></li>
                            <li><a href="/Entender" className="il">Eleições Indiretas</a></li>
                            <li><a href="#05 " className="il">Pequena Historia das Eleições Diretas</a></li>
                            <li><a href="#06 " className="il">Voto Censitario</a></li>
                            <li><a href="#07" className="il">Voto Eletronico</a></li>
                            <li><a href="#08" className="il">Compra de Votos</a></li>
                            <li><a href="#09" className="il">Como Denunciar Crimes Eleitorais</a></li>
                        </ul>
                    </div>

                    <div class="Qu11">
                        <div className="cardft"><img className="saber" src={sabia} /></div>
                    </div>
                </div>
                <div className="cardP6">
                    <div className="Qu15">
                        <h2 id="05" className="TituloSaberMais2">Pequena Historia das Eleições Diretas</h2>
                    </div>
                    <div className="cardft2"><img className="histo" src={hist} alt="" /> </div>
                </div>


                <div className="volta4"><a href="#menu">Voltar ao menu</a></div>


                <div className="cardP7">
                    <div className="Qu1">
                        <div className="Titu9"><h2 id="06" className="TituloSaberMais3">Voto Censitário</h2></div>
                        <p className="Text16">O Voto censitário era a concessão do direito do voto apenas àqueles cidadãos que possuíam certos
                            critérios que comprovassem uma situação financeira satisfatória. Desse modo, os cidadãos eram
                            classificados em ativos – que pagavam impostos- e passivos que tinham uma renda baixa. Apenas os ativos
                            tinham o direito de votar.

                            Na época colonial, só podiam votar (e ser votados) nobres, burocratas, militares, comerciantes
                            ricos,senhores de engenho e homens de posses, mesmo analfabetos. Em 25 de março de 1824, D. Pedro I
                            outorgou aprimeira Constituição brasileira e estabeleceu o voto censitário. O processo eleitoral seria
                            realizado emdois turnos: eleições primárias, para a formação de um colégio eleitoral que, nas eleições
                            secundárias,elegeria os senadores, deputados e membros do Conselho da Província. Só o alcaide-mor,
                            espécie deprefeito, era indicado pelo rei.

                            Hoje, diferente daquela época, o direito de voto é universal, independente de renda, raça ou religião,
                            que é mais democrático. O voto no Brasil é obrigatório e um direito de todo cidadão brasileiro acima d16
                            anos.</p>
                    </div>
                    <div className="cardft2">
                        <div className="cardft7"><img className="censi" src={censi} alt="" /></div>
                    </div>
                </div>
                <div className="volta4"><a href="#menu">Voltar ao menu</a></div>


                <div className="cardP8">
                    <div className="Qu12">
                        <div className="Titu10"><h2 id="07" className="TituloSaberMais4">Voto Eletrônico</h2></div>
                        <p className="Text16"> Na gestão do Ministro Carlos Velloso, em 1995, iniciou-se a informatização do voto. Um grupo de juristas
                            e técnicos apresentaram um protótipo de urna eletrônica, dando início ao trabalho que contou com a
                            colaboração de especialistas em informática, eletrônica e comunicações da Justiça Eleitoral, das Forças
                            Armadas, do Ministério da Ciência e Tecnologia e do Ministério das Comunicações.</p>
                    </div>
                    <div className="cardP9">
                        <div className="cardft7"> <img className="una" src={urn1}></img></div>
                        <p className="Text16">A primeira votação eletrônica no Brasil ocorreu em 1996, sob a presidência do Ministro Marco Aurélio
                            Mendes de Farias Mello. Na época, um terço do eleitorado votou nas urnas eletrônicas. Nas eleições de
                            1998, votaram, eletronicamente, dois terços dos eleitores. Finalmente, no ano 2000, o projeto foi
                            implementado em sua totalidade, ocasião em que todo eleitorado votou por meio eletrônico. Em 2006,
                            votaram, eletronicamente, cerca de cento e vinte e cinco milhões de brasileiros.</p>
                    </div>
                </div>
                <div className="volta4"><a href="#menu">Voltar ao menu</a></div>

                <div className="Titu10"><h2 id="08" className="TituloSaberMais5">Compra de Votos</h2></div>
                <div className="cardP11">
                    <div className="Qu13">
                        <p className="Text17">
                            Cada brasileiro é responsável pelo seu voto. Quando opta por um candidato que compra votos, está
                            elegendo um corrupto. Se ele faz isso antes de ocupar o cargo, imagina o que fará com seu dinheiro, o
                            dinheiro público, após ser eleito?
                            Pense bem antes de votar, porque depois pode ser tarde demais. Se nosso dinheiro, ao invés de ser
                            usadoem obras para a melhoria de instalações de hospitais, de saneamento básico ou de segurança, for
                            desviado para interesse particular do político eleito, parte da responsabilidade será nossa.
                        </p>
                        <div className="Qu14">
                            <p className="Text18">Apesar de proibida, a compra de votos é muito comum em todas as regiões do Brasil. Os candidatos, perto
                                das eleições, oferecem cestas básicas, materiais de construção, dentaduras, óculos, passagens de ônibus,
                                presentes, entre outros tantos benefícios. Infelizmente, isso acontece mais do que deveria e é nosso
                                dever combater essa situação.</p>
                            <div className="do"><strong className="olho">Vamos Ficar de Olho!</strong></div>
                        </div>
                    </div>
                </div>
                <div className="volta4"><a href="#menu">Voltar ao Menu</a></div>

                <div className="cardP8">
                    <div className="Qu12">
                        <div className="Titu10"><h2 id="09" className="TituloSaberMais4">Como Denunciar Crimes Eleitorais</h2></div>
                        <p className="Text16">Se você tiver conhecimento de algum crime eleitoral, pode denunciar o fato. Você não precisa ter recebido
                            qualquer benefício, basta que o candidato ou alguém que trabalhe para ele tenha lhe oferecido alguma
                            vantagem em troca do seu voto.</p>
                    </div>

                    <div className="Qu22">
                        <div className="cardft7"><img  className="denu"src={denucia} alt="" /></div>
                        <h3 className="n"> Não Tenha Medo </h3>
                        <p className="Text16">Sua identidade será mantida em sigilo, caso você queira assim.</p>
                    </div>
                </div>
                <div className="volta4"><a href="#menu">Voltar ao Menu</a></div>
                <header className="barra1"><a className="navb1" href="/homePage"><button className="btao1">voltar Para Home</button></a></header>

            </body>
        </div>

    )
}