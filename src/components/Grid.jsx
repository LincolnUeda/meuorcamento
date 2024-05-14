import styles from './Grid.module.css'
import GridItem from './GridItem'
import NovoItem from './NovoItem'
import { useState,useEffect } from 'react'




export default function Grid(){
        const [Orcs,setOrcs] = useState([])
        
        useEffect(()=>{
            fetch('http://localhost:5000/orcamentos',{method:'GET', headers: {'Content-Type': 'application/json'}}
            ).then((resp)=>resp.json())
            .then((data)=>{setOrcs(data)})
            .catch((err)=>console.log(err))
        },[])
         

    return(
        <>
       
            <div className={styles.grid}>   
                {Orcs.map((orc)=>(
                    <GridItem key={orc.id} codigo={orc.id} titulo={orc.titulo} descricao={orc.descricao} status={orc.status} />
                ))}

                <NovoItem />
            </div>
       
        </>
    )
}