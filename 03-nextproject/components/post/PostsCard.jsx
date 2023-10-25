'use client';

export default function PostsCard({post})  {
  return (
    <div>
    <h3>{post.id}. {post.title}</h3>
    <span>{post.body}</span>
    <br /><button onClick={()=> alert('Click')}>click</button>
    </div>
  )
}

