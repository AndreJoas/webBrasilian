import React from "react";
import './styles.css';
import guia from "./GUIAelEIÇOES.jpg";
import entender from "./seLigaEleiçoes.jfif";
import {h2} from "./styles";
import grafico from "./Captura_de_tela_2022-10-29_094807-removebg-preview.png";
import game from "./game1-removebg-preview.png";
import Quizv from "./video";
import casa from "../homeComp/imgIcons/Home.svg";
import flecha from "../homeComp/imgIcons/flecha.svg";
import download from "../homeComp/imgIcons/Download.svg";
import paper from "../homeComp/imgIcons/Paper.svg";
import wallet from "../homeComp/imgIcons/Wallet.svg";

function Homecomponets() {
    return (
                <body className="sitee">
                    <div className="menulat1 justify-content-center navbar navbar-expand-lg">
                        <div className="home">
                            <a className="icon" href="/Historia"><img className="casa" src={casa}></img></a>
                            <h3 className="frase3">Historia</h3>
                        </div>
                        <div className="home">
                            <a className="icon" href="/Entender" ><img className="flecha" src={flecha}></img></a>
                            <h3 className="frase3">Saber +</h3>
                        </div>
                        <div className="home" >
                            <a className="icon" href="/Quiz"><img className="dowm" src={download}></img></a>
                            <h3 className="frase2" >Quiz</h3>
                        </div>
                        <div className="home">
                            <a className="icon" href="" ><img className="paper" src={paper}></img></a>
                            <h3 className="frase2">Jogo</h3>
                        </div>
                        <div className="home">
                            <a className="icon" href="/Dados"><img className="wallet"src={wallet}></img></a>
                            <h3 className="frase1" >Dados Estatísticos</h3>
                        </div>
                    </div>
                    <div className="skatem">
                        <div className="quad1">
                            <div className="textoS1">
                                <h1 className="titu1" >História</h1>
                                <h2 className="texto1" >Sumário:</h2>
                                <div  className="sumario ps-5">
                                    <h2 style={h2}>*Fake News</h2>
                                    <h2 style={h2}>*Eleições presidenciais no Brasil</h2>
                                    <h2 style={h2}>*primeiro presidente do Brasil</h2>
                                    <h2 style={h2}>*Como funciona Atualmente as eleições</h2>
                                    <h2 style={h2}>*História das eleições no mundo</h2>
                                </div>
                            </div>
                            <a href="/Historia"><div className="dImg1"><img className="img1" src={guia}></img></div></a>
                          

                        </div>
                        {/* style="cursor:pointer" */}
                        <div className="quad2">
                            
                            <h2 className="texto2" >Enterder Mais</h2>
                            <a href="/Entender"><div className="dImg2"><img className="img2" src={entender}></img></div></a>
                        </div>
                    </div>
                    <div className="quarteto d-flex justify-content-center">
                        <div className="quad3" >
                            <h2 className="titu2" >Dados Estatísticos</h2>
                            <a href="/Dados"><div  className="dImg3"><img className="ft2 img-fluid" src={grafico} ></img></div></a>
                        </div>
                        <div className="quad4" >
                            <h2 className="titu4" >Jogo</h2>
                            <a  href="/Jogo "><div  className="dImg4"><img className="ft3 img-fluid"  src={game}></img></div></a>
                        </div>
                        <div className="quad5" >
                            <h2 className="titu5">Quiz-Quiz</h2>
                            <div className="dImg5"><Quizv/>
                                <a className="a1" href="/Quiz"><button className="botaoquiz"> GAME ON</button></a>
                            </div>
                           
                        </div>
                
                    </div>
                </body>
            


    );
}
export default Homecomponets;
