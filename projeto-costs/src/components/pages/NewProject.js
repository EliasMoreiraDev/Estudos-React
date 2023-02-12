import styles from './NewProject.module.css'

import ProjectForm from '../project/ProjectForm'

function NewProject(){
    return(
        <div className={styles.caixa_newProject}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <ProjectForm textobtn='Criar projeto'/>
        </div>
    )
}

export default NewProject