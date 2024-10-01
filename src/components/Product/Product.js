
import styles from "./Product.module.css"
import coracao from "../../assets/Coracao.png"
import olho from "../../assets/Olho.png"
import Estrela from "../Estrela/Estrela"


const Product = ({nomeProduto, preco, foto, existeCarrinho, existeDesconto, desconto, precoDesconto, quantEstrelas}) =>{
    return(
        <>
        <div className={styles.card}>
            <div className={styles.imagem}>
                {carregaPorcentagemDesconto(existeDesconto, desconto)}
                <div className={styles.divIcones}>
                    <img src={coracao} alt="" className={styles.icones} />
                    <img src={olho} alt="" className={styles.icones}/>
                </div>
                <img src={foto} alt="" className={styles.foto}/>
                {carregarCarrinho(existeCarrinho)}
            </div>
            <div className={styles.texto}>
                <h4>{nomeProduto}</h4>
                <div className={styles.precos}>
                    <p className={styles.preco}>${preco}</p>
                    {carregaPrecoDesconto(existeDesconto, precoDesconto)}
                </div>
            </div>
            {carregarEstrelas(quantEstrelas)}
        </div>
        </>
    )
}

const carregarCarrinho = (existirCarrinho) =>{
    if(existirCarrinho == "1"){
        return (
            <div className={styles.addCart}>Add To Cart</div>
        )
    }
    else{
        return null
    }
}


const carregarEstrelas = (quantEstrelas) =>{
    let arrkkj = []
    for(let i = 0; i < 5; i++){
        if(i < quantEstrelas){
            arrkkj.push(<Estrela fill={"#FFAD33"}/>)
        }else{
            arrkkj.push(<Estrela fill={"#BFBFBF"}/>)
        }
    }
    return(
        
            arrkkj
    )
    
    
}


const carregaPorcentagemDesconto = (existeDesconto, desconto) =>{
    if(existeDesconto == "1"){
        return(
            <div className={styles.divDesconto}>
                <p className={styles.desconto}>-{desconto}%</p>
            </div>
        )
    }
    else{
        return(
            <div className={styles.divDescontoVazia}>
            </div>
        )
    }
}


const carregaPrecoDesconto = (existeDesconto, precoDesconto) => {
    if(existeDesconto == "1"){
        return(
            <p className={styles.precoDesconto}>${precoDesconto}</p>
        )
    }
    else{
        return null
    }
}


export default Product