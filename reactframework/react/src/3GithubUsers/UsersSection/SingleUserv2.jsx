
function SingleUserv2 (props) {
    //console.log("Props are:", props);
const navigate = () => {
    console.log("Navigate to url", props.url);
};
//onClick={navigate}

function mouseOverCB() {
    console.log("Mouse over on ", props.login);
}

    return (
        <div className=" m-2 rounded-md shadow-md" onMouseEnter={mouseOverCB}>
            <div className=" rounded-md">
                <img className="rounded-md" src={props.avatar_url} />
            </div>
            <div className=" p-4">
                <div>
                Name <b>{props.login}</b>
                </div>
                   <button 
                   onClick={navigate}
                   className="px-4 py-2 rounded-md text-white bg-blue-600 cursor-pointer active:opacity-50"
                     >
                    Github
                </button>
            </div>
        </div>
    );
}

export default SingleUserv2;
    