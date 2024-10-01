import styles from "./Section.module.css"
import setinhaDireita from "../../assets/RightArrow.png"
import setinhaEsquerda from "../../assets/LeftArrow.png"
import Product from "../Product/Product"
import controle from "../../assets/Controle.png"

const Section = ({title, subtitle}) => {
    return(
        <>
            <div className={styles.section}>
                <div className={styles.subtitulo}>
                    <div className={styles.quadradoVermelho}></div>
                    <p>{subtitle}</p>
                </div>
                <div className={styles.linhaHorario}>
                <h2 className={styles.titulo}>{title}</h2>
                    <div className={styles.legendaHorario}>
                        <p className={styles.topicoHorario}>Days</p>
                        <p className={styles.topicoHorario}>Hours</p>
                        <p className={styles.topicoHorario}>Minutes</p>
                        <p className={styles.topicoHorario}>Seconds</p>
                    </div>
                    <div className={styles.setinhas}>
                        <img src={setinhaEsquerda} alt=""/>
                        <img src={setinhaDireita} alt="" />
                    </div>
                </div>
                    <div className={styles.horario}>
                        <h1 className={styles.numeroHorario}>03</h1>
                        <h1 className ={styles.doisPontosHorario}>:</h1>
                        <h1 className={styles.numeroHorario}>23</h1>
                        <h1 className ={styles.doisPontosHorario}>:</h1>
                        <h1 className={styles.  numeroHorario} >19</h1>
                        <h1 className ={styles.doisPontosHorario}>:</h1>
                        <h1 className={styles.numeroHorario}>56</h1>
                    </div>
            </div>
            <div className={styles.produtos}>
                <Product nomeProduto="HAVIT HV-G92 Gamepad" preco="120" foto={controle} existeCarrinho="0" existeDesconto="0" desconto="40" precoDesconto="160" quantEstrelas="3"/>
            </div>
            
        </>
    )
}

export default Section