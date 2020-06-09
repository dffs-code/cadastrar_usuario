import React, { Component } from 'react';
import './Input.css'
import { user } from '../Lista/Lista'

export default class Input extends Component{
    
    render(){
        return (
            <>
                <div className='input'>
                    <label htmlFor="nome">Nome:</label>
                    <input type='text' placeholder='Nome' id='nome'></input>
                    <label htmlFor="profissao">Profissão:</label>
                    <input type='text' placeholder='Profissão' id='profissao'></input>

                    <button className="btn waves-effect waves-light" type="submit" name="action" onClick= {() => {
                        const nome = document.getElementById('nome').value;
                        const profissao = document.getElementById('profissao').value
                        const userInserted = {
                            nome,
                            profissao
                        }
                        user.push(userInserted)
                        console.log(user)
                    }}>Cadastrar
                        <i className="material-icons right">send</i>
                    </button>
                </div>
                </>
        )
    }    
}