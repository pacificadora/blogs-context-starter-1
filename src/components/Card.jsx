import React from 'react'

const Card = ({ post }) => {
    return (
        <div key={post.id}>
            <p className='font-bold text-xs'>{post.title}</p>
            <p className='text-[10px]'>By <span className='italic'>{post.author}</span> on <span className='underline font-bold'>{post.category}</span></p>
            <p className='text-[10px]'>Posted On {post.date}</p>
            <p className='text-[14px] mt-[5px]'>{post.content}</p>
            <div className='flex gap-x-1'>
                {post.tags.map((tag, index) => {
                    return <span key={index} className='font-bold underline text-[10px] text-blue-500'>{`#${tag} `}</span>
                })}
            </div>
        </div>
    )
}

export default Card