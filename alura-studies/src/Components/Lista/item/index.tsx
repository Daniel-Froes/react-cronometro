import '../style.scss'

export default function Item({tarefa, tempo } : {tarefa: string, tempo:String}){
    return (
        <li>
        <h3> {tarefa} </h3>
        <span> {tempo} </span>
    </li>
    )
}
