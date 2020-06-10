import React, { Component } from 'react';
import './Lista.css'

const user = [{
  nome: 'daniel',
  profissao: 'estudante'
  },
  {
  nome: 'jeferson',
  profissao: 'programador'
  }
]

export default class Lista extends Component{
    state = {
        user
      }
    render(){
        let rows = []
        for(let i=0; i<user.length; i++){
          rows.push( 
            <li>
              {this.state.user[i].nome} é {this.state.user[i].profissao}
            </li>
          )
        }
        return (
          <>
          <div className='input'>
              <label htmlFor="nome">Nome:</label>
              <input type='text' placeholder='Nome' id='nome'></input>
              <label htmlFor="profissao">Profissão:</label>
              <input type='text' placeholder='Profissão' id='profissao'></input>

              <button className="btn waves-effect waves-light" type="submit" name="action" onClick= {() => {
                  const userInserted = {
                      nome: document.getElementById('nome').value,
                      profissao: document.getElementById('profissao').value
                  }
                  user.push(userInserted);
                  this.setState(user);

                  document.getElementById('nome').value = ''
                  document.getElementById('profissao').value = ''
              }}>Cadastrar
                  <i className="material-icons right">send</i>
              </button>
          </div>

          {/* modificar depois para deixar como tabela 
              implementar remoção de usuário
          */}
          <div>
            <ul>
              {rows}
            </ul>
          </div>
          </>

      )
    }
}