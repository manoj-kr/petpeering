import React, { Component } from 'react';

class PetSave extends Component {
    constructor(props){
        super();
        this.state = {
        };
        this.save = this.save.bind(this);
    }

    save(id){
        console.log("Saving");    
    }

    render() {
        const { save } = this; 
        return (
            <div className="col-md-6 col-md-offset-3">
                <form className="form-signin">
                    <fieldset><legend>Add Pet</legend></fieldset>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="email" id="name" className="form-control" placeholder="Name" required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="place">Place</label>
                        <input type="password" id="place" className="form-control" placeholder="Place" required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="age">Age</label>
                        <input type="password" id="age" className="form-control" placeholder="Age" required/>
                    </div>
                    <button className="btn btn-primary mr10" type="submit" onClick={save}>Save</button>
                    <button className="btn btn-primary" type="reset">Reset</button>
                </form>
            </div>
        );
    }
}

export default PetSave;
