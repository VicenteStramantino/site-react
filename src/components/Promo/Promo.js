import styles from "./Promo.module.css"

function Promo(props){
    return(
        <div className={styles.promotion}>
        <p className={styles.desconto}>{props.texto}
        <a href="" className={styles.shop}>Shop Now</a>
        </p>
        <select className={styles.dropdown} name="" id="">
        <option className={styles.opcao} value="english">English</option>
        <option className={styles.opcao} value="portuguese">Portuguese</option>
        </select>
    </div>
    )
}

export default Promo