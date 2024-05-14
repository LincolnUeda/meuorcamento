import styles from './Grid.module.css'
import {Link} from 'react-router-dom'


export default function NovoItem(){
    return(
        <Link to="/novoorcamento">
            <div className={styles.novo_item}>
            
                <p>+</p>
            </div>      
        </Link> 

    )
}