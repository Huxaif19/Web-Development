require('dotenv').config()
const express = require('express');
const app = express()
const port = process.env.PORT;
const githubData = {
        "login": "Huxaif19",
        "id": 144468279,
        "node_id": "U_kgDOCJxpNw",
        "avatar_url": "https://avatars.githubusercontent.com/u/144468279?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/Huxaif19",
        "html_url": "https://github.com/Huxaif19",
        "followers_url": "https://api.github.com/users/Huxaif19/followers",
        "following_url": "https://api.github.com/users/Huxaif19/following{/other_user}",
        "gists_url": "https://api.github.com/users/Huxaif19/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/Huxaif19/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/Huxaif19/subscriptions",
        "organizations_url": "https://api.github.com/users/Huxaif19/orgs",
        "repos_url": "https://api.github.com/users/Huxaif19/repos",
        "events_url": "https://api.github.com/users/Huxaif19/events{/privacy}",
        "received_events_url": "https://api.github.com/users/Huxaif19/received_events",
        "type": "User",
        "site_admin": false,
        "name": "shah Huxaif",
        "company": null,
        "blog": "",
        "location": null,
        "email": null,
        "hireable": null,
        "bio": "# AI MI ENGINEER\r\n## Frontend Developer\r\n",
        "twitter_username": null,
        "public_repos": 7,
        "public_gists": 0,
        "followers": 2,
        "following": 0,
        "created_at": "2023-09-08T15:09:01Z",
        "updated_at": "2024-04-04T08:14:17Z"
}
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/home', (req,res)=>{
    res.send("homePage")
})

app.get('/login', (req,res)=>res.send("<h1>LoginPage</h1>"))

app.get('/github', (req,res)=> res.json(githubData))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
