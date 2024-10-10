import {Container} from "react-bootstrap";

export default function Footer(){
    return <>
    <Container clasName="position-button bottom-0 start-50">
        <footer className="px-3 text-light bg-dark rounded">
            <ul className="nav justify-content-center border-bottom pb- mb-2">
                <li className="nav-item">Diciplina de Frameworks2</li>
            </ul>
            <p className="text-center">&copy; 2024 IFMS</p>
        </footer>
    </Container>
    </>
}