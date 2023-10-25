import Link from 'next/link'
import PostPages from '../page';

async function loadPosts(id){
    const resp = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = await resp.json()
    return data;


}
 const Page = async({params}) => {
    const post = await loadPosts(params.id);
  return (
        <div>
          <br />
            <Link className="m-4 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" 
            href="/post/"
            >back
            </Link>
            <h2 className='text-1xl m-4'>{post.id}. {" "}{post.title}</h2>
            <p className='text-center-1xl m-4'>{post.body}</p>
            <hr />
        <h2 className='text-1xl m-4'> Other posts</h2>
        <PostPages />
        </div>
  )
}

export default Page;