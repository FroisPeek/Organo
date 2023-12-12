import './Formulario.css'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botão'
import { useState } from 'react'


const Formulario = (props) => {
    

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastro({
            nome, cargo, imagem, time
        })
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador!</h2>
                <CampoTexto
                    obrigatorio = {true}
                    label="Nome" 
                    placeholderModificada="Digite seu nome" 
                    valor={nome} 
                    aoAlterado={valor => setNome(valor)}
                />
                
                <CampoTexto 
                    obrigatorio = {true}
                    label="Cargo" 
                    placeholderModificada="Digite seu cargo" 
                    valor={cargo} 
                    aoAlterado={valor => setCargo(valor)}
                />
                
                <CampoTexto 
                    obrigatorio = {true}
                    label="Imagem" 
                    placeholderModificada="Digite o endereço da imagem"
                    valor={imagem} 
                    aoAlterado={valor => setImagem(valor)}
                />
                
                <ListaSuspensa 
                    obrigatorio={true}
                    label="Time" 
                    itens={props.times}
                    placeholderModificada="Informe o time desejado"
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                />

                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario
