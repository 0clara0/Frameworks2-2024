import { Container } from "react-bootstrap";
import Menu from "./components/navbar";
import Footer from "./components/footer";
import CardProd from "./cardprod";

export default function Pesportes({produtos}) {
    return <>
        <Menu/>
        <Container className="border border-2 rounded border-primary col-sm-6 text-center">
            LISTA DE PRODUTOS DE Esportes
        </Container>
        <Container>
            <div className="row row-col-1 row-cols-md-5 g-3">
            {produtos.map(produto=>
                <div key={produto.id}> 
                    <CardProd titulo={produto.titulo} descricao={produto.descricao} preco={produto.preco}/>
                </div>
            )}
            </div>
        </Container>
        <Footer>
        </Footer>
    </>
}
export async function getServerSideProps() {
    const res = await fetch('http://localhost:3000/api/produtos/data')
    const repo = await res.json()
    return { props: { produtos: repo } }
}