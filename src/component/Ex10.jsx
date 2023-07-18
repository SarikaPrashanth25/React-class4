import React, { useState, useMemo } from 'react'
import Age from '../screen/Age'
import AgeInfo from '../screen/AgeInfo'

/* 
    useCallback => will return memorized value (state/props) of callback
    useMemo => will return memorized function (method) of callback
*/

function Ex10(props) {
    const [age,setAge] = useState(20)

    const incAge = () => {
        setAge(age+1)
    }

    const prashuAge = useMemo( () => ({
        result: `Prashu age is ${age} years.`
    }), [age])
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h3 className="display-3 text-warning">useMemo</h3>
                </div>
            </div>

            <Age age={age} ageHandler={incAge} />
            <AgeInfo info={prashuAge} />
        </div>

    )
}

export default Ex10