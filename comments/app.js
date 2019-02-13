
const Profiles = [{
    profile: "https://static1.squarespace.com/static/565caa88e4b09e258567d8a8/t/5673101dd82d5e366e7822f4/1450381341919/Female+Avatar",
    username: "Mary",
    comment: "I'm vegan, and I'm looking for some local restaurants. Any suggestions?"
},
{
    profile: "https://pngimage.net/wp-content/uploads/2018/05/avatar-icon-png-1.png",
    username: "Sam",
    comment: "There's an excellent vegan place on Main called 'The Spot'."
},
{
    profile: "https://icons-for-free.com/free-icons/png/512/2754576.png",
    username: "Jennifer",
    comment: "I'm a troll. blah blah blah"
},
{
    profile: "https://cdn1.iconfinder.com/data/icons/user-pictures/100/female1-512.png",
    username: "Sarah",
    comment: "Hi"
}]

let ProfilePic = ({ image, user }) => {
    return ( 
        <span>
            <img src={ image } width="200px"></img>
            <h3>{ user }</h3>
        </span>
    )
}
let CommentBody = ({ comment}) => {
    return (
        <p>
            {comment}
        </p>
    )
}

let Comment = ({profileRender, userRender, commentRender}) => {
    return (
        <div>
            <ProfilePic image={profileRender} user={userRender}/>
            <CommentBody comment={commentRender} />
        </div>
    )
}

let Comments = ({accounts}) => {
    return (
        <div>
            {accounts.map(function(accountsRender) {
                return <Comment profileRender={accountsRender.profile}
                                userRender={accountsRender.username} 
                                commentRender={accountsRender.comment}  />
            })}
        </div>
    )
}



ReactDOM.render(<Comments accounts={Profiles}/>, document.getElementById('root'))