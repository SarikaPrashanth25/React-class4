import React, { useState } from 'react'

/* const arrow functional component */
const Ex1 = (props) => {
    // const [state,handler] = useState(initial value)

    // state is internal variable -> state is private to component
    const [x,setX] = useState(1) // mutable states

    const[title,setTitle] = useState('Welcome to state')

    const[view,setView] = useState(false)

    const[users,setUsers] = useState(['Prashu','Pacchi','Sarika'])

    const[emp,setEmp] = useState({
        name: 'Sarika',
        email: 'sarika@gmail.com'
    })

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h4 className="display-4 text-warning">useState Hook</h4>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <h1 className="text-success"> x = {x} </h1>
                    <hr />
                    <h4 className="text-warning"> { title } </h4>
                    <hr />
                    <h4 className={ view ? "text-success": "text-danger"}>
                        view = { view ? "Say True" : "Say False"}
                    </h4>
                    <hr />

                    <ul className="list-group">
                        {
                            users.map((item,index) => {
                                return (
                                    <li className="list-group-item" key={index}> { item } </li>
                                )
                            })
                        }
                    </ul>
                    <hr />
                    <h4 className="text-info"> { emp.name } { emp.email } </h4>
                </div>
            </div>
        </div>
    )
}

export default Ex1