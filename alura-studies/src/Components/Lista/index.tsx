import React from "react";
import Item from './item';
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
                    <Item
                        key={index}
                        tarefa={item.tarefas}
                        tempo={item.tempo}
                    />

                ))}
            </ul>
        </aside>
    )
}

export  default Lista;
