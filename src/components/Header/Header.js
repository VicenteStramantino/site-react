import styles from "../Header/Header.module.css"
import Promo from "../Promo/Promo"  
import lupa from '../../assets/lupa.png'
// import wish from "../../assets/wishlist.png"
 
export default function Header () {
    return <header>
        <Promo texto="Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!"/>
        <div className={styles.cabecalho}>
            <h1>Exclusive</h1>
            <nav>
                <ul className={styles.lista}>
                    <li>Home</li>
                    <li>Contact</li>
                    <li>About</li>
                    <li>Sign up</li>
                </ul>
            </nav>
 
            <div>
                <div className="container">
                    <input type="text" />
                    <img src={lupa} alt="" />
                </div>
            </div>
        </div>
    </header>
}
 