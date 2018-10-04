import React from 'react';


let LocationSearchBar = (props) => {
    return (
        <form onSubmit={props.searchLocations}>
            <input className="input-field" type="text" placeholder="Search" value={props.newInput} onChange={props.handleNewInput} required={true}/>
            <button className="btn btn-info" type='submit' value="Search"> <i className="fa fa-search" aria-hidden="true"></i> </button>
        </form>
    )
}

export default LocationSearchBar;