import SingleUserv2 from "./SingleUserv2";  
import users from "./../Users.json";

function UsersSection() {
    function toMap(item, index){
        return (
            <SingleUserv2 
            key={item.id}
            avatar_url={item.avatar_url}
            login={item.login}
            url={item.url}
            />
        )
       
    }

    return <div className="flex flex-wrap">{users.map(toMap)}</div>
}

export default UsersSection;