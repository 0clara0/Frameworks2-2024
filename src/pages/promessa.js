import { Container } from "react-bootstrap";
import Footer from "./components/footer";
import Menu from "./components/navbar";
import { useEffect, useState } from "react";

export default function Promessa() {
    const [divida, setDivida] = useState("")
    useEffect(() => {
        setTimeout(() => {
        document.title = "Minha Promessa"
        setDivida("da minha vida")
        }, 4000);
    })
        
    return <>
    <Menu/>
    <Container>
        Promessa {(divida=== "" ? "<carregador>" : divida)}
    </Container>
    <Footer/>
    </>
}

function saoLonguinho(texto){
    setTimeout((
        
    ))
}
