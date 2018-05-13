/* First Comment component iteration. Too bloated -> extract micro components
      function Comment(props) {
        return (
          <div className="Comment">
            <div className="UserInfo">
              <img className="Avatar"
                src={props.author.avatarUrl}
                alt={props.author.name}
              />
            <div className="UserInfo-name">
              {props.author.name}
            </div>
          </div>
          <div className="Comment-text">
            {props.text}
          </div>
          <div className="Comment-date">
            {formatDate(props.date)}
          </div>
        );
      }
*/
//React Componets must be Pure w/ respect to their props
//Extracted Avatar component from Comment
//Contextualize the props to Component-level
function Avatar(props) {
    return (
        <img className="Avatar"
        src={props.user.avatarUrl}
        alt={props.user.name}
        />
    );
}

function UserInfo(props) {
    return (
        <div className="UserInfo">
        <Avatar user={props.user} />
        <div className="UserInfo-name">
            {props.user.name}
        </div>
        </div>
    );
}

function Comment(props) {
    return (
        <div className="Comment">
        <UserInfo user={props.author} />
        <div className="Comment-text">
            {props.text}
        </div>
        <div className="Comment-date">
            {formatDate(props.date)}
        </div>
        </div>
    );
}
