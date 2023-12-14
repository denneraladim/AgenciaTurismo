 import './App.css';
 
 import Footer from "./components/Footer";
import Header from "./components/Header";


export default function App() {
  return (
    <>
     <Header />
     <section className="Container">
      <div className="apresentacao">
        <p>
          Bem Vindo <br/>
          <span>à Nossa Agência</span> <br/>
          Travel
        </p>
        <button className="btn btn-red">
          Saiba Mais
       </button>
      </div>
      <figure>
        <img className="img-home" src="/airplane-blue.svg" alt="imagem de home" />
      </figure>
     </section>
     <Footer />
   </>
  )
}


