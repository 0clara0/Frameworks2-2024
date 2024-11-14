export default function CardProd(props) {
    return <>
    <div class="col-sm-6 mb-3 mb-sm-0">
        <div class="card">
        <div class="card-body">
            <h5 class="card-title">{props.titulo}</h5>
            <p class="card-text">{props.descricao}</p>
            <a href="#" class="btn btn-primary">{props.preco}</a>
        </div>
        </div>
    </div>
    </>
}