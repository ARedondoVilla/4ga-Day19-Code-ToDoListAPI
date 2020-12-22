import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store";

export default function(props) {
    const { store, actions } = useContext(Context);
    const [ task, setTask ] = useState("");

    
    useEffect(() => {
        actions.setToDoList(store.todos)
    }, [store.todos])

    useEffect(() => {
        actions.getToDoList()
    }, [])

    function eventAddLabel(event) {
        if (task == "") {
            return
        }
        if (event.key === "Enter") {
            actions.addLabel(task);
            setTask("")
        }
    }

    return (
        <div className="container">
            <div className="card mt-4">
                <div className="card-header text-center" id="title-card">
                    <h1>To Do List with API Rest</h1>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <input className="form-control form-control-lg" type="text" placeholder="New Task" value={task} onChange={(event) => setTask(event.target.value)} onKeyPress={eventAddLabel}></input>
                    </li>
                    {store.todos.map((item, index) => {  
                        return (
                        <li className="list-group-item" key={index}>
                            {item.label} 
                            <button  type="button" className="close" aria-label="Close" onClick={(event) => actions.deleteLabel(item.id)}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </li>
                    )})}
                </ul>
            </div>
        </div>
    )
}