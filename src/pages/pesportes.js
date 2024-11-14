import { Container } from "react-bootstrap";
import Menu from "./components/navbar";
import Footer from "./components/footer";
import CardProd from "./cardprod";

export default function Pesportes() {
    return <>
        <Menu/>
        <Container className="border border-2 rounded border-primary col-sm-6 text-center">
            LISTA DE PRODUTOS DE Esportes
        </Container>
        <Container>
            <div className="row">
            <CardProd titulo={"Bola de Voley"} descricao={"Bola de voley"} preco={99.90}/>
            <CardProd titulo={"Bola de Futebol"} descricao={"Bola de futebol"} preco={199.90}/>
            <CardProd titulo={"Bola de Tênis"} descricao={"Bola de tênis"} preco={399.90}/>
            </div>
        </Container>
        <Footer>
        </Footer>
    </>
}