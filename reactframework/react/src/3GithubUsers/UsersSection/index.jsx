import SingleUserv2 from "./SingleUserv2";  
import users from "./../Users.json";

function UsersSection() {
    const user0 = users[9];
    const user1 = users[10];
    const user2 = users[11];
    console.log(users);
    return <div>
    <SingleUserv2 
    avatr_url={user0.avatar_url}
    login={user0.login}
    url={user0.url}

    />
    <SingleUserv2 
    avatr_url={user1.avatar_url}
    login={user1.login}
    url={user1.url}

    />
    <SingleUserv2 
    avatr_url={user2.avatar_url}
    login={user2.login}
    url={user2.url}

    />

    </div>
}

export default UsersSection;