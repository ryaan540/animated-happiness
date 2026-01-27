
function SearchSection() {
    console.log("Search Section Rendered");
    console.log("State forces a render of all componets using the state")

    let searchValue = "This is search value"
    const userInput = (e) => {
        console.log(e);
        const value = e.target.value;
   //     console.log("Input value is:", value);
        searchValue = e.target.value;
   console.log("Search value is ", searchValue);
    };

    return (
        <div className="flex justify-center my-4">
            <div className="flex items-center">
                <input className="py-0.5 px-2 border" onChange={userInput} value={searchValue} />
                <button className="rounded px-2 py-1 text-white bg-blue-500 cursor-pointer">
                    Search
                </button>
            </div>
            <div>{searchValue}</div>
        </div>
    );
}

export default SearchSection;
    