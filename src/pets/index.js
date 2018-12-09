import React, { Component } from 'react';

// Components
import PetsList from './petsList';
import BuyPet from './buyPet';

// Styles
import './index.css';

class Pets extends Component {
    constructor(props){
        super();
        this.state = {
            results: [
                {
                    id: 1,
                    name: 'Tommy',
                    place: 'Place 1',
                    age: 2,
                    sold: true
                },
                {   id: 2,
                    name: 'Moti',
                    place: 'Place 2',
                    age: 2,
                    sold: true
                },
                {
                    id: 3,
                    name: 'Vodafone',
                    place: 'Place 3',
                    age: 2,
                    sold: false
                },
                {
                    id: 4,
                    name: 'Vodafone1',
                    place: 'Place 4',
                    age: 2,
                    sold: false
                }

            ],
            view: 'pets'
        };
        this.buyPet = this.buyPet.bind(this);
    }

    buyPet(id){
        this.changeView('buy');
        this.props.history.push("/pets/buy-pet/" + id);
    }

    changeView(view){
        this.setState({view});
    }


  render() {
    console.log("viewviewviewview", this.props);
    const { buyPet } = this, 
    { results, view } = this.state;  
    return (
      <div className="pets col-md-12">
        { view === 'pets' && <PetsList 
            results={results}
            buyPet={buyPet}/> 
        }
        { view === 'buy' && <BuyPet 
            selected={results}
            buyPet={buyPet}/> 
        }
      </div>
    );
  }
}

export default Pets;
