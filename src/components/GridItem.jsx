import styles from './Grid.module.css'
import {Link} from 'react-router-dom'
export default function GridItem({codigo,titulo, descricao,status}){
    return(
        
       

        <Link to={`/orcamento/${codigo}`}>
            <div className={styles.item}>
                <p className={styles.cabecalho}>{codigo}. {titulo} ({Status(status)})</p>
                <p className={styles.descricao}>{descricao}</p>
            </div>   
        </Link>    

    )
}

function Status(status){
    var statuschar = '';
    switch (status){
        case 'A':
            statuschar = 'Análise';
            break;
        case 'B':
            statuschar = 'Aprovado';
            break;
        case 'C':
            statuschar = 'Rejeitado';  
            break; 
        default: 
            statuschar = '';
        }
        return statuschar;

}