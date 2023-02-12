import {useState, useEffect} from 'react'

import styles from './ProjectForm.module.css'
import Input from '../form/Input'
import Select from '../form/Select'
import Submit from '../form/Submit'


function ProjectForm({textobtn}){
 
    const[categories, setCategories] = useState([])
   useEffect(() =>  {
        
        fetch('http://localhost:5000/categories', {
            method: 'GET',
            headers:{
                'Comtent-Type':'aplication/json',
            },
        })
        .then((resp => resp.json()))
        .then((data)=>{
            setCategories(data)
        })
        .catch((erro) => console.log(erro))
    }, [])

    return(
        <form>
            <Input type='text' text='Nome do projeto' placeholder='Insira o nome do projeto' name='nome' />

            <Input type='number' text='Orçamento do projeto' placeholder='Insira o orçamento total' name='nome' />
            
            <Select name='nome_select' text='Selecione a categoria' options={categories}/>
            
            <Submit text={textobtn}/>

        </form>
    )
}
export default ProjectForm