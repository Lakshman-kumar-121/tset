import { useState } from "react";

const List = () => {

    const [todos, settodos] = useState([
        { list: 'go to gym', status: 'pending', id: '1' },
        { list: 'running', status: 'connecting', id: '2' },
        { list: 'walking', status: 'pending', id: '3' }

    ]);

    function delte(abc) {
        var b = todos.filter(item => item.id !== abc);
        settodos(b);
        
    }

    return (
        <div className="todolist">

            <div className="head"><span> list </span> <span> status</span>  <span>close</span></div>
            {todos.map((todo) => (
                <div className="todpreview" key={todo.id}>


                    <span>{todo.list}</span>
                    <button className="ssp">{todo.status}</button>
                    <button className="sdd" onClick={() => { delte(todo.id) }} >delete</button>


                </div>
            ))}
        </div>
    );
}

export default List;