import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Pagination = () => {
    const { pageCount, handlePageChange, totalPages } = useContext(AppContext)
    console.log(pageCount)
    function changehandler(event) {
        event.target.value === 'previous' ? handlePageChange(pageCount - 1) : handlePageChange(pageCount + 1)
    }
    return (
        <div className='w-full flex justify-center border-2 shadow-lg fixed bottom-0 py-2 bg-white'>
            <div className='w-11/12 max-w-[600px] flex justify-between items-center px-4'>
                <div className='flex gap-x-1'>
                    {
                        pageCount > 1 &&
                        <button value="previous" onClick={changehandler} className='rounded-md border-2 px-4 py-1'>
                            previous
                        </button>
                    }

                    {
                        pageCount < totalPages &&
                        <button onClick={changehandler} className='rounded-md border-2 px-4 py-1'>
                            Next
                        </button>
                    }
                </div>

                <p className='font-bold text-sm'>
                    Page {pageCount} of {totalPages}
                </p>
            </div>
        </div>
    )
}

export default Pagination