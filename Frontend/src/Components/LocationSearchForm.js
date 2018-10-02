import React from 'react';
import { connect } from 'react-redux';

class LocationSearchForm extends React.Component {
    componentDidMount() {
        let query = this.props.match.params.query;
        fetch(`http://localhost:3001/api/location/${query}`)
            .then(response => {
                return response.json();
            })
            // .then(products => {
            //     this.props.dispatch({ type: 'LOAD_LOCATIONS', products: products })
            //  });
    }
    render() {
        return (
            <div className="homepage">
                <h1>Weather App</h1>
                {/* <ProductScreen {...this.props}/> */}
            </div>)
    }
}

let SmartHomepage = connect(state => ({ products: state.products }))(Homepage);

export default SmartHomepage;