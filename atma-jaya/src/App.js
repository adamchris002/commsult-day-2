import React from "react";
import logo from "./logo.svg";
import "./App.css";

//function App() diganti menjadi class App extends React.Component
class App extends React.Component {

//menggunakan constructor untuk membuat state
constructor(props) {
  super(props);

  this.state = {
    name: "Adam Christoper", 
    age: 20,
    hobby: "Playing Games"
  }
}

  render() {
    return (
      <div className="App">
        <h1>Hello my Name is {this.state.name}</h1> 
        <h3>I am {this.state.age} years old</h3>
        <h3>My hobby is {this.state.hobby}</h3>

        <button className="Add" onClick={() => this.setState({age: this.state.age + 1})}>Add</button>
        <button className="Substract" onClick={() => this.setState({age: this.state.age - 1})}>Substract</button>
      </div>
    );
  }
}

export default App;
