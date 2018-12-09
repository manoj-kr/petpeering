import React, { Component } from 'react';
import _ from 'lodash';

const PetsList = (props) => {
    console.log("Pets List");
    return (<div className="panel panel-default">
        <div className="panel-heading">Pet List</div>
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Pet Name</th>
                        <th>Place</th>
                        <th>Age</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {!_.isEmpty(props.results) && _.map(props.results, (value, index) => {
                        return (<tr key={index}>
                            <th scope="row">{value.id}</th>
                            <td>{value.name}</td>
                            <td>{value.place}</td>
                            <td>{value.age}</td>
                            <td>
                                {value.sold ? <button type="button" className="btn btn-danger">Sold</button> : <button type="button"  className="btn btn-primary" onClick={() => props.buyPet(value.id)}>Buy</button>}</td>
                        </tr>);
                    })}
                    
                </tbody>
            </table>
        </div>
    );
};

export default PetsList;