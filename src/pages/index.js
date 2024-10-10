import Menu from "./componentes/navbar";
import Footer from "./componentes/footer";
import {Container} from "react-bootstrap";

export default function Index(){
  return <>
  <Menu/>
  <Container>
  <h1>Olá turma 6V</h1>
  </Container>
  <Footer/>
  </>
}