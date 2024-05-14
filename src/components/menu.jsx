import styles from  './menu.module.css'
import {Link} from 'react-router-dom'

function Menu(){

    return (
        <div className={styles.MenuPrincipal}>
            <ul>
            <li className={styles.MenuItem}> <Link to='/'>Home</Link></li>
            <li className={styles.MenuItem}> <Link to='/orcamentos'>Orçamentos</Link></li>
            <li className={styles.MenuItem}> <Link to='/contato'>Contato</Link></li>
            </ul>
        </div>


    )



}

export default Menu