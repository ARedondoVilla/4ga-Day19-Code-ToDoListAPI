import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store";

export default function(props) {
    const { store, actions } = useContext(Context)

    useEffect(() => {
        console.log("Se imprime");
        
        actions.getToDoList()
    }, [])

    return (
        <div className="container">
            <div className="card mt-4">
                <div className="card-header text-center" id="title-card">
                    <h1>To Do List</h1>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <input className="form-control form-control-lg" type="text" placeholder="New Task"></input>
                    </li>
                    {store.todos.map((item, index) => {  
                        return (
                        <li className="list-group-item" key={index}>
                            {item.label} 
                            <button  type="button" className="close" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </li>
                    )})}
                </ul>
            </div>
        </div>
    )
}