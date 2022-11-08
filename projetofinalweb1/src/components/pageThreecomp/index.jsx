import React from "react";
import "./styles.css";
import FusionCharts from 'fusioncharts/core';
import Column2D from 'fusioncharts/viz/column2d';
import FusionTheme from 'fusioncharts/themes/es/fusioncharts.theme.fusion';
import cand from "./img/candidatos.png";
import eleit from "./img/Eleitores.png";
import Mh from "./img/M&h.png";
import QuantCandidaturas from "./img/Qcandidaturas.png";
import Urna from "./img/urnaBrasil.jpg";


FusionCharts.addDep(Column2D)
FusionCharts.addDep(FusionTheme)
///urnas grafico

const urnasData = [{
    "label": "1995",
    "value": "70"
}, {
    "label": "1998",
    "value": "84"
}, {
    "label": "2000",
    "value": "501"
}, {
    "label": "2002",
    "value": "50"
}, {
    "label": "2004",
    "value": "75"
}, {
    "label": "2009",
    "value": "194"
}, {
    "label": "2020",
    "value": "206"
}, {
    "label": "2022",
    "value": "597"
}];
///


setTimeout(() => { //funçao "A cada A cada"
    chartInstance.render();

}, 7000)

const chartConfig = {
    type: 'column2d',
    renderAt: 'chart-container3',
    width: '100%',
    height: '400',
    dataFormat: 'json',
    dataSource: {

        "chart": {
            "caption": "Urnas produzidas ao longo dos anos ",
            "subCaption": "[1996-2022]",
            "xAxisName": "",
            "yAxisName": "Quantidade(Milhares)",
            "numberSuffix": "mil",
            "theme": "gammel",
        },

        "data": urnasData
    }
};
var chartInstance = new FusionCharts(chartConfig);

///GRAFICO ELEITORES

FusionCharts.addDep(Column2D)
FusionCharts.addDep(FusionTheme)


const eleitores = [{
    "label": "2008",
    "value": "123"
}, {
    "label": "2012",
    "value": "136"
}, {
    "label": "2016",
    "value": "149"
}, {
    "label": "2020",
    "value": "147"
}, {
    "label": "2022",
    "value": "155.7"
}]

setTimeout(() => { //funçao "A cada A cada"
    eleitoresInstancia.render();

}, 7000)

const eleitoresConfig = {
    type: 'column2d',
    renderAt: 'chart-container2',
    width: '100%',
    height: '400',
    dataFormat: 'json',
    dataSource: {

        "chart": {
            "caption": "Numero de eleitores ao longo dos anos ",
            "subCaption": "[2008-2020]",
            "xAxisName": "",
            "yAxisName": "Quantidade(Milhoes)",
            "numberSuffix": "M",
            "theme": "gammel",
        },

        "data": eleitores
    }
};

var eleitoresInstancia = new FusionCharts(eleitoresConfig);


////// grafico candidaturas

FusionCharts.addDep(Column2D)
FusionCharts.addDep(FusionTheme)
const candidaturas = [{
    "label": "PSOL",
    "value": "0.930"
}, {
    "label": "PP",
    "value": "1.358"
}, {
    "label": "PTB",
    "value": "1.357"
}, {
    "label": "PC do B",
    "value": "0.223"
},
{
    "label": "PT",
    "value": "1.119"
}, {
    "label": "PL",
    "value": "1.618"
}, {
    "label": "PDT",
    "value": "1.369"
}]

setTimeout(() => { //funçao "A cada A cada"
    candiInstancia.render();

}, 7000)

const candConfig = {
    type: 'column2d',
    renderAt: 'chart-container4',
    width: '100%',
    height: '400',
    dataFormat: 'json',
    dataSource: {

        "chart": {
            "caption": "Partidos com maiores candidatos",
            "subCaption": "2022",
            "xAxisName": "",
            "yAxisName": "Quantidade(Mil)",
            "numberSuffix": "K",
            "theme": "umber",
        },

        "data": candidaturas
    }
};
var candiInstancia = new FusionCharts(candConfig);

/////-----------------------------/////////

//// CADIDATOS 2010

FusionCharts.addDep(Column2D)
FusionCharts.addDep(FusionTheme)

