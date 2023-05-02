import './Botao.css';

const Botao = (props) => {
    return (
        <button className="botao">
            {props.children}
            Criar card
        </button>
    )
}

export default Botao