import styles from './Projeto.module.css'
import { useParams } from 'react-router-dom'
import {useState, useEffect} from 'react'
import Loading from '../layouts/Loading'
import Container from '../layouts/Container'

function Projeto(){
    const {id} = useParams()
    console.log(id)

    const [project, setProject] = useState([])
    const [showProjectForm, setShowProjectForm] = useState(false)
     
    useEffect(() =>{

        setTimeout(() => {
            fetch(`http://localhost:5000/projects/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            }).then(resp => resp.json())
            .then((data)=>{
                setProject(data)
            })
            .catch(erro => console.log(erro))
            },1500)
    },[id])

    function toogleProjectForm(){
        setShowProjectForm(!showProjectForm)
    }
    return(
        
        <>
        {project.name ? (
        <div className={styles.project_details}>
            <div>
                <div className={styles.details_container}>
                    <h1>Projeto: {project.name}</h1>
                    <button className={styles.btn} onClick={toogleProjectForm}>
                        {!showProjectForm ? 'Editar projeto' : 'Fechar'} 
                    </button>
                    {!showProjectForm ? (
                        <div className={styles.project_info}>
                            <p>
                                <span>Categoria: </span>{project.category.name}
                            </p>
                            <p>
                                <span>Total de Orçamento: </span>R${project.budget}
                            </p>
                            <p>
                                <span>Total Utilizado: </span>R${project.cost}
                            </p>
                        </div>
                    ) : (
                        <div>
                            <p>Detalhes do Projeto</p>
                        </div>
                    )}
                </div>
            
            </div>
        </div>)

         : (<Loading/>)}
        </>
    )
}

export default Projeto