const candidaturas10 = [{
    "label": "PSOL",
    "value": "1.103"
}, {
    "label": "PP",
    "value": "0.906"
},
{
    "label": "PTB",
    "value": "1.125"
}, {
    "label": "PC do B",
    "value": "0.861"
},
{
    "label": "PT",
    "value": "1.402"
}, {
    "label": "PSL",
    "value": "0.838"
}, {
    "label": "PDT",
    "value": "1.113"
}]

setTimeout(() => { //funçao "A cada A cada"
    candiInstancia10.render();

}, 7000)

const candConfig10 = {
    type: 'column2d',
    renderAt: 'chart-container5',
    width: '100%',
    height: '400',
    dataFormat: 'json',
    dataSource: {

        "chart": {
            "caption": "Partidos com maiores candidatos",
            "subCaption": "2010",
            "xAxisName": "",
            "yAxisName": "Quantidade(Mil)",
            "numberSuffix": "K",
            "theme": "umber",
        },

        "data": candidaturas10
    }
};
var candiInstancia10 = new FusionCharts(candConfig10);


export default function Estatísticos() {

    return (

        <div className="backg">
            <div className="textos">
                <div className="d1"><h1 className="titul1">Dados Estatísticos</h1></div>
                <div className="d2"><h2 className="subt">Aqui você verá alguns dados sobre o cenário eleitoral brasileiro</h2></div>
            </div>

            <div className="principal1">
                <div className="q1">
                    <p className="text1">Há 26 anos, a urna eletrônica surgia no Brasil como uma saída para
                        reduzir ao máximo a possibilidade de intervenção humana no processo eleitoral.
                        Passado esse período, a invenção genuinamente brasileira segue sem nenhuma fraude comprovada no currículo,
                        mas continua sendo alvo de controvérsias  — que vão desde a tentativa de tornar obrigatória a
                        impressão de comprovantes do voto até a contestação oficial diante de representantes outros países.</p>

                    <div className="qf1"><img className="urna" src={Urna} /></div>
                </div>
            </div>
            

            <div className="q2">
                <div id="chart-container3">Carregando dados estatísticos</div>
                <p className="text0">Com o passar dos anos o numero de urnas produzidas foi aumentando e se sofisticando,
                    para que não ocorra fraudes durantes as eleições nacionais. Ao/A lado/baixo há um grafico que mostra o
                    quantitativo de urnas ja produzidas desde à sua criação ate a ultima eleição feita no país.</p>
            </div>


            <div className="principal2">
                <div className="q3">
                    <p className="text2">
                        Os eleitores em um pais a certo tempo tem um papel fundamental, que é eleger seu representante democraticamente, e no Brasil
                        isso não é diferente. No pais, a maiores dos eleitores é constituida do genero feminino com 53% ,cerca de 81.9 milhoes de eleitoras, ja de homens
                        é composto de 47% do eleitores brasileiros, aproximadamente 73.7 milhores, dados de acordo com o TSE (Tribunal Superior Eleitoral).
                    </p>
                    <div className="qf3"><img className="mh" src={Mh} /></div>
                </div>
            </div>

            <div className="q4">
                <p className="text3">
                    O grafico ao/a lado/baixo, mostra a evolução na quantidade total de eleitores no Brasil, ao longo dos anos, que em 2008, era composta de 123 milhores,
                    e 14 anos depois é um total de 155.7 milhoes, segundo dados do TSE.
                </p>
                <div id="chart-container2">Carregando dados estatísticos</div>
            </div>




            <div className="principa13">
                <div className="q5">
                    <div className="textos">
                        <p className="text4">O sistema eleitoral brasileiro é composto de diversos partidos, e com o tempo o numero tanto
                            de partidos, quanto principalmente de cadidatos foi aumentando a cada ano, e na ultima eleiçao em 2022 o numero foi de
                            quase 30mil canditados, dentre ele governadores, senadores e para a presidência do país.
                        </p>
                        <p className="text5">Ao/A lado/baixo, o grafico mostra a comparação entre os anos de 2010 e 2022 de candidaturas de alguns, se não ao menos, principais partidos
                            politicos do Brasil</p>
                    </div>
                </div>
                <div className="graphics">
                        <div id="chart-container4">Carregando dados estatísticos3</div>
                        <div id="chart-container5">Carregando dados estatísticos5</div>
                </div>
                <footer className="barra"><a className="navb" href="/homePage"><button className="btao1">voltar Para Home</button></a></footer>
            </div>
        </div >

    );
}

