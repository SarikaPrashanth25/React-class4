import React from 'react'

function Age(props) {
    return (
        <div className="row">
            <div className="col-md-12">
                <h4 className="text-danger">Age = { props.age } </h4>
                <button className="btn btn-success" onClick={props.ageHandler}>Increment Age</button>
            </div>
        </div>
    )
}

export default Age