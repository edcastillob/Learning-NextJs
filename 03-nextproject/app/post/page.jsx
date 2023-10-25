import PostsCard from "@/components/post/PostsCard";

async function loadPosts(){
    const resp = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await resp.json()
    return data;
}

export default  async function PostPages() {
    
    const posts = await loadPosts();    
  return (
    <div>
        {
            posts.map((post) => (
               <PostsCard post= {post} key={post.id}/>
            ))
        }
    </div>
  )
}
