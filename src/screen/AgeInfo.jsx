import React, { memo } from 'react'

const AgeInfo = memo((props) => {
    return (
        <div className="row">
            <div className="col-md-12">
                <h4 className="text-pimary">AgeInfo</h4>
                <h5 className="text-success"> { props.info.result } </h5>
            </div>
        </div>
    )
})

export default AgeInfo