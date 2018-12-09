

import React, { Component } from 'react';
import _ from 'lodash';
class View extends Component {
    constructor(props){
        super();
        this.state = {
            data: {}
        };
    }

    componentDidMount() {
        fetch('http://localhost:8080/pets/2').then(results => {
            console.log("results----", results);
                return results.json();
            })
            .then(data => {
                console.log("results----", data);
                this.setState({data});
                console.log("state", this.state);
            })
    }

    render() {
        console.log("viewviewviewview", this.props);
        const { data } = this.state;  
        return (
            <div className="col-md-6 col-md-offset-3">
                {_.isEmpty(data) && 
                    <div>
                        <h3>Pet Details</h3>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            {data.petName}
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Place</label>
                            {data.petPlace}
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Age</label>
                            {data.petAge}
                        </div>
                    </div>
                }
            </div>
        );
    }
}

export default View;
