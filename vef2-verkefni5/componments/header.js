import styles from '../styles/Home.module.css'

function HeaderComponent() {    
    return (
        <header className={styles.header}>
        <a href= "" >Forsíða</a>
        <a href= "/Innskráning" >Innskráning</a>
        <a href= "/Nýskráning" >Nýskráning</a>  
        </header> 
    )
}
export default HeaderComponent