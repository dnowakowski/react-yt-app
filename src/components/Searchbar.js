import React, {useState} from 'react';


const Searchbar = ({updateSearchedText}) =>{
    const [searchField, setSearchField] = useState("Kendrick Lamar");

    const onFormSubmit = (e) => {
        e.preventDefault();
        updateSearchedText(searchField);
    }

    const onInputChange = (e) => {
        setSearchField(e.target.value);
    }

    return (
            <div className = "search-bar ui segment">
                <form onSubmit = {onFormSubmit} className = "ui form">
                    <div className = "field">
                        <label> Video search</label>
                        <input value = {searchField} onChange = {onInputChange} className= "ui input" />
                        </div> 

                </form>
            </div>
        );
}

export default Searchbar