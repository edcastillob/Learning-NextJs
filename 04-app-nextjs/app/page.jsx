import Users from "@/components/users/Users";

async function fetchUsers() {
  const res = await fetch("https://reqres.in/api/users");
  const data = await res.json();
  return data.data;
}

const HomePage = async () => {
  const users = await fetchUsers();

  return (
   <div>
    <Users users = {users}/>
   </div>
  );
};

export default HomePage;
