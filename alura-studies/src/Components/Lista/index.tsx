import React from "react";
import './style.scss';

function Lista(){
    const tarefas =[{
        tarefas: 'React',
        tempo: '02:00:00'
    }, {
        tarefas: 'Javascript',
        tempo: '01:00:00'
    }, {
        tarefas: 'Typescript',
        tempo: '03:00:00'
    }]
    return( 
        <aside className="listaTarefas">
            <h2> Estudos do Dia </h2>
            <ul>
                {tarefas.map((item, index) => (
                    <li key={index}>
                        <h3> {item.tarefas} </h3>
                        <span> {item.tempo} </span>
                    </li>
                ))}
            </ul>
        </aside>
    )
}

export  default Lista;
