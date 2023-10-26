'use client';
import Link from 'next/link'

export default function PostsCard({post})  {
  return (
    <div className='bg-gray-950 p-10'>      
    <h3 className='text-xl font-bold mb-4'> {post.id}. {post.title}</h3>
    <p className='text-slate-300'>{post.body}</p>
    <br />
    <Link href={`/post/${post.id}`}>
      <button 
      className='bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"'
      onClick={()=> {}}
      >
        view post
      </button></Link>
    </div>
  )
}

