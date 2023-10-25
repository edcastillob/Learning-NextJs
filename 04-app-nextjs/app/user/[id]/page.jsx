import Users from "@/components/users/Users";

async function getUser(id){
  const res = await fetch(`https://reqres.in/api/users/${id}`)
  const data = await res.json();
  return [data.data];
}

const UserPage = async({params}) => {
    const user = await getUser(params.id)
    // console.log(user)
  return (
    <div>
      {
        user.map((u) =>(
          <Users users={user}/>
        ))
      }
    </div>
  )
}

export default UserPage