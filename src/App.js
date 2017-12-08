import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      {name: 'Ronaldo', age: 32},
      {name: 'Messi', age: 30},
      {name: 'Neymar', age: 25}
    ],
    otherState: 'some other value',
    showPersons: false
  }

  // thay doi gia tri dong 1 khi click vao dong 2
  // switchNameHandler = (newName) => {
  //   // console.log("Alibaba!!!");
  //   this.setState(
  //     {
  //       persons: [
  //         {name: newName, age: 36},
  //         {name: 'Lampard', age: 34},
  //         {name: 'Black', age: 38}
  //       ]
  //     }
  //   )
  // }

  // thay doi gia tri khi nhap vao input file Person
  nameChangedHandler = (event) => {
    this.setState(
      {
        persons: [
          {name: 'Ronaldo', age: 36},
          {name: event.target.value, age: 34},
          {name: 'Black', age: 38}
        ]
      }
    )
  }

  deletePerSonHandler = (personIndex) => {
    const persons = this.state.persons;
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  // dung trong return
  // <button onClick={this.switchNameHandler.bind(this, 'Drogba')}>Switch name</button>
  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    // if(this.state.showPersons){
    //   persons = (
    //     <div>
    //       <Person
    //         name={this.state.persons[0].name}
    //         age={this.state.persons[0].age} />
    //       <Person
    //         name={this.state.persons[1].name}
    //         age={this.state.persons[1].age}
    //         click={this.switchNameHandler.bind(this, 'Kaka')}
    //         changed={this.nameChangedHandler}> My Hobbies: Football </Person>
    //       <Person
    //         name={this.state.persons[2].name}
    //         age={this.state.persons[2].age} />
    //     </div>
    //   );
    // }

    if(this.state.showPersons){
      persons = (
        <div>
          {
            this.state.persons.map((person, index) => {
              return <Person
                click={() => this.deletePerSonHandler(index)}
                name={person.name}
                age={person.age}/>
            })
          }
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, Wellcome to react!</h1>
        <p>This is really working</p>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>

    );
  }
}

export default App;
