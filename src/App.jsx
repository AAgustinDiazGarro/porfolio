import { Routes, Route, useLocation } from "react-router-dom";
import { Fragment } from "react";
import Header from "./Componentes/header/header";
import Main from "./Componentes/main/main";
import Footer from "./Componentes/footer/footer";

function App() {
  return (
    <Fragment>
        <Header />
        <Main />
        <Footer />
    </Fragment>
  );
}

export default App;
