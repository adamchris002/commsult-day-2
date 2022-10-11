import React from "react";
import "./App.css";
import AgeComponent from "./AgeComponent";

//function App() diganti menjadi class App extends React.Component
class App extends React.Component {
  //menggunakan constructor untuk membuat state
  constructor(props) {
    super(props);

    this.state = {
      name: "Adam Christoper",
      age: 20,
      hobby: "Playing Games",
    };
  }

  componentDidUpdate() {
    console.log("App is updated!")
  }

  incrementAge = ()=> {
    this.setState({age: this.state.age + 1})
  }
  decrementAge= ()=> {
    this.setState({age: this.state.age - 1})
  }

  render() {
    return (
      <div className="App">
        <h1>Hello my Name is {this.state.name}</h1>
        <h3>My hobby is {this.state.hobby}</h3>
        <AgeComponent age={this.state.age} incrementAge={this.incrementAge} decrementAge={this.decrementAge}/>
      </div>
    );
  }
}

export default App;
