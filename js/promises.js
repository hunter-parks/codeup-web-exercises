console.log(" we're making promises, hope we can keep them! :D");


function getLastPushDate (githubUsername) {
    let url = `https://api.github.com/users/${githubUsername}/events`;
    let githubResponse = fetch(url, {headers: {'Authorization': `token ${GITHUB_PAT}`}});
    return githubResponse
        .then((response) =>{
            return response.json();
        })
        .then((githubEventData)=>{
            for (let githubEvent of githubEventData) {
                if (githubEvent.type === "PushEvent") {
                    return new Date(githubEvent.created_at);
                }
            }
        })
}

getLastPushDate("hunter-parks")
    .then((date)=>console.log(date));
