import PostsCard from "@/components/post/PostsCard";
import "./Posts.css"


async function loadPosts(){
    const resp = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await resp.json()
    // await new Promise((resolve) => setTimeout(resolve, 10000))
    return data;
}

export default  async function PostPages() {
    
    const posts = await loadPosts();    
  return (
    <div className="grid">
        {
            posts.map((post) => (
               <PostsCard post= {post} key={post.id}/>
            ))
        }
    </div>
  )
}
