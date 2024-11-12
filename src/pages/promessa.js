import { Container } from "react-bootstrap";
import Footer from "./components/footer";
import Menu from "./components/navbar";
import { useEffect, useState } from "react";

export default function Promessa() {
    const [divida, setDivida] = useState("")
    useEffect(() => {
        setTimeout(() => {
        document.title = "Minha Promessa"
        setDivida(saoLonguinho("da vida"))
        }, 4000);
    })
        
    return <>
    <Menu/>
    <Container>
        Promessa {(divida=== "" ? <img src="anagif.gif" width={60} height={60}/> : divida)}
    </Container>
    <Footer/>
    </>
}

function saoLonguinho(texto){
    setTimeout(()=>{
        return (texto)
    },2000)
}
