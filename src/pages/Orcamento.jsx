import { useParams } from 'react-router-dom'
import styles from './Orcamento.module.css'
import { useState, useEffect } from 'react';



export default function Orcamento(){
    const {cod} = useParams();
    const [orcamento,setOrcamento] = useState({})
    var vardisabled = (cod ? true : false)
   
    
    function HandleChange(e){
        setOrcamento({...orcamento,[e.target.name]:e.target.value})
    }


    const submit = (e)=>{
        e.preventDefault()
        var tipo = (cod ? 'UPD': 'INS')
        CreateFetch(orcamento,cod,tipo)
        history.back()
    }

    const Deletar = (e)=>{
        e.preventDefault()
        CreateFetch(orcamento,cod,'DLT')
        history.back()
    }


    useEffect(()=>{
        if (cod > 0){
            fetch(`http://localhost:5000/orcamentos/${cod}`,{method:'GET', headers: {'Content-Type': 'application/json'}}
            ).then((resp)=>resp.json())
            .then((data)=>{setOrcamento(data) })
            .catch((err)=>console.log(err))
        }else{
            fetch(`http://localhost:5000/orcamentos/`,{method:'GET', headers: {'Content-Type': 'application/json'}}
            ).then((resp)=>resp.json())
            .then((data)=>{
                var idx = data.length-1
                var newcod = parseInt(data[idx].id)
                newcod += 1
                console.log(`indice:${idx}`)
                console.log(data[idx].id)
                setOrcamento({...orcamento,id:newcod.toString()})
            
            })
            .catch((err)=>console.log(err))


        }},[])
    

    return (
        

        <div >
            <form  onSubmit={submit} className={styles.form_orcamento}>
                <div className={styles.linha1}>
                    <div>
                        
                        <label htmlFor="id">Código</label><br/>
                        <input type="number" name="id" value={orcamento.id} onChange={HandleChange} disabled={vardisabled}/><br/>
                    </div>
                    <div>
                        <label htmlFor="status">Status</label><br/>
                        <select name="status" onChange={HandleChange} value={orcamento.status}> 
                            <option defaultValue value="A">Análise</option>  
                            <option value="B">Aprovado</option>  
                            <option value="C">Rejeitado</option>    
                        </select> <br/>
                    </div>
                </div>

                <div className={styles.linha}>
                    <label htmlFor="titulo">Título</label><br/>
                    <input type="text" name="titulo" style={{width:'100%'}} maxLength={20} onChange={HandleChange} value={orcamento.titulo}/><br/>
                </div>

                <div className={styles.linha}>
                    <label htmlFor="descricao">Descrição</label><br/>
                    <textarea name="descricao" style={{width:'100%', resize:'none'}} rows={4} cols={50} maxLength={200} onChange={HandleChange} value={orcamento.descricao}/><br/>
                </div>
                
                <div style={{display:'flex', justifyContent:'space-between'}}>
                    <input className="btn_geral" type="submit" name="btnsalvar" value="Salvar"/>
                    {cod &&
                    <input className="btn_geral" type="button" name="btndelete" value="Excluir" onClick={Deletar}/>
                    
                    }
                    <input className="btn_geral" type="button" name="btnvoltar" value="Voltar" onClick={()=>history.back()}/>
                </div>
            </form>
        </div>
    )
}


function CreateFetch(orcamento, cod, tipo){
    var url
    var met
    
    if (cod > 0){
        url = `http://localhost:5000/orcamentos/${cod}`
    }else{
       url = 'http://localhost:5000/orcamentos'
    }

    switch (tipo){
        case 'INS':
            met = 'POST' 
            break
        case 'UPD':
            met = 'PATCH'
            break
        case 'DLT':
            met = 'DELETE'    
            break 
    }


    var metodo = {
        method:met,
        headers: {'Content-Type': 'application/json'}, 
        body:JSON.stringify(orcamento)
    }

    fetch(url,metodo).then((resp)=>resp.json()).catch((err)=>console.log(err))
}
