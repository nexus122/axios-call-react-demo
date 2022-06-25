import React from 'react';
import axios from 'axios';

export default class ClassScreenComponent extends React.Component {
    state = {
        persons: []        
    }

    componentDidMount() {
        axios.get(`./races.json`)
            .then(res => {
                const persons = res.data.race;
                console.log("persons: ", persons);
                this.setState({ persons });
            })
    }

    render() {
        return (
            <div>
                {this.state.persons.map(raza => {
                    let keys = Object.keys(raza);
                    console.log(keys);
                    if (raza.name) {
                        return( 
                            <div className='card'>
                                <h2>{raza.name}</h2>                                
                            </div>
                        )
                    }else return;
                })}
            </div>
        )
    }
}