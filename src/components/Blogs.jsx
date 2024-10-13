import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Spinner from './Spinner'
import Card from './Card'

const Blogs = () => {
    const { loading, posts } = useContext(AppContext)
    return (
        <div>
            {
                loading ? (<Spinner></Spinner>) : (
                    posts.length == 0 ? (<div>No Post Available</div>) : (
                        posts.map((post) => (<Card post={post}> </Card>))
                    )
                )
            }
        </div>
    )
}

export default Blogs