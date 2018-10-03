const addLocation = (oldState, action) => {
    if (oldState === undefined) {
        return ({
            ...oldState, 
            locations: [{ location: action.location, specific: action.specific, link: action.link }]
        })
    } else {
        let savedLocations = oldState.locations.map(location => location.specific)
        if (savedLocations.includes(action.specific)) {
            let filteredLocations = oldState.locations.filter(location => location.specific !== action.specific)
            return ({
            ...oldState, 
            locations: [{ location: action.location, specific: action.specific, link: action.link }].concat(filteredLocations)
            })
        } else {
            return {
                ...oldState, 
                locations: [{ location: action.location, specific: action.specific, link: action.link }].concat(oldState.locations)
            }
        }
    }
    
}

const removeLocation = (oldState, action) => {
    let filteredLocations = oldState.locations.filter(location => location.specific !== action.specific)
    return ({
    ...oldState, 
    locations: filteredLocations
    });
}

const reducerRouter = {
    'ADD_LOCATION': addLocation,
    'REMOVE_LOCATION': removeLocation
}

const reducer = (oldState, action) => {
    let actionType = reducerRouter[action.type];
    if (actionType) {
        return actionType(oldState, action);
    } else {
        return oldState;
    }
}

export default reducer;