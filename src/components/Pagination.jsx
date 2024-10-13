import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Pagination = () => {
    const { pageCount, handlePageChange, totalPages } = useContext(AppContext)
    console.log(pageCount)
    function changehandler(event) {
        event.target.value === 'previous' ? handlePageChange(pageCount - 1) : handlePageChange(pageCount + 1)
    }
    return (
        <div>
            {
                pageCount > 1 &&
                <button value="previous" onClick={changehandler}>
                    previous
                </button>
            }

            {
                pageCount < totalPages &&
                <button onClick={changehandler}>
                    Next
                </button>
            }

            <p>
                Page {pageCount} of {totalPages}
            </p>
        </div>
    )
}

export default Pagination