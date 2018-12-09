import React, { Component } from 'react';

const BuyPet = (props) => {
    console.log("Buying");
    return (<div className="panel panel-default">
        <div className="panel-heading">Pet List</div>
        <div className="message">
            <h4>The pet says:</h4>
            <br/><br/>
            Thank you for buying me.
        </div> 
    </div>
);
};

export default BuyPet;