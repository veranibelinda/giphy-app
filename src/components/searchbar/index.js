import Button from "../button";

const SearchBar = props => {
    return (
        <div>
            <form>
                <input class="search" type="text" placeholder={props.label} required/>
                <Button label="Search"/>
            </form>
        </div>
    );
}

export default SearchBar;