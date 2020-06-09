import React, { Component } from 'react';
export const user = [{
  nome: 'daniel',
  profissao: 'estudante'
  },
  {
  nome: 'jeferson',
  profissao: 'programador'}
];

export default class Lista extends Component{
    render(){
        let rows = []
        for(let i=0; i<user.length; i++){
          rows.push( 
            <li>
              {user[i].nome} é {user[i].profissao}
            </li>
          )
        }
        return (
          <div>
            <ul>
              {rows}
            </ul>
          </div>
      )
    }
}