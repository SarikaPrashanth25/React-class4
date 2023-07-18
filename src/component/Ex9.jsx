import React, { useCallback, useState, useEffect } from 'react'
import Comment from '../screen/Comment'
import ReactPaginate from 'react-paginate'

// API
const URL = "https://jsonplaceholder.typicode.com"
// const Ex9 = (props) => {}
// const Ex9 = function(props) {}

//useCallback will return a memorized version of the callback(function) that only changes if one of the inputs (state/props) has changed.
// state => state input can change through handler functions within the component.
// props => props input can chnage only when the component is rendered.

function Ex9(props) {
    const [comments,setComments] = useState([])

    //offset data
    const [offData,setOffData] = useState([])  // 50 itemPerPage
    const [start,setStart] = useState(0) // starting offset
    const end = start + props.itemPerPage; // ending offset
    const pCount = Math.ceil(comments.length / props.itemPerPage) /* total page count */

    // api call in callback hook
    const getComments = useCallback(() => {
        // async method
        const readComments = async () => {
            fetch(`${URL}/comments`)
            .then(out => out.json())
            .then(res => {
                // console.log(`comments =`, res)
                setComments(res)
            }).catch(err => console.log(err.message))
        }

        readComments() // async method call
    },[])

    useEffect(() => {
        getComments() // callback ref method call
        setOffData(comments.slice(start,end))
    },[comments])

    // handler to change page item
    const handleClick = (e) => {
        // console.log('item =', e.selected);
        let nOffset = Number(e.selected * props.itemPerPage) % comments.length
        setStart(nOffset)
    } 

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h3 className="display-3 text-success">useCallback</h3>
                </div>
            </div>
            <div className="row">
                {
                    offData && offData.map((item,index) => {
                        return (
                            <Comment key={index} {...item} />
                        )
                    })
                }
            </div>

            <div className="row">
                <div className="col-md-12">
                    <ReactPaginate
                        pageCount={pCount}
                        className="pagination"
                        activeClassName="active"
                        activeLinkClassName="active"
                        pageClassName="page-item"
                        pageLinkClassName="page-link"
                        previousClassName="page-item"
                        previousLinkClassName="page-link"
                        nextClassName="page-item"
                        nextLinkClassName="page-link"
                        onPageChange={handleClick}
                    />
                </div>
            </div>
        </div>
    )
}

export default Ex9