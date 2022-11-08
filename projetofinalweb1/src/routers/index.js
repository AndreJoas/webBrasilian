import React from "react";
import { Routes,Route } from "react-router-dom";
import { Home, Quiz, Entender,Jogo,History,Dados,HistoriaPt2} from "../pages/index";

export default  function Index(){
    return(
        <Routes>
            <Route index element={<Home/>}/>
                <Route path="homePage" element={<Home/>}/>
                <Route path="Quiz" element={<Quiz/>}/>
                <Route path="Jogo" element={<Jogo/>}/>
                <Route path="Historia" element={<History/>}/>
                <Route path="Dados" element={<Dados/>}/>
                <Route path="Entender" element={<Entender/>}/>
                <Route path="Historia2" element={<HistoriaPt2/>}/> 
      </Routes>
    );
}