import {Title, Description} from "./About";
  
function Header() {
    return (
    <div className="my-4 shadow-md p-4 rounded-md bg-gray-100">
        <Title />
        <Description />
    </div>
    );
}

export default Header; 