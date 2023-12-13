import Banner from "./components/Banner";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Header from "./components/Header";


export default function App() {
  return (
    <>
     <Header />
     <Banner/>
     <Container>
       <h1>Hello World</h1>
       <p>Estou aprendendo React JS</p>
     </Container>
     
     <Footer />
   </>
  )
}


