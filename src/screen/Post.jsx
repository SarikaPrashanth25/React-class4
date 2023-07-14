import React from 'react'

function Post(props) {
    return (
        <div className="col-md-6 col-lg-4 col-sm-12 mt-2 mb-2">
            <div className="card">
                <div className="card-header">
                    <h6 className="text-success"> { props.id } { props.title } </h6>
                </div>
                <div className="card-body">
                    <p className="text-secondary">
                        { props.body }
                    </p>
                </div>
                <div className="card-footer">
                    <p>
                        <strong>Group: </strong> { props.userId }
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Post