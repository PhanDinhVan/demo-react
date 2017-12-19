import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Radium, {StyleRoot} from 'radium';

class App extends Component {

  state = {
    persons: [
      {id: 'qwe1', name: 'Ronaldo', age: 32},
      {id: 'asd1', name: 'Messi', age: 30},
      {id: 'zxc1', name: 'Neymar', age: 25}
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
  nameChangedHandler = (event, id) => {

    // lay chi so cua object can sua
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    // get object in array persons theo chi so personIndex
    const person = {
      ...this.state.persons[personIndex]
    };

    // set name of object vua get
    person.name = event.target.value;

    // copy lai array persons
    const persons = [...this.state.persons];
    // gan lai value of object in array persons = voi object vua edit
    persons[personIndex] = person;

    // set lai array
    this.setState(
      {
        persons: persons
      }
    );

    // this.setState(
    //   {
    //     persons: [
    //       {name: 'Ronaldo', age: 36},
    //       {name: event.target.value, age: 34},
    //       {name: 'Black', age: 38}
    //     ]
    //   }
    // )
  }

  // delete row
  deletePerSonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    // copy mang persons in state
    const persons = [...this.state.persons];
    // delete object in array persons o vi tri la personIndex, va delete 1 object
    persons.splice(personIndex, 1);
    // set lai array persons
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
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
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
                age={person.age}
                key={person.id}
                changed={(event) => this.nameChangedHandler(event, person.id)} />
            })
          }
        </div>
      );

      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      };
    }

    let classes = [];

    if(this.state.persons.length <= 2){
      classes.push('red'); // classes = ['red']
    }

    if(this.state.persons.length <= 1){
      classes.push('bold'); // classes = ['red', 'bold']
    }

    return (
      <div className="App">
        <h1>Hi, Wellcome to react!</h1>
        <p className={classes.join(' ')}>This is really working</p>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>

    );
  }
}

export default Radium(App);
