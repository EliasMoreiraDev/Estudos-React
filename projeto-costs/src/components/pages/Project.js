import { useLocation } from "react-router-dom"
import {useState,useEffect} from 'react'

import Message from "../layouts/Message"
import styles from './Project.module.css'
import Container from '../layouts/Container'
import LinkButton from '../layouts/LinkButton'
import ProjectCard from "../project/ProjectCard"

function Project(){

   
        const [projects, setProjects] = useState([])

        const location = useLocation()
        let message = ''
        if(location.state){
            message = location.state.message
        }

        useEffect(() => {

            fetch('http://localhost:5000/projects',{
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(resp => resp.json())
            .then((data) => {
                console.log(data)
                setProjects(data)
            })
            .catch((err) => console.log(err))

        },[])
    return(
        <div className={styles.project_container}>
            <div className={styles.title_container}>
                <h1>Meus projetos</h1>
                <LinkButton to='/newProject' text='Criar Projeto'/>
            </div>
            {message && 
                <Message type='success' msg={message}/>
            }
            <Container customClass='start'>
                {projects.length > 0 &&
                    projects.map((project) => (
                        <ProjectCard name={project.name} id={project.id} budget={project.budget} category={project.category.name} key={project.id}/>
                    ))}
            </Container>
        </div>
    )
}

export default Project