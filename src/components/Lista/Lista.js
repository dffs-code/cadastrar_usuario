import React, { Component } from 'react';
import './Lista.css'

const user = [{
  nome: 'Daniel',
  profissao: 'Estudante'
  },
  {
  nome: 'Jeferson',
  profissao: 'Programador'
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
            <tr key={i}>
              <th>{this.state.user[i].nome}</th>
              <th>{this.state.user[i].profissao}</th>
              <th>
                <button className='delete' onClick={()=>{
                  user.splice((i-2), 1)
                  this.setState(user)
                }}>
                  <i className='small material-icons'>delete</i>
                </button>
              </th>
            </tr>
          )
        }
        return (
          <div className='main'>
            <div className='input'>
                <label htmlFor="nome">Nome:</label>
                <input type='text' placeholder='Nome' id='nome'></input>
                <label htmlFor="profissao">Profissão:</label>
                <input type='text' placeholder='Profissão' id='profissao'></input>

                <button className="btn waves-effect waves-light" type="submit" name="action" onClick= {() => {
                  if(document.getElementById('nome').value === '' ||
                  document.getElementById('profissao').value === ''){
                    alert('Preencha todos os campos')
                  }else{
                    const userInserted = {
                        nome: document.getElementById('nome').value,
                        profissao: document.getElementById('profissao').value
                    }
                    user.push(userInserted);
                    this.setState(user);

                    document.getElementById('nome').value = ''
                    document.getElementById('profissao').value = ''
                    }
                }}>Cadastrar
                    <i className="material-icons right">send</i>
                </button>
            </div>
            <div className='lista z-depth-2'>
              <table>
                <thead>
                  <tr>
                    <th>NOME</th>
                    <th>PROFISSÃO</th>
                    <th>AÇÃO</th>
                  </tr>
                </thead>
                <tbody className='corpo'>
                  {rows}
                </tbody>
              </table>
            </div>
          </div>

      )
    }
}