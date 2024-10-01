
import styles from './App.module.css';
import Promo from '../Promo/Promo'
import Header from '../Header/Header';
import banner from "../../assets/banner.png"
// import Subtitle from "../Subtitle/Subtitle"
import Section from "../Section/Section"

function App() {
  const texto = "Today's"
  const titulo = "Flash Sales"
  return (
    <>
      <Header/>
      <img className={styles.banner} src={banner} alt="" />
      <Section title={titulo} subtitle={texto}/>
    </>
    
  );
}

export default App;
