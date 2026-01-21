

function SingleUser() {
    const user = {
   "login": "ivey",
    "id": 6,
    "node_id": "MDQ6VXNlcjY=",
    "avatar_url": "https://avatars.githubusercontent.com/u/6?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/ivey",
    "html_url": "https://github.com/ivey",
    "followers_url": "https://api.github.com/users/ivey/followers",
    "following_url": "https://api.github.com/users/ivey/following{/other_user}",
    "gists_url": "https://api.github.com/users/ivey/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/ivey/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/ivey/subscriptions",
    "organizations_url": "https://api.github.com/users/ivey/orgs",
    "repos_url": "https://api.github.com/users/ivey/repos",
    "events_url": "https://api.github.com/users/ivey/events{/privacy}",
    "received_events_url": "https://api.github.com/users/ivey/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false
};

console.log(user.avatar_url);
console.log(user.login);
console.log(user.url);


return (
        <div>
            <div >
                <img src={user.avatar_url} />
            </div>
            <ul>
                <li>Name <b>{user.login}</b></li>
                <li>
                    Url <b> {user.url}</b>
                </li>
            </ul>

        </div>
    )
}

export default SingleUser;
