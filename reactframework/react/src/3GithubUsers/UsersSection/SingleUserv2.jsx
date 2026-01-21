
function SingleUserv2 (props) {
    console.log("Props are:", props);
    return (
        <div>
            <div >
                <img src={props.avatr_url} />
            </div>
            <ul>
                <li>Name <b>{props.login}</b></li>
                <li>
                    Url <b> {props.url}</b>
                </li>
            </ul>
        </div>
    );
}

export default SingleUserv2;
    